import { Dictionary } from './types';

export const en: Dictionary = {
  common: {
    title: "TuneVibe",
    description: "Professional Smart Tuner",
    footer: "Free online tuner for Guitar, Bass, and Ukulele. Use your microphone to tune your instrument precisely.",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    about: "About",
    getApp: "Get Mobile App",
    tuner: "Tuner",
    metronome: "Metronome",
  },
  about: {
    title: "About",
    subtitle: "TuneVibe",
    heroDesc: "We believe every musician deserves a professional-grade tuner and metronome right in their pocket. Simple, accurate, and beautiful.",
    mission: {
      item1: { title: "Smart Listening", desc: "Advanced audio algorithms detect your instrument's pitch with extreme precision using your device's microphone." },
      item2: { title: "Instant Feedback", desc: "Real-time visual feedback with our custom-built engine ensures you get in tune faster than ever." },
      item3: { title: "Complete Toolkit", desc: "Whether you need to tune your Guitar, Bass, or Ukulele, or master your rhythm with our Metronome, TuneVibe has you covered." }
    },
    story: {
      title: "Our Story",
      p1: "TuneVibe started as a simple project to help beginners tune their guitars without buying expensive hardware. We realized that web technology has advanced enough to provide professional-grade audio analysis directly in the browser.",
      p2: "Today, we are proud to offer a tool that is accessible to everyone, everywhere, for free. No ads, no paywalls, just pure tuning vibes.",
      cta: "Start Tuning"
    },
    features: {
      title: "Why Musicians Love Us",
      list: [
        "Zero Latency Pitch Detection",
        "Precise Metronome with Tap Tempo",
        "Works Offline (PWA Support)",
        "Dark & Light Mode",
        "Manual & Auto Tuning Modes",
        "Visual String Progress",
        "Privacy Focused (No Audio Recording)"
      ]
    }
  },
  tuner: {
    autoMode: "Auto Mode",
    manualMode: "Manual Mode",
    reset: "Reset",
    downloadTitle: "Take it with you",
    downloadDesc: "Download the official TuneVibe mobile app. Same professional accuracy, now in your pocket.",
    instruments: {
      guitar: "Guitar",
      bass: "Bass",
      ukulele: "Ukulele",
    },
    seo: {
      article1: {
        title: "How to Tune a Guitar by Ear?",
        content: `
          <p>Tuning a guitar by ear is a fundamental skill for every guitarist. Although electronic tuners (like our TuneVibe) are extremely precise, it's worth knowing how to manage without them. The most popular method is the <strong>5th fret method</strong>.</p>
          <p>The principle is simple: the note on the 5th fret of a lower string should sound the same as the open higher string. The exception is the G string, which we compare with the 4th fret.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>A String (5th string):</strong> Press the E string (6th string) at the 5th fret. It should sound like the open A string.</li>
            <li><strong>D String (4th string):</strong> Press the A string at the 5th fret. It should sound like the open D string.</li>
            <li><strong>G String (3rd string):</strong> Press the D string at the 5th fret. It should sound like the open G string.</li>
            <li><strong>B String (2nd string):</strong> Note! Press the G string at the <strong>4th fret</strong>. It should sound like the open B string.</li>
            <li><strong>E String (1st string):</strong> Press the B string at the 5th fret. It should sound like the open E string.</li>
          </ul>
        `,
      },
      article2: {
        title: "Standard Tuning EADGBE - What Does It Mean?",
        content: `
          <p>When we talk about "standard tuning" for a guitar, we mean the arrangement of notes: <strong>E, A, D, G, B, E</strong>. Counting from the thickest (lowest sounding) string to the thinnest.</p>
          <p>This is the most universal tuning, used in 90% of popular, rock, and pop music. It allows for easy playing of basic chords and scales.</p>
        `,
      },
      article3: {
        title: "Why Won't My Guitar Stay in Tune?",
        content: `
          <p>You tuned your guitar perfectly, but a moment later it sounds off again? This is a frustrating problem that can have several causes:</p>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">1.</span>
              <div><strong>Old Strings:</strong> Worn-out strings lose elasticity and don't hold tuning. If your strings are rusty or have more than 3-4 months of intense playing, replace them.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">2.</span>
              <div><strong>New Strings:</strong> Paradoxically, freshly installed strings need to "stretch". For the first few hours of playing, they will go flat. This is normal!</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">3.</span>
              <div><strong>Temperature Changes:</strong> Wood reacts to heat and humidity. Moving a guitar from the cold outdoors to a warm room will always detune the instrument.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">4.</span>
              <div><strong>Tuning Peg Issues:</strong> Cheap or damaged tuning pegs can "slip" under tension or vibration.</div>
            </li>
          </ul>
        `,
      },
    },
  },
  metronome: {
    bpm: "BPM",
    tap: "TAP",
    seo: {
      article1: {
        title: "Why Practice with a Metronome?",
        content: `
          <p>A metronome is every musician's best friend, regardless of skill level. Many beginners avoid it, thinking it "kills the feeling," but the truth is the opposite – <strong>solid rhythm gives you freedom</strong>.</p>
          <p>Regular practice with a metronome helps in:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Keeping a steady tempo:</strong> Prevents unconscious speeding up in easy parts and slowing down in difficult ones.</li>
            <li><strong>Rhythmic precision:</strong> Teaches you to hit the "pocket" perfectly.</li>
            <li><strong>Measuring progress:</strong> If you play an exercise at 60 BPM today, and at 80 BPM next week – you have hard proof of your development.</li>
          </ul>
        `,
      },
      article2: {
        title: "What is BPM and Time Signature?",
        content: `
          <p><strong>BPM (Beats Per Minute):</strong> The number of beats per minute. It determines the speed of the piece.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>60 BPM:</strong> One beat per second (clock).</li>
            <li>• <strong>120 BPM:</strong> Standard pop/disco tempo.</li>
            <li>• <strong>140+ BPM:</strong> Fast tempo (rock, metal, drum'n'bass).</li>
          </ul>
          <p class="mt-4"><strong>Time Signature:</strong> Determines how many beats are in one bar.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>4/4:</strong> Most common. "One, two, three, four".</li>
            <li>• <strong>3/4:</strong> Waltz. "One, two, three" (like "Happy Birthday").</li>
            <li>• <strong>6/8:</strong> Common in rock ballads and blues.</li>
          </ul>
        `,
      },
      article3: {
        title: "How to Use a Metronome Effectively?",
        content: `
          <p>Patience is key. Here is a proven method for working on a difficult piece:</p>
          <ol class="list-decimal pl-6 space-y-4">
            <li><strong>Slow down drastically:</strong> Set the metronome to a tempo where you can play the fragment <em>perfectly</em>, without any mistakes. This might even be 50% of the target speed.</li>
            <li><strong>Repeat:</strong> Play the fragment 3-5 times flawlessly at this slow tempo.</li>
            <li><strong>Speed up in small steps:</strong> Increase the tempo by 2-5 BPM. Play flawlessly a few times again.</li>
            <li><strong>Repeat the process:</strong> Gradually reach the target tempo. This way your fingers "remember" the correct movement, not the mistakes.</li>
          </ol>
        `,
      },
    },
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    section1: {
      title: "1. Microphone Usage",
      content: "TuneVibe requires access to your device's microphone solely for the purpose of tuning your instrument. The audio data is processed locally on your device in real-time to detect pitch.",
      warning: "Important: We do NOT record, store, or transmit any audio data to external servers. Your privacy is paramount, and no conversations or background noises are ever captured or shared.",
    },
    section2: {
      title: "2. Data Collection",
      content: "We do not collect any personal data. The application operates without requiring user accounts or login information. Any settings (such as theme preference or instrument choice) are stored locally on your device.",
    },
    section3: {
      title: "3. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us via our Contact page.",
    },
  },
  contact: {
    title: "Contact Us",
    intro: "We'd love to hear from you! Whether you have a suggestion for a new feature, found a bug, or just want to say hello, feel free to reach out.",
    getInTouch: "Get in Touch",
    emailLabel: "Email us at:",
  },
};

