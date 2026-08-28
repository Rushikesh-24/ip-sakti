import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/components/layout/language-context";
import { AutoTranslator } from "@/components/layout/auto-translator";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IP-SAKTI Sahayak — Empowering Ayurveda Innovators",
  description:
    "AI-powered IP and regulatory intelligence for Ayurveda innovators. Analyze formulations, discover prior art, and navigate intellectual property pathways.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-cream min-h-screen text-charcoal flex flex-col`}
      >
        <LanguageProvider>
          <AutoTranslator />
          <TooltipProvider delay={300}>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                className: "border-warm-border bg-white text-charcoal",
                descriptionClassName: "!text-stone-800",
              }}
            />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
