"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { LANGUAGES, LanguageConfig } from "@/lib/demo-data";

interface LanguageContextType {
  language: LanguageConfig;
  setLanguage: (langValue: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageConfig>(LANGUAGES[0]);

  // Load from localStorage on mount if available
  useEffect(() => {
    const saved = localStorage.getItem("ip-sakti-language");
    if (saved) {
      const found = LANGUAGES.find((l) => l.value === saved);
      if (found) {
        setLanguageState(found);
      }
    }
  }, []);

  const setLanguage = (langValue: string) => {
    const found = LANGUAGES.find((l) => l.value === langValue);
    if (found) {
      setLanguageState(found);
      localStorage.setItem("ip-sakti-language", langValue);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
