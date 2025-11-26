"use client"

import { useState, useEffect, useRef } from "react"
import { useMetronome } from "@/hooks/use-metronome"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Square, Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

export function MetronomeCore() {
  const { t } = useLanguage();
  const { isPlaying, bpm, setBpm, beatsPerBar, setBeatsPerBar, startStop, currentBeat } = useMetronome(120)
  
  // Tap Tempo Logic
  const lastTapRef = useRef<number>(0)
  const tapTimesRef = useRef<number[]>([])

  const handleTap = () => {
    const now = Date.now()
    if (now - lastTapRef.current > 2000) {
        tapTimesRef.current = [] // Reset if too long between taps
    }
    lastTapRef.current = now
    tapTimesRef.current.push(now)

    if (tapTimesRef.current.length > 2) {
        const intervals = []
        for (let i = 1; i < tapTimesRef.current.length; i++) {
            intervals.push(tapTimesRef.current[i] - tapTimesRef.current[i-1])
        }
        const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length
        const newBpm = Math.round(60000 / avgInterval)
        if (newBpm >= 30 && newBpm <= 300) {
            setBpm(newBpm)
        }
        // Keep only last 5 taps
        if (tapTimesRef.current.length > 5) tapTimesRef.current.shift()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl space-y-8">
      
      {/* Visual Indicator */}
      <div className="flex gap-4 mb-4">
        {Array.from({ length: beatsPerBar }).map((_, i) => (
            <div 
                key={i}
                className={cn(
                    "w-6 h-6 rounded-full transition-all duration-100",
                    currentBeat === i && isPlaying 
                        ? (i === 0 ? "bg-blue-500 scale-125 shadow-[0_0_15px_rgba(59,130,246,0.8)]" : "bg-zinc-900 dark:bg-white scale-110") 
                        : "bg-zinc-300 dark:bg-zinc-700"
                )}
            />
        ))}
      </div>

      {/* BPM Display */}
      <div className="text-center space-y-2">
        <div className="text-8xl font-black text-zinc-900 dark:text-white tracking-tighter">
            {bpm}
        </div>
        <div className="text-zinc-500 dark:text-zinc-400 font-medium tracking-widest uppercase text-sm">
            {t.metronome.bpm}
        </div>
      </div>

      {/* Controls */}
      <div className="w-full space-y-6">
        
        {/* Slider */}
        <div className="flex items-center gap-4">
            <Button 
                variant="outline" size="icon" 
                onClick={() => setBpm(Math.max(30, bpm - 1))}
                className="rounded-full h-10 w-10 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white"
            >
                <Minus className="h-4 w-4" />
            </Button>
            
            <Slider
                value={[bpm]}
                min={30}
                max={300}
                step={1}
                onValueChange={(vals) => setBpm(vals[0])}
                className="flex-1"
            />

            <Button 
                variant="outline" size="icon" 
                onClick={() => setBpm(Math.min(300, bpm + 1))}
                className="rounded-full h-10 w-10 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white"
            >
                <Plus className="h-4 w-4" />
            </Button>
        </div>

        {/* Main Actions */}
        <div className="flex items-center justify-center gap-6">
            <Button
                size="lg"
                onClick={startStop}
                className={cn(
                    "h-20 w-20 rounded-full shadow-xl transition-all duration-300",
                    isPlaying 
                        ? "bg-red-500 hover:bg-red-600 shadow-red-500/20 text-white" 
                        : "bg-blue-500 hover:bg-blue-600 shadow-blue-500/20 text-white"
                )}
            >
                {isPlaying ? <Square className="h-8 w-8 fill-current" /> : <Play className="h-8 w-8 fill-current ml-1" />}
            </Button>

            <Button
                variant="secondary"
                size="lg"
                onClick={handleTap}
                className="h-20 w-20 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 font-bold"
            >
                {t.metronome.tap}
            </Button>
        </div>

        {/* Time Signature */}
        <div className="flex justify-center gap-2 pt-4">
            {[2, 3, 4, 6].map(beats => (
                <Button
                    key={beats}
                    variant={beatsPerBar === beats ? "default" : "ghost"}
                    onClick={() => setBeatsPerBar(beats)}
                    className={cn(
                        "rounded-full w-12 h-12",
                        beatsPerBar === beats 
                            ? "bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200" 
                            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    )}
                >
                    {beats}/4
                </Button>
            ))}
        </div>

      </div>
    </div>
  )
}
