"use client"

import { cn } from "@/lib/utils"
import { ChevronUp, Mic, Music } from "lucide-react"

interface TunerDisplayProps {
  note: string;      // e.g. "E"
  octave: number;    // e.g. 2
  cents: number;     // Deviation: -50 to +50
  frequency: number; // e.g. 82.41 Hz
}

export function TunerDisplay({ note, octave, cents, frequency }: TunerDisplayProps) {
  // Logic: Blue if within +/- 5 cents
  const isInTune = Math.abs(cents) < 5
  const isFar = Math.abs(cents) > 20
  
  // Color logic
  const colorClass = isInTune 
    ? "text-blue-500 dark:text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]" 
    : isFar ? "text-red-500" : "text-yellow-500"

  const statusColor = isInTune 
    ? "text-blue-500" 
    : isFar ? "text-red-500" : "text-yellow-500"

  // Needle position (50% is center/0 cents)
  // Clamp between 0 and 100
  const needlePosition = Math.max(0, Math.min(100, 50 + cents))

  return (
    <div className="flex flex-col items-center w-full max-w-[350px] space-y-6">
      
      {/* DIGITAL DISPLAY CONTAINER */}
      <div className="relative w-64 h-64 bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Grid Texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Frequency (Top) */}
        <div className="absolute top-6 font-mono text-zinc-500 text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
            {frequency > 0 ? `${frequency.toFixed(1)} Hz` : "--- Hz"}
        </div>

        {/* Main Note (Center) */}
        <div className="relative z-10 flex items-end justify-center -mt-2">
            <span className={cn(
                "text-9xl font-black tracking-tighter transition-all duration-200 leading-none", 
                colorClass,
                isInTune && "scale-110"
            )}>
                {note}
            </span>
            {note !== "-" && (
                <span className="text-4xl font-bold text-zinc-600 mb-4 ml-2">{octave}</span>
            )}
        </div>

        {/* Status Text (Bottom inside display) */}
        <div className="absolute bottom-8 font-bold tracking-[0.3em] uppercase text-[10px] text-center w-full">
            {note === "-" ? (
                <span className="text-zinc-600 animate-pulse">Listening...</span>
            ) : isInTune ? (
                <span className="text-blue-400 animate-pulse">Perfect Tune</span>
            ) : cents < 0 ? (
                <span className="text-red-500">Too Low</span>
            ) : (
                <span className="text-red-500">Too High</span>
            )}
        </div>
      </div>

      {/* TUNING METER (Separate Component Below) */}
      <div className="w-full px-2 mt-4">
        <div className="relative h-16 w-full bg-zinc-100 dark:bg-zinc-900 rounded-full border-2 border-zinc-200 dark:border-zinc-800 shadow-inner flex items-center px-6">
            
            {/* Center Marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full z-0"></div>
            
            {/* Tolerance Zone (Blue) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500/10 rounded-full border border-blue-500/20 z-0"></div>

            {/* Ticks */}
            <div className="absolute inset-0 w-full flex justify-between px-6 items-center pointer-events-none z-0">
                {/* -50 */}
                <div className="flex flex-col items-center h-full justify-end pb-2">
                    <div className="w-0.5 h-3 bg-zinc-300 dark:bg-zinc-700 mb-1"></div>
                    <span className="text-[10px] font-bold text-zinc-400 font-mono">-50</span>
                </div>
                {/* -25 */}
                <div className="flex flex-col items-center h-full justify-end pb-3 opacity-50">
                    <div className="w-0.5 h-2 bg-zinc-300 dark:bg-zinc-700 mb-1"></div>
                    <span className="text-[9px] font-bold text-zinc-400 font-mono">-25</span>
                </div>
                {/* Center Spacer */}
                <div className="w-10"></div>
                {/* +25 */}
                <div className="flex flex-col items-center h-full justify-end pb-3 opacity-50">
                    <div className="w-0.5 h-2 bg-zinc-300 dark:bg-zinc-700 mb-1"></div>
                    <span className="text-[9px] font-bold text-zinc-400 font-mono">+25</span>
                </div>
                {/* +50 */}
                <div className="flex flex-col items-center h-full justify-end pb-2">
                    <div className="w-0.5 h-3 bg-zinc-300 dark:bg-zinc-700 mb-1"></div>
                    <span className="text-[10px] font-bold text-zinc-400 font-mono">+50</span>
                </div>
            </div>

            {/* The Needle / Ball */}
            {/* We use a container with padding (px-6 above) to ensure the ball doesn't overflow the rounded corners at 0% or 100% */}
            <div className="absolute inset-x-6 h-full flex items-center pointer-events-none z-10">
                <div 
                    className="absolute h-8 w-8 -ml-4 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.2)] border-4 border-white dark:border-zinc-800 transition-all duration-100 ease-out will-change-transform flex items-center justify-center"
                    style={{ left: `${needlePosition}%` }}
                >
                    <div className={cn(
                        "w-full h-full rounded-full transition-colors duration-200",
                        isInTune ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" : "bg-zinc-400 dark:bg-zinc-600"
                    )}></div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}