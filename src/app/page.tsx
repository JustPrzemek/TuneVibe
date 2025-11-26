
"use client"

import { useState, useEffect, useRef } from "react"
import { InstrumentNeck } from "@/components/ui/tuner/instrument-neck"
import { TunerDisplay } from "@/components/ui/tuner/tuner-display"
import { tunings, type InstrumentType } from "@/lib/tunings"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTuner } from "@/hooks/use-tuner"
import { Mic, RefreshCcw, RotateCcw, Smartphone, Download } from "lucide-react"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage();
  const [currentInstrument, setCurrentInstrument] = useState<InstrumentType>("guitar")
  
  // Tuning State
  const [tuningMode, setTuningMode] = useState<'auto' | 'manual'>('auto')
  const [manualStringIndex, setManualStringIndex] = useState<number | null>(null)
  const [activeString, setActiveString] = useState(-1) // -1 means no string detected/selected
  const [tunedStrings, setTunedStrings] = useState<number[]>([])

  const { startTuner, isListening, tunerData } = useTuner()
  
  // Ref to track how long a string has been in tune
  const inTuneStartTimeRef = useRef<number | null>(null)

  // Logic to determine active string and check if tuned
  useEffect(() => {
    if (!isListening) {
        setActiveString(-1)
        inTuneStartTimeRef.current = null
        return
    }

    const currentStrings = tunings[currentInstrument]
    let currentActiveIndex = -1

    if (tuningMode === 'manual' && manualStringIndex !== null) {
        currentActiveIndex = manualStringIndex
    } else {
        // AUTO MODE: Detect closest string based on frequency
        // We only run this if we have a pitch signal
        if (tunerData.pitch > 0) {
             let minDiff = Infinity
             let closestIndex = -1

             currentStrings.forEach((string, index) => {
                // Calculate target frequency for this string
                // A4 = 440Hz. MIDI note for A4 is 69.
                // We need a helper or map for note names to semitones.
                const noteOffsets: {[key: string]: number} = {
                    "C": 0, "C#": 1, "D": 2, "D#": 3, "E": 4, "F": 5, 
                    "F#": 6, "G": 7, "G#": 8, "A": 9, "A#": 10, "B": 11
                }
                const noteVal = noteOffsets[string.note]
                // MIDI number = (octave + 1) * 12 + noteVal
                const midi = (string.octave + 1) * 12 + noteVal
                const targetFreq = 440 * Math.pow(2, (midi - 69) / 12)
                
                const diff = Math.abs(tunerData.pitch - targetFreq)
                if (diff < minDiff) {
                    minDiff = diff
                    closestIndex = index
                }
             })

             // Only switch if we are reasonably close to a string (e.g. within +/- 500 cents? or just closest)
             // Let's just take the closest one, but maybe require it to be somewhat plausible to avoid jumping on noise.
             // But the tunerData.pitch > 0 check + clarity check in useTuner handles noise.
             if (closestIndex !== -1) {
                currentActiveIndex = closestIndex
             }
        }
    }

    setActiveString(currentActiveIndex)

    // PROGRESSIVE TUNING LOGIC
    if (currentActiveIndex !== -1) {
        // Check if currently in tune (within 5 cents)
        if (Math.abs(tunerData.cents) < 5) {
            if (inTuneStartTimeRef.current === null) {
                inTuneStartTimeRef.current = Date.now()
            } else {
                // If in tune for > 500ms (0.5 second), mark as tuned - Faster lock-in!
                if (Date.now() - inTuneStartTimeRef.current > 500) {
                    setTunedStrings(prev => {
                        if (!prev.includes(currentActiveIndex)) {
                            return [...prev, currentActiveIndex]
                        }
                        return prev
                    })
                }
            }
        } else {
            // Reset timer if goes out of tune
            inTuneStartTimeRef.current = null
        }
    } else {
        inTuneStartTimeRef.current = null
    }

  }, [isListening, tunerData, tuningMode, manualStringIndex, currentInstrument])


  const handleStringClick = (index: number) => {
    if (tuningMode === 'manual' && manualStringIndex === index) {
        setTuningMode('auto')
        setManualStringIndex(null)
    } else {
        setTuningMode('manual')
        setManualStringIndex(index)
    }
  }

  const toggleAutoMode = () => {
    setTuningMode('auto')
    setManualStringIndex(null)
  }

  const resetProgress = () => {
    setTunedStrings([])
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full px-4 py-8 min-h-screen text-zinc-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300 relative overflow-hidden">
      
      <ParticlesBackground />

      {/* Header */}
      <div className="text-center space-y-2 z-10 mt-10">
        <h1 className="text-6xl font-black tracking-tighter">
          <span className="text-zinc-900 dark:text-white">Tune</span>
          <span className="text-blue-500">Vibe</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase text-xs">
          {t.common.description}
        </p>
      </div>

      {/* Instrument Selector */}
      <div className="flex gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-200 dark:border-zinc-800 w-full max-w-md justify-center z-10 shadow-xl">
        {(["guitar", "bass", "ukulele"] as InstrumentType[]).map((type) => (
            <Button
            key={type}
            variant="ghost"
            onClick={() => {
                setCurrentInstrument(type)
                setTuningMode('auto')
                setManualStringIndex(null)
                setTunedStrings([]) // Reset progress on instrument switch
            }}
            className={cn(
                "flex-1 capitalize rounded-full transition-all duration-300", 
                currentInstrument === type 
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-lg scale-105 font-bold" 
                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
            )}
            >
            {t.tuner.instruments[type]}
            </Button>
        ))}
      </div>

      {/* Main Tuner Area */}
      <div className="relative w-full max-w-[400px] flex flex-col items-center">
        
        {/* Start Button Overlay */}
        {!isListening && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-3xl transition-all duration-500">
                <Button 
                    size="lg" 
                    onClick={startTuner}
                    className="rounded-full h-24 w-24 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 scale-100 hover:scale-110"
                >
                    <Mic className="w-10 h-10" />
                </Button>
            </div>
        )}

        <div className="w-full p-6 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl relative overflow-hidden transition-colors duration-300">
            {/* Background Glow */}
            <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 blur-[100px] rounded-full transition-opacity duration-500",
                isListening && tunerData.clarity > 0.5 ? "opacity-100" : "opacity-0"
            )} />

            {/* Mode Indicator */}
            <div className="absolute top-4 right-4 z-20">
                {tuningMode === 'manual' && (
                    <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={toggleAutoMode}
                        className="h-7 text-xs gap-1 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500"
                    >
                        <RefreshCcw className="w-3 h-3" /> {t.tuner.autoMode}
                    </Button>
                )}
            </div>

            <TunerDisplay 
                note={isListening ? tunerData.note : "-"}
                octave={isListening ? tunerData.octave : 0}
                cents={isListening ? tunerData.cents : 0}
                frequency={isListening ? tunerData.pitch : 0}
            />
        </div>
      </div>

      {/* Neck Visualization */}
      <div className="w-full max-w-[400px] z-10 opacity-90 hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-between items-center mb-2 px-2">
            <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                {tuningMode === 'auto' ? t.tuner.autoMode : t.tuner.manualMode}
            </div>
            {tunedStrings.length > 0 && (
                <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetProgress}
                    className="h-6 text-[10px] text-zinc-500 hover:text-red-400 uppercase tracking-wider gap-1 px-2"
                >
                    <RotateCcw className="w-3 h-3" /> {t.tuner.reset}
                </Button>
            )}
        </div>
        
        <InstrumentNeck
          strings={tunings[currentInstrument]}
          activeStringIndex={activeString}
          onStringClick={handleStringClick}
          isManualMode={tuningMode === 'manual'}
          tunedStrings={tunedStrings}
        />
      </div>

      {/* Mobile App Promo */}
      <div id="download" className="w-full max-w-4xl mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-4 max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center md:justify-start gap-2">
                    <Smartphone className="w-8 h-8" />
                    {t.tuner.downloadTitle}
                </h2>
                <p className="text-blue-100 text-lg">
                    {t.tuner.downloadDesc}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                    <Button variant="secondary" className="gap-2 h-12 px-6 rounded-xl font-bold hover:scale-105 transition-transform">
                        <Download className="w-4 h-4" />
                        App Store
                    </Button>
                    <Button variant="secondary" className="gap-2 h-12 px-6 rounded-xl font-bold hover:scale-105 transition-transform">
                        <Download className="w-4 h-4" />
                        Google Play
                    </Button>
                </div>
            </div>
            
            {/* Phone Mockup (CSS only) */}
            <div className="relative w-32 h-64 bg-zinc-900 rounded-[2rem] border-4 border-zinc-800 shadow-xl flex flex-col items-center justify-center overflow-hidden shrink-0 transform rotate-[-10deg] hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 w-20 h-4 bg-black rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="w-full max-w-4xl mt-24 space-y-16 text-zinc-800 dark:text-zinc-200">
        
        <article className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.tuner.seo.article1.title}
          </h2>
          <div 
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: t.tuner.seo.article1.content }}
          />
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.tuner.seo.article2.title}
          </h2>
          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-4">
            <div dangerouslySetInnerHTML={{ __html: t.tuner.seo.article2.content }} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
              {[
                { note: "E2", freq: "82.41 Hz", desc: "6th string (thickest)" },
                { note: "A2", freq: "110.00 Hz", desc: "5th string" },
                { note: "D3", freq: "146.83 Hz", desc: "4th string" },
                { note: "G3", freq: "196.00 Hz", desc: "3rd string" },
                { note: "B3", freq: "246.94 Hz", desc: "2nd string" },
                { note: "E4", freq: "329.63 Hz", desc: "1st string (thinnest)" },
              ].map((item) => (
                <div key={item.note} className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="font-bold text-2xl text-blue-600 dark:text-blue-400">{item.note}</div>
                  <div className="text-sm font-mono text-zinc-500">{item.freq}</div>
                  <div className="text-sm mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.tuner.seo.article3.title}
          </h2>
          <div 
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: t.tuner.seo.article3.content }}
          />
        </article>

      </section>

    </div>
  )
}