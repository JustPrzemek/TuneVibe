import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuneVibe - Professional Online Instrument Tuner",
  description: "Free, professional online tuner for Guitar, Bass, and Ukulele. Tune your instrument precisely using your microphone. Fast, accurate, and easy to use.",
  keywords: ["tuner", "guitar", "online", "bass", "ukulele", "tunevibe", "free tuner", "microphone tuner"],
  authors: [{ name: "TuneVibe Team" }],
  openGraph: {
    title: "TuneVibe - Professional Online Instrument Tuner",
    description: "Tune your instrument in seconds. Professional web tuner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-center pt-16 pb-16">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
