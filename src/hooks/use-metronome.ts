import { useState, useEffect, useRef, useCallback } from 'react';

export interface MetronomeState {
    bpm: number;
    isPlaying: boolean;
    beatsPerBar: number;
    currentBeat: number;
}

export function useMetronome(initialBpm: number = 120) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [bpm, setBpm] = useState(initialBpm);
    const [beatsPerBar, setBeatsPerBar] = useState(4);
    const [currentBeat, setCurrentBeat] = useState(0);

    const audioContextRef = useRef<AudioContext | null>(null);
    const nextNoteTimeRef = useRef<number>(0);
    const timerIDRef = useRef<number | null>(null);
    const rafIDRef = useRef<number | null>(null);

    // Refs for scheduling logic
    const bpmRef = useRef(bpm);
    const beatsPerBarRef = useRef(beatsPerBar);
    const currentBeatRef = useRef(0); // Tracks the beat being SCHEDULED (ahead of time)
    const notesInQueueRef = useRef<{ note: number; time: number }[]>([]);

    const lookahead = 25.0;
    const scheduleAheadTime = 0.1;

    // Update refs
    useEffect(() => {
        bpmRef.current = bpm;
    }, [bpm]);

    useEffect(() => {
        beatsPerBarRef.current = beatsPerBar;
    }, [beatsPerBar]);

    // Initialize AudioContext
    useEffect(() => {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
            audioContextRef.current = new AudioContextClass();
        }
        return () => {
            if (timerIDRef.current) window.clearTimeout(timerIDRef.current);
            if (rafIDRef.current) window.cancelAnimationFrame(rafIDRef.current);
            if (audioContextRef.current) audioContextRef.current.close();
        };
    }, []);

    // Advance the "next note" time and index
    const nextNote = useCallback(() => {
        const secondsPerBeat = 60.0 / bpmRef.current;
        nextNoteTimeRef.current += secondsPerBeat;
        currentBeatRef.current = (currentBeatRef.current + 1) % beatsPerBarRef.current;
    }, []);

    // Schedule a note to play
    const scheduleNote = useCallback((beatNumber: number, time: number) => {
        // Push to queue for visuals
        notesInQueueRef.current.push({ note: beatNumber, time: time });

        // Audio
        const osc = audioContextRef.current!.createOscillator();
        const envelope = audioContextRef.current!.createGain();

        const isAccent = beatNumber === 0;

        osc.frequency.value = isAccent ? 1500 : 800;
        envelope.gain.value = 1;
        envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
        envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

        osc.connect(envelope);
        envelope.connect(audioContextRef.current!.destination);

        osc.start(time);
        osc.stop(time + 0.03);
    }, []);

    // Audio Scheduler Loop (runs frequently)
    const scheduler = useCallback(() => {
        while (nextNoteTimeRef.current < audioContextRef.current!.currentTime + scheduleAheadTime) {
            scheduleNote(currentBeatRef.current, nextNoteTimeRef.current);
            nextNote();
        }
        timerIDRef.current = window.setTimeout(scheduler, lookahead);
    }, [scheduleNote, nextNote]);

    // Visual Loop (runs on animation frame)
    const draw = useCallback(() => {
        const currentTime = audioContextRef.current?.currentTime || 0;

        while (notesInQueueRef.current.length && notesInQueueRef.current[0].time < currentTime) {
            const currentNote = notesInQueueRef.current[0];
            setCurrentBeat(currentNote.note);
            notesInQueueRef.current.splice(0, 1); // Remove processed note
        }

        if (isPlaying) {
            rafIDRef.current = requestAnimationFrame(draw);
        }
    }, [isPlaying]);

    // Start/Stop handler
    const startStop = useCallback(() => {
        if (isPlaying) {
            // Stop
            if (timerIDRef.current) window.clearTimeout(timerIDRef.current);
            if (rafIDRef.current) window.cancelAnimationFrame(rafIDRef.current);
            setIsPlaying(false);
            setCurrentBeat(0);
            notesInQueueRef.current = [];
        } else {
            // Start
            if (audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }

            currentBeatRef.current = 0; // Reset scheduling counter
            nextNoteTimeRef.current = audioContextRef.current!.currentTime + 0.05;

            setIsPlaying(true);
            scheduler();
        }
    }, [isPlaying, scheduler]);

    // Trigger visual loop when playing starts
    useEffect(() => {
        if (isPlaying) {
            rafIDRef.current = requestAnimationFrame(draw);
        } else {
            if (rafIDRef.current) window.cancelAnimationFrame(rafIDRef.current);
        }
    }, [isPlaying, draw]);

    return {
        isPlaying,
        bpm,
        setBpm,
        beatsPerBar,
        setBeatsPerBar,
        startStop,
        currentBeat
    };
}
