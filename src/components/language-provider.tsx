"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dictionary, Language } from '@/lib/i18n/types';
import { en, pl, de, ru, es, cn } from '@/lib/i18n/dictionaries';

const dictionaries: Record<Language, Dictionary> = { en, pl, de, ru, es, cn };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && dictionaries[savedLang]) {
      setLanguage(savedLang);
    } else {
        // Detect browser language
        const browserLang = navigator.language.split('-')[0] as Language;
        if (dictionaries[browserLang]) {
            setLanguage(browserLang);
        }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