export const pl: Dictionary = {
  common: {
    title: "TuneVibe",
    description: "Profesjonalny Inteligentny Stroik",
    footer: "Darmowy stroik online do gitary, basu i ukulele. Użyj mikrofonu, aby precyzyjnie nastroić instrument.",
    privacyPolicy: "Polityka Prywatności",
    contact: "Kontakt",
    about: "O nas",
    getApp: "Pobierz Aplikację",
    tuner: "Stroik",
    metronome: "Metronom",
  },
  about: {
    title: "O",
    subtitle: "TuneVibe",
    heroDesc: "Wierzymy, że każdy muzyk zasługuje na profesjonalny stroik i metronom w swojej kieszeni. Prosty, dokładny i piękny.",
    mission: {
      item1: { title: "Inteligentny Nasłuch", desc: "Zaawansowane algorytmy audio wykrywają wysokość dźwięku z ekstremalną precyzją." },
      item2: { title: "Natychmiastowa Reakcja", desc: "Wizualna informacja zwrotna w czasie rzeczywistym pozwala nastroić się szybciej niż kiedykolwiek." },
      item3: { title: "Kompletny Zestaw", desc: "Niezależnie czy stroisz gitarę, bas czy ukulele, lub ćwiczysz rytm z naszym metronomem, TuneVibe jest dla Ciebie." }
    },
    story: {
      title: "Nasza Historia",
      p1: "TuneVibe zaczął się jako prosty projekt, aby pomóc początkującym nastroić gitary bez kupowania drogiego sprzętu.",
      p2: "Dziś z dumą oferujemy narzędzie dostępne dla każdego, wszędzie, za darmo. Bez reklam, bez opłat, czysta muzyka.",
      cta: "Zacznij Stroić"
    },
    features: {
      title: "Dlaczego muzycy nas kochają",
      list: [
        "Zerowe opóźnienie",
        "Precyzyjny Metronom z Tap Tempo",
        "Działa offline (PWA)",
        "Tryb jasny i ciemny",
        "Tryb automatyczny i ręczny",
        "Wizualny postęp strun",
        "Prywatność (Brak nagrywania)"
      ]
    }
  },
  tuner: {
    autoMode: "Tryb Auto",
    manualMode: "Tryb Ręczny",
    reset: "Resetuj",
    downloadTitle: "Zabierz go ze sobą",
    downloadDesc: "Pobierz oficjalną aplikację mobilną TuneVibe. Ta sama profesjonalna precyzja, teraz w Twojej kieszeni.",
    instruments: {
      guitar: "Gitara",
      bass: "Bas",
      ukulele: "Ukulele",
    },
    seo: {
      article1: {
        title: "Jak nastroić gitarę ze słuchu?",
        content: `
          <p>Strojenie gitary ze słuchu to fundamentalna umiejętność każdego gitarzysty. Choć stroiki elektroniczne (takie jak nasz TuneVibe) są niezwykle precyzyjne, warto wiedzieć, jak poradzić sobie bez nich. Najpopularniejszą metodą jest <strong>metoda piątego progu</strong>.</p>
          <p>Zasada jest prosta: dźwięk na 5. progu struny niższej powinien brzmieć tak samo jak pusta struna wyższa. Wyjątkiem jest struna G, którą porównujemy z 4. progiem.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Struna A (5. struna):</strong> Naciśnij strunę E (6. struna) na 5. progu. Powinna brzmieć jak pusta struna A.</li>
            <li><strong>Struna D (4. struna):</strong> Naciśnij strunę A na 5. progu. Powinna brzmieć jak pusta struna D.</li>
            <li><strong>Struna G (3. struna):</strong> Naciśnij strunę D na 5. progu. Powinna brzmieć jak pusta struna G.</li>
            <li><strong>Struna B (2. struna):</strong> Uwaga! Naciśnij strunę G na <strong>4. progu</strong>. Powinna brzmieć jak pusta struna B.</li>
            <li><strong>Struna E (1. struna):</strong> Naciśnij strunę B na 5. progu. Powinna brzmieć jak pusta struna E.</li>
          </ul>
        `,
      },
      article2: {
        title: "Standardowe strojenie EADGBE",
        content: `
          <p>Kiedy mówimy o "standardowym stroju" gitary, mamy na myśli układ dźwięków: <strong>E, A, D, G, B, E</strong>. Licząc od najgrubszej (najniżej brzmiącej) struny do najcieńszej.</p>
          <p>Jest to najbardziej uniwersalny strój, używany w 90% muzyki popularnej, rockowej i popowej. Pozwala na łatwe chwytanie podstawowych akordów i skal.</p>
        `,
      },
      article3: {
        title: "Dlaczego gitara nie stroi?",
        content: `
          <p>Nastroiłeś gitarę idealnie, a po chwili znów fałszuje? To frustrujący problem, który może mieć kilka przyczyn:</p>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">1.</span>
              <div><strong>Stare struny:</strong> Zużyte struny tracą elastyczność i nie trzymają stroju. Jeśli Twoje struny są zardzewiałe lub mają więcej niż 3-4 miesiące intensywnego grania, wymień je.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">2.</span>
              <div><strong>Nowe struny:</strong> Paradoksalnie, świeżo założone struny muszą się "rozciągnąć". Przez pierwsze kilka godzin grania będą opadać z tonu. To normalne!</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">3.</span>
              <div><strong>Zmiany temperatury:</strong> Drewno reaguje na ciepło i wilgoć. Przeniesienie gitary z zimnego dworu do ciepłego pokoju zawsze rozstroi instrument.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">4.</span>
              <div><strong>Problemy z kluczami:</strong> Tanie lub uszkodzone klucze mogą "puszczać" naciąg pod wpływem wibracji.</div>
            </li>
          </ul>
        `,
      },
    },
  },
  metronome: {
    bpm: "BPM",
    tap: "TAP",
    seo: {
      article1: {
        title: "Dlaczego warto ćwiczyć z metronomem?",
        content: `
          <p>Metronom to najlepszy przyjaciel każdego muzyka, niezależnie od poziomu zaawansowania. Wielu początkujących unika go, uważając, że "zabija feeling", ale prawda jest odwrotna – <strong>solidne poczucie rytmu daje wolność</strong>.</p>
          <p>Regularne ćwiczenia z metronomem pomagają w:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Utrzymaniu stałego tempa:</strong> Zapobiega nieświadomemu przyspieszaniu w łatwych fragmentach i zwalnianiu w trudnych.</li>
            <li><strong>Precyzji rytmicznej:</strong> Uczy idealnego trafiania w "punkt" (tzw. pocket).</li>
            <li><strong>Mierzeniu postępów:</strong> Jeśli dziś grasz wprawkę w 60 BPM, a za tydzień w 80 BPM – masz twardy dowód swojego rozwoju.</li>
          </ul>
        `,
      },
      article2: {
        title: "Co to jest BPM i Metrum?",
        content: `
          <p><strong>BPM (Beats Per Minute):</strong> To liczba uderzeń na minutę. Określa szybkość utworu.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>60 BPM:</strong> Jedno uderzenie na sekundę (zegar).</li>
            <li>• <strong>120 BPM:</strong> Standardowe tempo muzyki pop/disco.</li>
            <li>• <strong>140+ BPM:</strong> Szybkie tempo (rock, metal, drum'n'bass).</li>
          </ul>
          <p class="mt-4"><strong>Metrum (Time Signature):</strong> Określa, ile uderzeń mieści się w jednym takcie.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>4/4:</strong> Najpopularniejsze. "Raz, dwa, trzy, cztery".</li>
            <li>• <strong>3/4:</strong> Walc. "Raz, dwa, trzy" (jak "Sto lat").</li>
            <li>• <strong>6/8:</strong> Częste w balladach rockowych i bluesie.</li>
          </ul>
        `,
      },
      article3: {
        title: "Jak skutecznie używać metronomu?",
        content: `
          <p>Kluczem jest cierpliwość. Oto sprawdzona metoda pracy nad trudnym utworem:</p>
          <ol class="list-decimal pl-6 space-y-4">
            <li><strong>Zwolnij drastycznie:</strong> Ustaw metronom na tempo, w którym możesz zagrać dany fragment <em>idealnie</em>, bez żadnego błędu. Może to być nawet 50% docelowej prędkości.</li>
            <li><strong>Powtarzaj:</strong> Zagraj fragment 3-5 razy bezbłędnie w tym wolnym tempie.</li>
            <li><strong>Przyspieszaj małymi krokami:</strong> Zwiększ tempo o 2-5 BPM. Znowu zagraj bezbłędnie kilka razy.</li>
            <li><strong>Powtórz proces:</strong> Stopniowo dochodź do docelowego tempa. Dzięki temu Twoje palce "zapamiętają" prawidłowy ruch, a nie błędy.</li>
          </ol>
        `,
      },
    },
  },
  privacy: {
    title: "Polityka Prywatności",
    lastUpdated: "Ostatnia aktualizacja:",
    section1: {
      title: "1. Użycie Mikrofonu",
      content: "TuneVibe wymaga dostępu do mikrofonu urządzenia wyłącznie w celu strojenia instrumentu. Dane audio są przetwarzane lokalnie na Twoim urządzeniu w czasie rzeczywistym.",
      warning: "Ważne: NIE nagrywamy, nie przechowujemy ani nie przesyłamy żadnych danych audio na serwery zewnętrzne. Twoja prywatność jest najważniejsza.",
    },
    section2: {
      title: "2. Gromadzenie Danych",
      content: "Nie gromadzimy żadnych danych osobowych. Aplikacja działa bez konieczności zakładania konta.",
    },
    section3: {
      title: "3. Kontakt",
      content: "Jeśli masz pytania dotyczące tej Polityki Prywatności, skontaktuj się z nami poprzez stronę Kontakt.",
    },
  },
  contact: {
    title: "Kontakt",
    intro: "Chętnie usłyszymy od Ciebie! Niezależnie czy masz pomysł na nową funkcję, znalazłeś błąd, czy po prostu chcesz się przywitać.",
    getInTouch: "Skontaktuj się",
    emailLabel: "Napisz do nas:",
  },
};

