"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music2, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle"
import { LanguageSelector } from "@/components/ui/language-selector"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-border bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Music2 className="h-5 w-5" />
          </div>
          <span className="text-foreground">Tune<span className="text-blue-500">Vibe</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
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
          {/* <Link href="/#download">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
              {t.common.getApp}
            </Button>
          </Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col p-4 space-y-4">
                <Link href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {t.common.tuner}
                </Link>
                <Link href="/metronome" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {t.common.metronome}
                </Link>
                <Link href="/about" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {t.common.about}
                </Link>
                
                <div className="flex items-center justify-between py-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">Settings</span>
                    <div className="flex items-center gap-4">
                        <LanguageSelector />
                        <ModeToggle />
                    </div>
                </div>

                {/* <Link href="/#download" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
                    {t.common.getApp}
                    </Button>
                </Link> */}
            </nav>
        </div>
      )}
    </header>
  )
}