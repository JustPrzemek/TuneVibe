"use client"

import { useLanguage } from "@/components/language-provider";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">{t.privacy.title}</h1>
      
      <div className="space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">{t.privacy.section1.title}</h2>
          <p>
            {t.privacy.section1.content}
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
            <p className="font-medium text-blue-800 dark:text-blue-200">
              {t.privacy.section1.warning}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">{t.privacy.section2.title}</h2>
          <p>
            {t.privacy.section2.content}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">{t.privacy.section3.title}</h2>
          <p>
            {t.privacy.section3.content}
          </p>
        </section>

        <div className="text-sm pt-8 border-t border-border">
          {t.privacy.lastUpdated} {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
