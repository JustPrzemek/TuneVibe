"use client"

import { useLanguage } from "@/components/language-provider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">{t.contact.title}</h1>
      
      <div className="space-y-8 text-muted-foreground">
        <p className="text-lg">
          {t.contact.intro}
        </p>

        <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-4">{t.contact.getInTouch}</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-1">{t.contact.emailLabel}</div>
              <a href="mailto:support@tunevibe.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-xl">
                support@tunevibe.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
