export type InstrumentType = "guitar" | "bass" | "ukulele";

export const tunings = {
  guitar: [
    { note: "E", octave: 2, label: "E (Niska)" },
    { note: "A", octave: 2, label: "A" },
    { note: "D", octave: 3, label: "D" },
    { note: "G", octave: 3, label: "G" },
    { note: "B", octave: 3, label: "B" },
    { note: "E", octave: 4, label: "E (Wysoka)" },
  ],
  bass: [
    { note: "E", octave: 1, label: "E" },
    { note: "A", octave: 1, label: "A" },
    { note: "D", octave: 2, label: "D" },
    { note: "G", octave: 2, label: "G" },
  ],
  ukulele: [
    { note: "G", octave: 4, label: "G" },
    { note: "C", octave: 4, label: "C" },
    { note: "E", octave: 4, label: "E" },
    { note: "A", octave: 4, label: "A" },
  ],
};