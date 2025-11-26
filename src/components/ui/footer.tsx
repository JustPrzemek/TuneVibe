"use client"

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-border bg-background/80 backdrop-blur-md py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            {t.common.privacyPolicy}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t.common.contact}
          </Link>
        </nav>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t.common.title}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
