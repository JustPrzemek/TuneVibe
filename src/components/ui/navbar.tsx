"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle"
import { LanguageSelector } from "@/components/ui/language-selector"
import { useLanguage } from "@/components/language-provider"

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full border-b border-border bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold hover:opacity-80 transition-opacity">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Music2 className="h-5 w-5" />
          </div>
          <span className="text-foreground">Tune<span className="text-blue-500">Vibe</span></span>
        </Link>

        {/* Right: Menu */}
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t.common.tuner}
          </Link>
          <Link href="/metronome" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t.common.metronome}
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t.common.about}
          </Link>
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ModeToggle />
          </div>
          <Link href="/#download">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
              {t.common.getApp}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}