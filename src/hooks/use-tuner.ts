import { useState, useEffect, useRef, useCallback } from "react"

export interface TunerData {
  pitch: number // Hz
  note: string  // e.g. "A"
  octave: number // e.g. 4
  cents: number // -50 to +50
  clarity: number // 0 to 1 (confidence)
}

const A4 = 440
const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export function useTuner() {
  const [isListening, setIsListening] = useState(false)
  const [tunerData, setTunerData] = useState<TunerData>({
    pitch: 0,
    note: "-",
    octave: 0,
    cents: 0,
    clarity: 0,
  })

  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const bufferRef = useRef<Float32Array | null>(null)

  // Auto-correlate algorithm to find pitch
  const autoCorrelate = (buffer: Float32Array, sampleRate: number): number => {
    // RMS (Root Mean Square) to check signal strength
    let sum = 0
    for (let i = 0; i < buffer.length; i++) {
      sum += buffer[i] * buffer[i]
    }
    const rms = Math.sqrt(sum / buffer.length)
    if (rms < 0.02) return -1 // Threshold increased to ignore background noise

    // Auto-correlation
    let r1 = 0, r2 = sampleRate - 1, thres = 0.2
    for (let i = 0; i < buffer.length / 2; i++) {
      if (Math.abs(buffer[i]) < thres) { r1 = i; break }
    }
    for (let i = 1; i < buffer.length / 2; i++) {
      if (Math.abs(buffer[buffer.length - i]) < thres) { r2 = buffer.length - i; break }
    }

    const buf2 = buffer.slice(r1, r2)
    const c = new Array(buf2.length).fill(0)
    for (let i = 0; i < buf2.length; i++) {
      for (let j = 0; j < buf2.length - i; j++) {
        c[i] = c[i] + buf2[j] * buf2[j + i]
      }
    }

    let d = 0
    while (c[d] > c[d + 1]) d++
    let maxval = -1, maxpos = -1
    for (let i = d; i < buf2.length; i++) {
      if (c[i] > maxval) {
        maxval = c[i]
        maxpos = i
      }
    }
    let T0 = maxpos

    // Parabolic interpolation for better precision
    const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1]
    const a = (x1 + x3 - 2 * x2) / 2
    const b = (x3 - x1) / 2
    if (a) T0 = T0 - b / (2 * a)

    return sampleRate / T0
  }

  const updatePitch = useCallback(() => {
    if (!analyserRef.current || !bufferRef.current || !audioContextRef.current) return

    analyserRef.current.getFloatTimeDomainData(bufferRef.current)
    const frequency = autoCorrelate(bufferRef.current, audioContextRef.current.sampleRate)

    if (frequency > -1) {
      // Convert frequency to note
      const noteNum = 12 * (Math.log(frequency / A4) / Math.log(2))
      const midi = Math.round(noteNum) + 69
      const noteIndex = midi % 12
      const octave = Math.floor(midi / 12) - 1
      const note = NOTES[noteIndex]

      // Calculate cents
      const prevMidi = midi - 1
      const nextMidi = midi + 1
      // Frequency of the perfect note
      const perfectFreq = A4 * Math.pow(2, (midi - 69) / 12)
      const cents = 1200 * Math.log2(frequency / perfectFreq)

      setTunerData({
        pitch: frequency,
        note,
        octave,
        cents,
        clarity: 1, // Simplified clarity for now
      })
    } else {
      // Keep old data but lower clarity or reset? 
      // Let's reset pitch but keep note for visual stability if needed, or just 0
      setTunerData(prev => ({ ...prev, clarity: 0 }))
    }

    rafIdRef.current = requestAnimationFrame(updatePitch)
  }, [])

  const startTuner = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const audioContext = new AudioContext()
      const analyser = audioContext.createAnalyser()
      const source = audioContext.createMediaStreamSource(stream)

      // Low-Pass Filter to remove high frequency noise and harmonics
      const filter = audioContext.createBiquadFilter()
      filter.type = "lowpass"
      filter.frequency.value = 1000 // Cutoff at 1000Hz (Guitar fundamentals are mostly below this)

      analyser.fftSize = 2048

      // Connect: Source -> Filter -> Analyser
      source.connect(filter)
      filter.connect(analyser)

      audioContextRef.current = audioContext
      analyserRef.current = analyser
      sourceRef.current = source
      bufferRef.current = new Float32Array(analyser.fftSize)

      setIsListening(true)
      updatePitch()
    } catch (err) {
      console.error("Error accessing microphone:", err)
      alert("Nie udało się uzyskać dostępu do mikrofonu. Sprawdź uprawnienia.")
    }
  }

  const stopTuner = () => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    if (sourceRef.current) sourceRef.current.disconnect()
    if (analyserRef.current) analyserRef.current.disconnect()
    if (audioContextRef.current) audioContextRef.current.close()

    setIsListening(false)
    setTunerData({ pitch: 0, note: "-", octave: 0, cents: 0, clarity: 0 })
  }

  useEffect(() => {
    return () => {
      stopTuner()
    }
  }, [])

  return { startTuner, stopTuner, isListening, tunerData }
}