export const de: Dictionary = {
  common: {
    title: "TuneVibe",
    description: "Professionelles Smart-Tuner",
    footer: "Kostenloses Online-Stimmgerät für Gitarre, Bass und Ukulele. Verwenden Sie Ihr Mikrofon, um Ihr Instrument präzise zu stimmen.",
    privacyPolicy: "Datenschutzerklärung",
    contact: "Kontakt",
    about: "Über uns",
    getApp: "App holen",
    tuner: "Stimmgerät",
    metronome: "Metronom",
  },
  about: {
    title: "Über",
    subtitle: "TuneVibe",
    heroDesc: "Wir glauben, dass jeder Musiker ein professionelles Stimmgerät und Metronom in der Tasche verdient. Einfach, präzise und schön.",
    mission: {
      item1: { title: "Smart Listening", desc: "Fortschrittliche Audio-Algorithmen erkennen die Tonhöhe Ihres Instruments mit extremer Präzision über das Mikrofon Ihres Geräts." },
      item2: { title: "Sofortiges Feedback", desc: "Echtzeit-visuelles Feedback mit unserer speziell entwickelten Engine sorgt dafür, dass Sie schneller als je zuvor gestimmt sind." },
      item3: { title: "Komplettes Toolkit", desc: "Egal, ob Sie Gitarre, Bass oder Ukulele stimmen oder Ihren Rhythmus mit unserem Metronom üben müssen, TuneVibe ist für Sie da." }
    },
    story: {
      title: "Unsere Geschichte",
      p1: "TuneVibe begann als einfaches Projekt, um Anfängern zu helfen, ihre Gitarren ohne teure Hardware zu stimmen. Wir haben erkannt, dass die Webtechnologie weit genug fortgeschritten ist, um professionelle Audioanalyse direkt im Browser anzubieten.",
      p2: "Heute sind wir stolz darauf, ein Tool anzubieten, das für jeden, überall und kostenlos zugänglich ist. Keine Werbung, keine Paywalls, einfach pure Stimmung.",
      cta: "Jetzt stimmen"
    },
    features: {
      title: "Warum Musiker uns lieben",
      list: [
        "Latenzfreie Tonhöhenerkennung",
        "Präzises Metronom mit Tap Tempo",
        "Funktioniert offline (PWA-Support)",
        "Dunkel- & Hellmodus",
        "Auto- & Manueller Modus",
        "Visueller Saitenfortschritt",
        "Datenschutzorientiert (Keine Audioaufnahme)"
      ]
    }
  },
  tuner: {
    autoMode: "Auto-Modus",
    manualMode: "Manueller Modus",
    reset: "Zurücksetzen",
    downloadTitle: "Nimm es mit",
    downloadDesc: "Laden Sie die offizielle TuneVibe-App herunter. Dieselbe professionelle Genauigkeit, jetzt in Ihrer Tasche.",
    instruments: {
      guitar: "Gitarre",
      bass: "Bass",
      ukulele: "Ukulele",
    },
    seo: {
      article1: {
        title: "Wie stimmt man eine Gitarre nach Gehör?",
        content: `
          <p>Das Stimmen einer Gitarre nach Gehör ist eine grundlegende Fähigkeit für jeden Gitarristen. Obwohl elektronische Stimmgeräte (wie unser TuneVibe) extrem präzise sind, lohnt es sich zu wissen, wie man ohne sie zurechtkommt. Die beliebteste Methode ist die <strong>5. Bund-Methode</strong>.</p>
          <p>Das Prinzip ist einfach: Der Ton am 5. Bund einer tieferen Saite sollte genauso klingen wie die leere höhere Saite. Die Ausnahme ist die G-Saite, die wir mit dem 4. Bund vergleichen.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>A-Saite (5. Saite):</strong> Drücken Sie die E-Saite (6. Saite) am 5. Bund. Sie sollte wie die leere A-Saite klingen.</li>
            <li><strong>D-Saite (4. Saite):</strong> Drücken Sie die A-Saite am 5. Bund. Sie sollte wie die leere D-Saite klingen.</li>
            <li><strong>G-Saite (3. Saite):</strong> Drücken Sie die D-Saite am 5. Bund. Sie sollte wie die leere G-Saite klingen.</li>
            <li><strong>H-Saite (2. Saite):</strong> Achtung! Drücken Sie die G-Saite am <strong>4. Bund</strong>. Sie sollte wie die leere H-Saite klingen.</li>
            <li><strong>E-Saite (1. Saite):</strong> Drücken Sie die H-Saite am 5. Bund. Sie sollte wie die leere E-Saite klingen.</li>
          </ul>
        `,
      },
      article2: {
        title: "Standardstimmung EADGBE - Was bedeutet das?",
        content: `
          <p>Wenn wir von "Standardstimmung" für eine Gitarre sprechen, meinen wir die Anordnung der Noten: <strong>E, A, D, G, H, E</strong>. Gezählt von der dicksten (am tiefsten klingenden) Saite zur dünnsten.</p>
          <p>Dies ist die universellste Stimmung, die in 90% der populären Rock- und Popmusik verwendet wird. Sie ermöglicht das einfache Spielen von Grundakkorden und Skalen.</p>
        `,
      },
      article3: {
        title: "Warum verstimmt sich meine Gitarre?",
        content: `
          <p>Sie haben Ihre Gitarre perfekt gestimmt, aber einen Moment später klingt sie wieder schief? Das ist ein frustrierendes Problem, das mehrere Ursachen haben kann:</p>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">1.</span>
              <div><strong>Alte Saiten:</strong> Abgenutzte Saiten verlieren an Elastizität und halten die Stimmung nicht. Wenn Ihre Saiten rostig sind oder mehr als 3-4 Monate intensiv gespielt wurden, tauschen Sie sie aus.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">2.</span>
              <div><strong>Neue Saiten:</strong> Paradoxerweise müssen sich frisch aufgezogene Saiten erst "dehnen". In den ersten Stunden des Spielens werden sie tiefer. Das ist normal!</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">3.</span>
              <div><strong>Temperaturänderungen:</strong> Holz reagiert auf Wärme und Feuchtigkeit. Wenn Sie eine Gitarre von draußen in einen warmen Raum bringen, verstimmt sich das Instrument immer.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">4.</span>
              <div><strong>Probleme mit den Mechaniken:</strong> Billige oder beschädigte Mechaniken können unter Spannung oder Vibration "rutschen".</div>
            </li>
          </ul>
        `,
      },
    },
  },
  metronome: {
    bpm: "BPM",
    tap: "TAP",
    seo: {
      article1: {
        title: "Warum mit einem Metronom üben?",
        content: `
          <p>Ein Metronom ist der beste Freund jedes Musikers, unabhängig vom Können. Viele Anfänger meiden es, weil sie denken, es "tötet das Gefühl", aber die Wahrheit ist das Gegenteil – <strong>solider Rhythmus gibt Freiheit</strong>.</p>
          <p>Regelmäßiges Üben mit einem Metronom hilft bei:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Halten eines gleichmäßigen Tempos:</strong> Verhindert unbewusstes Beschleunigen in einfachen Passagen und Verlangsamen in schwierigen.</li>
            <li><strong>Rhythmische Präzision:</strong> Lehrt Sie, den "Pocket" perfekt zu treffen.</li>
            <li><strong>Messen des Fortschritts:</strong> Wenn Sie eine Übung heute mit 60 BPM spielen und nächste Woche mit 80 BPM – haben Sie einen harten Beweis für Ihre Entwicklung.</li>
          </ul>
        `,
      },
      article2: {
        title: "Was ist BPM und Taktart?",
        content: `
          <p><strong>BPM (Beats Per Minute):</strong> Die Anzahl der Schläge pro Minute. Es bestimmt die Geschwindigkeit des Stücks.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>60 BPM:</strong> Ein Schlag pro Sekunde (Uhr).</li>
            <li>• <strong>120 BPM:</strong> Standard-Pop/Disco-Tempo.</li>
            <li>• <strong>140+ BPM:</strong> Schnelles Tempo (Rock, Metal, Drum'n'Bass).</li>
          </ul>
          <p class="mt-4"><strong>Taktart:</strong> Bestimmt, wie viele Schläge in einem Takt sind.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>4/4:</strong> Am häufigsten. "Eins, zwei, drei, vier".</li>
            <li>• <strong>3/4:</strong> Walzer. "Eins, zwei, drei" (wie "Happy Birthday").</li>
            <li>• <strong>6/8:</strong> Häufig in Rockballaden und Blues.</li>
          </ul>
        `,
      },
      article3: {
        title: "Wie benutzt man ein Metronom effektiv?",
        content: `
          <p>Geduld ist der Schlüssel. Hier ist eine bewährte Methode, um an einem schwierigen Stück zu arbeiten:</p>
          <ol class="list-decimal pl-6 space-y-4">
            <li><strong>Drastisch verlangsamen:</strong> Stellen Sie das Metronom auf ein Tempo ein, in dem Sie das Fragment <em>perfekt</em> spielen können, ohne Fehler. Das kann sogar 50% der Zielgeschwindigkeit sein.</li>
            <li><strong>Wiederholen:</strong> Spielen Sie das Fragment 3-5 Mal fehlerfrei in diesem langsamen Tempo.</li>
            <li><strong>In kleinen Schritten beschleunigen:</strong> Erhöhen Sie das Tempo um 2-5 BPM. Spielen Sie wieder einige Male fehlerfrei.</li>
            <li><strong>Wiederholen Sie den Vorgang:</strong> Erreichen Sie schrittweise das Zieltempo. So "erinnern" sich Ihre Finger an die richtige Bewegung, nicht an die Fehler.</li>
          </ol>
        `,
      },
    },
  },
  privacy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert:",
    section1: {
      title: "1. Mikrofonnutzung",
      content: "TuneVibe benötigt Zugriff auf das Mikrofon Ihres Geräts ausschließlich zum Stimmen Ihres Instruments. Die Audiodaten werden lokal auf Ihrem Gerät in Echtzeit verarbeitet, um die Tonhöhe zu erkennen.",
      warning: "Wichtig: Wir nehmen KEINE Audiodaten auf, speichern sie nicht und übertragen sie nicht an externe Server. Ihre Privatsphäre ist oberstes Gebot, und keine Gespräche oder Hintergrundgeräusche werden jemals erfasst oder geteilt.",
    },
    section2: {
      title: "2. Datensammlung",
      content: "Wir sammeln keine personenbezogenen Daten. Die Anwendung funktioniert ohne Benutzerkonten oder Login-Informationen. Alle Einstellungen (wie Themenpräferenz oder Instrumentenwahl) werden lokal auf Ihrem Gerät gespeichert.",
    },
    section3: {
      title: "3. Kontakt",
      content: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über unsere Kontaktseite.",
    },
  },
  contact: {
    title: "Kontaktieren Sie uns",
    intro: "Wir würden uns freuen, von Ihnen zu hören! Egal, ob Sie einen Vorschlag für eine neue Funktion haben, einen Fehler gefunden haben oder einfach nur Hallo sagen möchten, zögern Sie nicht, uns zu kontaktieren.",
    getInTouch: "In Kontakt kommen",
    emailLabel: "Schreiben Sie uns an:",
  },
};

