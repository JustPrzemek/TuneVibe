"use client" // To będzie interaktywne, więc musi być client component

import { cn } from "@/lib/utils" // Funkcja pomocnicza do łączenia klas

// 1. Definiujemy dane. To jest nasza "baza wiedzy" o strunach.
// W przyszłości będziemy to brać z ustawień, teraz wpisujemy na sztywno.
const stringsData = [
  { note: "E", octave: 2, label: "E2 (Niska)" },
  { note: "A", octave: 2, label: "A2" },
  { note: "D", octave: 3, label: "D3" },
  { note: "G", octave: 3, label: "G3" },
  { note: "B", octave: 3, label: "B3" },
  { note: "E", octave: 4, label: "E4 (Wysoka)" },
]

export function GuitarNeck() {
  // Na razie symulujemy, że gramy strunę A (indeks 1), żebyś widział efekt
  const activeStringIndex = 5

  return (
    // To jest "drewno" gryfu - kontener
    <div className="flex justify-between items-stretch w-full max-w-[300px] h-[400px] bg-zinc-900 rounded-b-xl border-x-4 border-b-4 border-zinc-800 p-4 relative shadow-2xl">
      
      {/* 2. Mapowanie: Zamiast pisać 6 razy div, robimy pętlę po tablicy stringsData */}
      {stringsData.map((string, index) => {
        const isActive = index === activeStringIndex

        return (
          <div key={string.label} className="relative flex flex-col items-center h-full group">
            
            {/* KLUCZ DO STROJENIA (Kółko na górze) */}
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 transition-all duration-300 z-10",
              isActive 
                ? "bg-green-500/20 border-green-500 text-green-500 scale-110 shadow-[0_0_15px_rgba(34,197,94,0.5)]" // Styl jak aktywna
                : "bg-zinc-800 border-zinc-700 text-zinc-500" // Styl jak nieaktywna
            )}>
              <span className="text-lg font-bold">{string.note}</span>
            </div>

            {/* STRUNA (Długa linia) */}
            {/* Używamy 'w-0.5' dla cienkich i 'w-1' dla grubych strun (zależnie od indexu) */}
            <div className="relative h-full flex justify-center">
                {/* Sama linia struny */}
                <div className={cn(
                    "h-full bg-zinc-600 transition-colors duration-300",
                    // Im mniejszy index (niskie nuty), tym grubsza struna
                    index < 2 ? "w-1.5" : index < 4 ? "w-1" : "w-0.5", 
                    // Jak aktywna, struna świeci
                    isActive ? "bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : ""
                )}></div>
            </div>

          </div>
        )
      })}
      
      {/* PROGI (Poziome linie w tle) - Ozdoba, żeby wyglądało jak gitara */}
      <div className="absolute top-[20%] w-full h-1 bg-zinc-800/50 left-0 pointer-events-none"></div>
      <div className="absolute top-[40%] w-full h-1 bg-zinc-800/50 left-0 pointer-events-none"></div>
      <div className="absolute top-[60%] w-full h-1 bg-zinc-800/50 left-0 pointer-events-none"></div>
      <div className="absolute top-[80%] w-full h-1 bg-zinc-800/50 left-0 pointer-events-none"></div>

    </div>
  )
}