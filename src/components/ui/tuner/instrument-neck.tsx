
"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

// Define the shape of a single string
interface StringData {
  note: string;
  octave: number;
  label: string;
}

// Define what this component receives from its parent
interface InstrumentNeckProps {
  strings: StringData[];     
  activeStringIndex: number; // -1 if none (or auto mode detecting nothing)
  onStringClick: (index: number) => void; // Callback for manual selection
  isManualMode: boolean;
  tunedStrings: number[]; // Indices of strings that are already tuned
}

export function InstrumentNeck({ strings, activeStringIndex, onStringClick, isManualMode, tunedStrings }: InstrumentNeckProps) {
  return (
    <div className="flex justify-between items-stretch w-full h-[400px] bg-zinc-100 dark:bg-zinc-900 rounded-b-xl border-x-4 border-b-4 border-zinc-300 dark:border-zinc-800 p-4 relative shadow-2xl transition-all">
      
      {strings.map((string, index) => {
        const isActive = index === activeStringIndex
        const isTuned = tunedStrings.includes(index)

        return (
          <div 
            key={string.label + index} 
            className="relative flex flex-col items-center h-full group flex-1 cursor-pointer"
            onClick={() => onStringClick(index)}
          >
            
            {/* TUNING PEG (Circle with note) */}
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 transition-all duration-300 z-10 font-bold text-lg select-none relative",
              isActive 
                ? "bg-blue-100 dark:bg-blue-500/20 border-blue-500 text-blue-600 dark:text-blue-500 scale-110 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                : isTuned
                    ? "bg-blue-500 border-blue-600 text-white dark:text-black scale-100 shadow-md"
                    : "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-500"
            )}>
              {string.note}
              
              {/* Checkmark for tuned strings */}
              {isTuned && !isActive && (
                  <div className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full p-0.5 shadow-sm">
                      <Check className="w-3 h-3" />
                  </div>
              )}
            </div>

            {/* STRING */}
            <div className="relative h-full flex justify-center w-full">
                <div className={cn(
                    "h-full transition-colors duration-300",
                    // Thickness logic
                    strings.length === 4 ? "w-1.5" : (index < 2 ? "w-1.5" : index < 4 ? "w-1" : "w-0.5"),
                    
                    isActive 
                        ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                        : isTuned
                            ? "bg-blue-600/60 dark:bg-blue-500/50"
                            : "bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-500"
                )}></div>
            </div>

          </div>
        )
      })}
      
      {/* Frets in background */}
      {[20, 40, 60, 80].map((top) => (
         <div key={top} className="absolute w-full h-1 bg-zinc-300/50 dark:bg-zinc-800/50 left-0 pointer-events-none" style={{ top: `${top}%` }}></div>
      ))}

    </div>
  )
}