export const ru: Dictionary = {
  common: {
    title: "TuneVibe",
    description: "Профессиональный умный тюнер",
    footer: "Бесплатный онлайн-тюнер для гитары, баса и укулеле. Используйте микрофон для точной настройки инструмента.",
    privacyPolicy: "Политика конфиденциальности",
    contact: "Контакты",
    about: "О нас",
    getApp: "Скачать приложение",
    tuner: "Тюнер",
    metronome: "Метроном",
  },
  about: {
    title: "О",
    subtitle: "TuneVibe",
    heroDesc: "Мы верим, что каждый музыкант заслуживает профессиональный тюнер и метроном в своем кармане. Простой, точный и красивый.",
    mission: {
      item1: { title: "Умное слушание", desc: "Передовые аудиоалгоритмы определяют высоту тона вашего инструмента с экстремальной точностью, используя микрофон вашего устройства." },
      item2: { title: "Мгновенный отклик", desc: "Визуальная обратная связь в реальном времени с нашим специально разработанным движком гарантирует, что вы настроитесь быстрее, чем когда-либо." },
      item3: { title: "Полный набор инструментов", desc: "Нужно ли вам настроить гитару, бас или укулеле, или отточить ритм с нашим метрономом, TuneVibe поможет вам." }
    },
    story: {
      title: "Наша история",
      p1: "TuneVibe начинался как простой проект, чтобы помочь новичкам настраивать гитары без покупки дорогого оборудования. Мы поняли, что веб-технологии продвинулись достаточно далеко, чтобы обеспечить профессиональный аудиоанализ прямо в браузере.",
      p2: "Сегодня мы гордимся тем, что предлагаем инструмент, доступный каждому, везде и бесплатно. Никакой рекламы, никаких платных доступов, только чистый звук.",
      cta: "Начать настройку"
    },
    features: {
      title: "Почему музыканты выбирают нас",
      list: [
        "Определение высоты тона без задержек",
        "Точный метроном с Tap Tempo",
        "Работает офлайн (поддержка PWA)",
        "Темная и светлая темы",
        "Автоматический и ручной режимы",
        "Визуальный прогресс струн",
        "Конфиденциальность (без записи аудио)"
      ]
    }
  },
  tuner: {
    autoMode: "Авто режим",
    manualMode: "Ручной режим",
    reset: "Сброс",
    downloadTitle: "Возьми с собой",
    downloadDesc: "Скачайте официальное мобильное приложение TuneVibe. Та же профессиональная точность, теперь в вашем кармане.",
    instruments: {
      guitar: "Гитара",
      bass: "Бас",
      ukulele: "Укулеле",
    },
    seo: {
      article1: {
        title: "Как настроить гитару на слух?",
        content: `
          <p>Настройка гитары на слух — это фундаментальный навык для каждого гитариста. Хотя электронные тюнеры (как наш TuneVibe) чрезвычайно точны, стоит знать, как обойтись без них. Самый популярный метод — <strong>метод 5-го лада</strong>.</p>
          <p>Принцип прост: нота на 5-м ладу нижней струны должна звучать так же, как открытая верхняя струна. Исключение составляет струна G (Соль), которую мы сравниваем с 4-м ладом.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Струна A (5-я струна):</strong> Зажмите струну E (6-я струна) на 5-м ладу. Она должна звучать как открытая струна A.</li>
            <li><strong>Струна D (4-я струна):</strong> Зажмите струну A на 5-м ладу. Она должна звучать как открытая струна D.</li>
            <li><strong>Струна G (3-я струна):</strong> Зажмите струну D на 5-м ладу. Она должна звучать как открытая струна G.</li>
            <li><strong>Струна B (2-я струна):</strong> Внимание! Зажмите струну G на <strong>4-м ладу</strong>. Она должна звучать как открытая струна B.</li>
            <li><strong>Струна E (1-я струна):</strong> Зажмите струну B на 5-м ладу. Она должна звучать как открытая струна E.</li>
          </ul>
        `,
      },
      article2: {
        title: "Стандартный строй EADGBE — Что это значит?",
        content: `
          <p>Когда мы говорим о "стандартном строе" гитары, мы имеем в виду расположение нот: <strong>E, A, D, G, B, E</strong>. Считая от самой толстой (самой низкой по звучанию) струны к самой тонкой.</p>
          <p>Это самый универсальный строй, используемый в 90% популярной, рок и поп-музыки. Он позволяет легко играть основные аккорды и гаммы.</p>
        `,
      },
      article3: {
        title: "Почему гитара расстраивается?",
        content: `
          <p>Вы настроили гитару идеально, но через мгновение она снова звучит фальшиво? Это разочаровывающая проблема, которая может иметь несколько причин:</p>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">1.</span>
              <div><strong>Старые струны:</strong> Изношенные струны теряют эластичность и не держат строй. Если ваши струны ржавые или на них играли интенсивно более 3-4 месяцев, замените их.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">2.</span>
              <div><strong>Новые струны:</strong> Парадоксально, но свежеустановленные струны должны "растянуться". В первые несколько часов игры они будут понижаться в тоне. Это нормально!</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">3.</span>
              <div><strong>Перепады температуры:</strong> Дерево реагирует на тепло и влажность. Перемещение гитары с холодной улицы в теплую комнату всегда расстроит инструмент.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">4.</span>
              <div><strong>Проблемы с колками:</strong> Дешевые или поврежденные колки могут "проскальзывать" под натяжением или вибрацией.</div>
            </li>
          </ul>
        `,
      },
    },
  },
  metronome: {
    bpm: "BPM",
    tap: "TAP",
    seo: {
      article1: {
        title: "Зачем заниматься с метрономом?",
        content: `
          <p>Метроном — лучший друг каждого музыканта, независимо от уровня мастерства. Многие новички избегают его, думая, что он "убивает чувство", но правда в обратном — <strong>твердый ритм дает свободу</strong>.</p>
          <p>Регулярные занятия с метрономом помогают в:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Удержании ровного темпа:</strong> Предотвращает неосознанное ускорение в легких частях и замедление в сложных.</li>
            <li><strong>Ритмической точности:</strong> Учит вас идеально попадать в "карман" (pocket).</li>
            <li><strong>Измерении прогресса:</strong> Если сегодня вы играете упражнение в 60 BPM, а на следующей неделе в 80 BPM — у вас есть твердое доказательство вашего развития.</li>
          </ul>
        `,
      },
      article2: {
        title: "Что такое BPM и музыкальный размер?",
        content: `
          <p><strong>BPM (Beats Per Minute):</strong> Количество ударов в минуту. Определяет скорость произведения.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>60 BPM:</strong> Один удар в секунду (часы).</li>
            <li>• <strong>120 BPM:</strong> Стандартный темп поп/диско.</li>
            <li>• <strong>140+ BPM:</strong> Быстрый темп (рок, метал, драм-н-бейс).</li>
          </ul>
          <p class="mt-4"><strong>Музыкальный размер:</strong> Определяет, сколько ударов в одном такте.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>4/4:</strong> Самый распространенный. "Раз, два, три, четыре".</li>
            <li>• <strong>3/4:</strong> Вальс. "Раз, два, три" (как "С днем рождения").</li>
            <li>• <strong>6/8:</strong> Часто встречается в рок-балладах и блюзе.</li>
          </ul>
        `,
      },
      article3: {
        title: "Как эффективно использовать метроном?",
        content: `
          <p>Терпение — это ключ. Вот проверенный метод работы над сложным произведением:</p>
          <ol class="list-decimal pl-6 space-y-4">
            <li><strong>Замедлитесь радикально:</strong> Установите метроном на темп, в котором вы можете сыграть фрагмент <em>идеально</em>, без единой ошибки. Это может быть даже 50% от целевой скорости.</li>
            <li><strong>Повторяйте:</strong> Сыграйте фрагмент 3-5 раз безупречно в этом медленном темпе.</li>
            <li><strong>Ускоряйтесь маленькими шагами:</strong> Увеличьте темп на 2-5 BPM. Снова сыграйте безупречно несколько раз.</li>
            <li><strong>Повторяйте процесс:</strong> Постепенно достигайте целевого темпа. Так ваши пальцы "запоминают" правильное движение, а не ошибки.</li>
          </ol>
        `,
      },
    },
  },
  privacy: {
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление:",
    section1: {
      title: "1. Использование микрофона",
      content: "TuneVibe требует доступа к микрофону вашего устройства исключительно для настройки вашего инструмента. Аудиоданные обрабатываются локально на вашем устройстве в реальном времени для определения высоты тона.",
      warning: "Важно: Мы НЕ записываем, не храним и не передаем никакие аудиоданные на внешние серверы. Ваша конфиденциальность превыше всего, и никакие разговоры или фоновые шумы никогда не фиксируются и не передаются.",
    },
    section2: {
      title: "2. Сбор данных",
      content: "Мы не собираем никаких персональных данных. Приложение работает без необходимости создания учетной записи или входа в систему. Все настройки (такие как предпочтение темы или выбор инструмента) хранятся локально на вашем устройстве.",
    },
    section3: {
      title: "3. Контакты",
      content: "Если у вас есть вопросы по поводу этой Политики конфиденциальности, пожалуйста, свяжитесь с нами через нашу страницу Контакты.",
    },
  },
  contact: {
    title: "Свяжитесь с нами",
    intro: "Мы будем рады услышать вас! Если у вас есть предложение по новой функции, вы нашли ошибку или просто хотите поздороваться, не стесняйтесь обращаться.",
    getInTouch: "Написать нам",
    emailLabel: "Email:",
  },
};

export const es: Dictionary = {
  common: {
    title: "TuneVibe",
    description: "Afinador Profesional Inteligente",
    footer: "Afinador online gratuito para guitarra, bajo y ukelele. Usa tu micrófono para afinar tu instrumento con precisión.",
    privacyPolicy: "Política de Privacidad",
    contact: "Contacto",
    about: "Sobre nosotros",
    getApp: "Obtener App",
    tuner: "Afinador",
    metronome: "Metrónomo",
  },
  about: {
    title: "Sobre",
    subtitle: "TuneVibe",
    heroDesc: "Creemos que todo músico merece un afinador y metrónomo de calidad profesional en su bolsillo. Simple, preciso y hermoso.",
    mission: {
      item1: { title: "Escucha Inteligente", desc: "Algoritmos de audio avanzados detectan el tono de tu instrumento con extrema precisión usando el micrófono de tu dispositivo." },
      item2: { title: "Respuesta Instantánea", desc: "Retroalimentación visual en tiempo real con nuestro motor personalizado asegura que afines más rápido que nunca." },
      item3: { title: "Kit de Herramientas Completo", desc: "Ya sea que necesites afinar tu guitarra, bajo o ukelele, o dominar tu ritmo con nuestro metrónomo, TuneVibe te cubre." }
    },
    story: {
      title: "Nuestra Historia",
      p1: "TuneVibe comenzó como un proyecto simple para ayudar a los principiantes a afinar sus guitarras sin comprar hardware costoso. Nos dimos cuenta de que la tecnología web ha avanzado lo suficiente como para proporcionar análisis de audio de grado profesional directamente en el navegador.",
      p2: "Hoy, estamos orgullosos de ofrecer una herramienta accesible para todos, en todas partes, de forma gratuita. Sin anuncios, sin muros de pago, solo pura afinación.",
      cta: "Empezar a Afinar"
    },
    features: {
      title: "Por qué los músicos nos aman",
      list: [
        "Detección de tono sin latencia",
        "Metrónomo Preciso con Tap Tempo",
        "Funciona sin conexión (Soporte PWA)",
        "Modo Oscuro y Claro",
        "Modos de Afinación Automático y Manual",
        "Progreso Visual de Cuerdas",
        "Enfocado en la Privacidad (Sin Grabación de Audio)"
      ]
    }
  },
  tuner: {
    autoMode: "Modo Automático",
    manualMode: "Modo Manual",
    reset: "Reiniciar",
    downloadTitle: "Llévalo contigo",
    downloadDesc: "Descarga la aplicación móvil oficial de TuneVibe. La misma precisión profesional, ahora en tu bolsillo.",
    instruments: {
      guitar: "Guitarra",
      bass: "Bajo",
      ukulele: "Ukelele",
    },
    seo: {
      article1: {
        title: "¿Cómo afinar una guitarra de oído?",
        content: `
          <p>Afinar una guitarra de oído es una habilidad fundamental para todo guitarrista. Aunque los afinadores electrónicos (como nuestro TuneVibe) son extremadamente precisos, vale la pena saber cómo arreglárselas sin ellos. El método más popular es el <strong>método del quinto traste</strong>.</p>
          <p>El principio es simple: la nota en el quinto traste de una cuerda más grave debe sonar igual que la cuerda más aguda al aire. La excepción es la cuerda G (Sol), que comparamos con el cuarto traste.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Cuerda A (5ª cuerda):</strong> Presiona la cuerda E (6ª cuerda) en el 5º traste. Debe sonar como la cuerda A al aire.</li>
            <li><strong>Cuerda D (4ª cuerda):</strong> Presiona la cuerda A en el 5º traste. Debe sonar como la cuerda D al aire.</li>
            <li><strong>Cuerda G (3ª cuerda):</strong> Presiona la cuerda D en el 5º traste. Debe sonar como la cuerda G al aire.</li>
            <li><strong>Cuerda B (2ª cuerda):</strong> ¡Atención! Presiona la cuerda G en el <strong>4º traste</strong>. Debe sonar como la cuerda B al aire.</li>
            <li><strong>Cuerda E (1ª cuerda):</strong> Presiona la cuerda B en el 5º traste. Debe sonar como la cuerda E al aire.</li>
          </ul>
        `,
      },
      article2: {
        title: "Afinación Estándar EADGBE - ¿Qué significa?",
        content: `
          <p>Cuando hablamos de "afinación estándar" para una guitarra, nos referimos a la disposición de las notas: <strong>E, A, D, G, B, E</strong>. Contando desde la cuerda más gruesa (sonido más grave) hasta la más delgada.</p>
          <p>Esta es la afinación más universal, utilizada en el 90% de la música popular, rock y pop. Permite tocar fácilmente acordes básicos y escalas.</p>
        `,
      },
      article3: {
        title: "¿Por qué mi guitarra no mantiene la afinación?",
        content: `
          <p>¿Afinaste tu guitarra perfectamente, pero un momento después suena desafinada de nuevo? Este es un problema frustrante que puede tener varias causas:</p>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">1.</span>
              <div><strong>Cuerdas Viejas:</strong> Las cuerdas desgastadas pierden elasticidad y no mantienen la afinación. Si tus cuerdas están oxidadas o tienen más de 3-4 meses de uso intenso, cámbialas.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">2.</span>
              <div><strong>Cuerdas Nuevas:</strong> Paradójicamente, las cuerdas recién instaladas necesitan "estirarse". Durante las primeras horas de uso, se bajarán de tono. ¡Esto es normal!</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">3.</span>
              <div><strong>Cambios de Temperatura:</strong> La madera reacciona al calor y la humedad. Mover una guitarra del frío exterior a una habitación cálida siempre desafinará el instrumento.</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">4.</span>
              <div><strong>Problemas con las Clavijas:</strong> Clavijas baratas o dañadas pueden "resbalar" bajo tensión o vibración.</div>
            </li>
          </ul>
        `,
      },
    },
  },
  metronome: {
    bpm: "BPM",
    tap: "TAP",
    seo: {
      article1: {
        title: "¿Por qué practicar con un metrónomo?",
        content: `
          <p>Un metrónomo es el mejor amigo de todo músico, independientemente de su nivel de habilidad. Muchos principiantes lo evitan, pensando que "mata el sentimiento", pero la verdad es lo contrario: <strong>un ritmo sólido te da libertad</strong>.</p>
          <p>La práctica regular con un metrónomo ayuda en:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Mantener un tempo constante:</strong> Evita acelerar inconscientemente en partes fáciles y disminuir la velocidad en las difíciles.</li>
            <li><strong>Precisión rítmica:</strong> Te enseña a golpear el "pocket" perfectamente.</li>
            <li><strong>Medir el progreso:</strong> Si tocas un ejercicio a 60 BPM hoy, y a 80 BPM la próxima semana, tienes una prueba sólida de tu desarrollo.</li>
          </ul>
        `,
      },
      article2: {
        title: "¿Qué es BPM y Compás?",
        content: `
          <p><strong>BPM (Beats Per Minute):</strong> El número de pulsos por minuto. Determina la velocidad de la pieza.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>60 BPM:</strong> Un pulso por segundo (reloj).</li>
            <li>• <strong>120 BPM:</strong> Tempo estándar de pop/disco.</li>
            <li>• <strong>140+ BPM:</strong> Tempo rápido (rock, metal, drum'n'bass).</li>
          </ul>
          <p class="mt-4"><strong>Compás (Time Signature):</strong> Determina cuántos pulsos hay en un compás.</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>4/4:</strong> Más común. "Uno, dos, tres, cuatro".</li>
            <li>• <strong>3/4:</strong> Vals. "Uno, dos, tres" (como "Cumpleaños Feliz").</li>
            <li>• <strong>6/8:</strong> Común en baladas de rock y blues.</li>
          </ul>
        `,
      },
      article3: {
        title: "¿Cómo usar un metrónomo eficazmente?",
        content: `
          <p>La paciencia es clave. Aquí hay un método probado para trabajar en una pieza difícil:</p>
          <ol class="list-decimal pl-6 space-y-4">
            <li><strong>Reduce la velocidad drásticamente:</strong> Configura el metrónomo a un tempo donde puedas tocar el fragmento <em>perfectamente</em>, sin ningún error. Esto podría ser incluso el 50% de la velocidad objetivo.</li>
            <li><strong>Repite:</strong> Toca el fragmento 3-5 veces impecablemente a este tempo lento.</li>
            <li><strong>Acelera en pequeños pasos:</strong> Aumenta el tempo en 2-5 BPM. Toca impecablemente unas cuantas veces de nuevo.</li>
            <li><strong>Repite el proceso:</strong> Alcanza gradualmente el tempo objetivo. De esta manera tus dedos "recuerdan" el movimiento correcto, no los errores.</li>
          </ol>
        `,
      },
    },
  },
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización:",
    section1: {
      title: "1. Uso del Micrófono",
      content: "TuneVibe requiere acceso al micrófono de tu dispositivo únicamente con el propósito de afinar tu instrumento. Los datos de audio se procesan localmente en tu dispositivo en tiempo real para detectar el tono.",
      warning: "Importante: NO grabamos, almacenamos ni transmitimos ningún dato de audio a servidores externos. Tu privacidad es primordial, y ninguna conversación o ruido de fondo es capturado o compartido.",
    },
    section2: {
      title: "2. Recopilación de Datos",
      content: "No recopilamos ningún dato personal. La aplicación funciona sin requerir cuentas de usuario o información de inicio de sesión. Cualquier configuración (como preferencia de tema o elección de instrumento) se almacena localmente en tu dispositivo.",
    },
    section3: {
      title: "3. Contacto",
      content: "Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos a través de nuestra página de Contacto.",
    },
  },
  contact: {
    title: "Contáctanos",
    intro: "¡Nos encantaría saber de ti! Ya sea que tengas una sugerencia para una nueva función, hayas encontrado un error o simplemente quieras saludar, no dudes en contactarnos.",
    getInTouch: "Ponerse en contacto",
    emailLabel: "Envíanos un correo a:",
  },
};

export const cn: Dictionary = {
  common: {
    title: "TuneVibe",
    description: "专业智能调音器",
    footer: "免费在线吉他、贝司和尤克里里调音器。使用您的麦克风精确调音您的乐器。",
    privacyPolicy: "隐私政策",
    contact: "联系我们",
    about: "关于我们",
    getApp: "获取应用",
    tuner: "调音器",
    metronome: "节拍器",
  },
  about: {
    title: "关于",
    subtitle: "TuneVibe",
    heroDesc: "我们相信每位音乐家都值得在口袋里拥有一个专业级的调音器和节拍器。简单、准确且美观。",
    mission: {
      item1: { title: "智能聆听", desc: "先进的音频算法使用您设备的麦克风以极高的精度检测您乐器的音高。" },
      item2: { title: "即时反馈", desc: "通过我们定制的引擎提供实时视觉反馈，确保您比以往更快地完成调音。" },
      item3: { title: "完整的工具包", desc: "无论您是需要为吉他、贝司或尤克里里调音，还是使用我们的节拍器练习节奏，TuneVibe 都能满足您的需求。" }
    },
    story: {
      title: "我们的故事",
      p1: "TuneVibe 最初是一个简单的项目，旨在帮助初学者在不购买昂贵硬件的情况下调音吉他。我们意识到网络技术已经足够先进，可以直接在浏览器中提供专业级的音频分析。",
      p2: "今天，我们很自豪地提供一个所有人、在任何地方都可以免费使用的工具。没有广告，没有付费墙，只有纯粹的调音体验。",
      cta: "开始调音"
    },
    features: {
      title: "为什么音乐家喜欢我们",
      list: [
        "零延迟音高检测",
        "带 Tap Tempo 的精确节拍器",
        "离线工作 (PWA 支持)",
        "深色和浅色模式",
        "自动和手动调音模式",
        "可视化琴弦进度",
        "注重隐私 (不录音)"
      ]
    }
  },
  tuner: {
    autoMode: "自动模式",
    manualMode: "手动模式",
    reset: "重置",
    downloadTitle: "随身携带",
    downloadDesc: "下载官方 TuneVibe 移动应用。同样的专业精度，现在就在您的口袋里。",
    instruments: {
      guitar: "吉他",
      bass: "贝司",
      ukulele: "尤克里里",
    },
    seo: {
      article1: {
        title: "如何通过听力调音吉他？",
        content: `
          <p>通过听力调音吉他是每位吉他手的一项基本技能。虽然电子调音器（如我们的 TuneVibe）非常精确，但值得知道如何在没有它们的情况下进行调音。最流行的方法是<strong>第五品格法</strong>。</p>
          <p>原理很简单：低音弦第 5 品的音符应该与空弦的高音弦听起来一样。例外是 G 弦（3 弦），我们将其与第 4 品进行比较。</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>A 弦 (5 弦):</strong> 按住 E 弦 (6 弦) 的第 5 品。它应该听起来像空弦 A。</li>
            <li><strong>D 弦 (4 弦):</strong> 按住 A 弦的第 5 品。它应该听起来像空弦 D。</li>
            <li><strong>G 弦 (3 弦):</strong> 按住 D 弦的第 5 品。它应该听起来像空弦 G。</li>
            <li><strong>B 弦 (2 弦):</strong> 注意！按住 G 弦的<strong>第 4 品</strong>。它应该听起来像空弦 B。</li>
            <li><strong>E 弦 (1 弦):</strong> 按住 B 弦的第 5 品。它应该听起来像空弦 E。</li>
          </ul>
        `,
      },
      article2: {
        title: "标准调音 EADGBE - 这是什么意思？",
        content: `
          <p>当我们谈论吉他的“标准调音”时，我们指的是音符的排列：<strong>E, A, D, G, B, E</strong>。从最粗（声音最低）的弦数到最细的弦。</p>
          <p>这是最通用的调音，用于 90% 的流行、摇滚和流行音乐。它允许轻松演奏基本和弦和音阶。</p>
        `,
      },
      article3: {
        title: "为什么我的吉他会跑调？",
        content: `
          <p>您完美地调好了吉他，但过了一会儿它又听起来不对劲了？这是一个令人沮丧的问题，可能有几个原因：</p>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">1.</span>
              <div><strong>旧琴弦：</strong> 磨损的琴弦会失去弹性并且无法保持调音。如果您的琴弦生锈或经过 3-4 个月的剧烈演奏，请更换它们。</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">2.</span>
              <div><strong>新琴弦：</strong> 矛盾的是，新安装的琴弦需要“拉伸”。在演奏的前几个小时里，它们会变低。这是正常的！</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">3.</span>
              <div><strong>温度变化：</strong> 木材对热量和湿度有反应。将吉他从寒冷的室外移到温暖的房间总是会使乐器跑调。</div>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-blue-500 text-xl">4.</span>
              <div><strong>弦轴问题：</strong> 廉价或损坏的弦轴可能会在张力或振动下“滑动”。</div>
            </li>
          </ul>
        `,
      },
    },
  },
  metronome: {
    bpm: "BPM",
    tap: "TAP",
    seo: {
      article1: {
        title: "为什么要用节拍器练习？",
        content: `
          <p>无论技能水平如何，节拍器都是每位音乐家最好的朋友。许多初学者避免使用它，认为它“扼杀了感觉”，但事实恰恰相反——<strong>稳固的节奏给你自由</strong>。</p>
          <p>定期使用节拍器练习有助于：</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>保持稳定的速度：</strong> 防止在简单的部分无意识地加速，在困难的部分减速。</li>
            <li><strong>节奏精度：</strong> 教你完美地击中“口袋” (pocket)。</li>
            <li><strong>衡量进步：</strong> 如果您今天以 60 BPM 演奏练习，下周以 80 BPM 演奏——您就有了进步的有力证明。</li>
          </ul>
        `,
      },
      article2: {
        title: "什么是 BPM 和拍号？",
        content: `
          <p><strong>BPM (Beats Per Minute):</strong> 每分钟的节拍数。它决定了乐曲的速度。</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>60 BPM:</strong> 每秒一拍（时钟）。</li>
            <li>• <strong>120 BPM:</strong> 标准流行/迪斯科速度。</li>
            <li>• <strong>140+ BPM:</strong> 快速速度（摇滚、金属、鼓打贝斯）。</li>
          </ul>
          <p class="mt-4"><strong>拍号 (Time Signature):</strong> 决定一个小节中有多少拍。</p>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• <strong>4/4:</strong> 最常见。“一，二，三，四”。</li>
            <li>• <strong>3/4:</strong> 华尔兹。“一，二，三”（像“生日快乐”）。</li>
            <li>• <strong>6/8:</strong> 常见于摇滚民谣和蓝调。</li>
          </ul>
        `,
      },
      article3: {
        title: "如何有效地使用节拍器？",
        content: `
          <p>耐心是关键。这是一种行之有效的练习困难乐曲的方法：</p>
          <ol class="list-decimal pl-6 space-y-4">
            <li><strong>大幅减速：</strong> 将节拍器设置为您可以<em>完美</em>演奏片段的速度，没有任何错误。这甚至可能是目标速度的 50%。</li>
            <li><strong>重复：</strong> 以这种慢速完美地演奏片段 3-5 次。</li>
            <li><strong>小步加速：</strong> 将速度提高 2-5 BPM。再次完美地演奏几次。</li>
            <li><strong>重复该过程：</strong> 逐渐达到目标速度。这样您的手指会“记住”正确的动作，而不是错误。</li>
          </ol>
        `,
      },
    },
  },
  privacy: {
    title: "隐私政策",
    lastUpdated: "最后更新：",
    section1: {
      title: "1. 麦克风使用",
      content: "TuneVibe 仅为了调音您的乐器而需要访问您设备的麦克风。音频数据在您的设备上实时本地处理以检测音高。",
      warning: "重要提示：我们不会录制、存储或将任何音频数据传输到外部服务器。您的隐私至关重要，任何对话或背景噪音都不会被捕获或共享。",
    },
    section2: {
      title: "2. 数据收集",
      content: "我们不收集任何个人数据。该应用程序无需用户帐户或登录信息即可运行。任何设置（如主题偏好或乐器选择）都存储在您的本地设备上。",
    },
    section3: {
      title: "3. 联系我们",
      content: "如果您对本隐私政策有任何疑问，请通过我们的联系页面联系我们。",
    },
  },
  contact: {
    title: "联系我们",
    intro: "我们很乐意收到您的来信！无论您是对新功能有建议、发现了错误，还是只是想打个招呼，请随时联系我们。",
    getInTouch: "取得联系",
    emailLabel: "给我们发电子邮件：",
  },
};
