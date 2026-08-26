"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Plus,
  FileText,
  Search,
  Database,
  Network,
  GitCompareArrows,
  FileOutput,
  HelpCircle,
  ChevronDown,
  Leaf,
  User,
  Users,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, LANGUAGES } from "@/lib/demo-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  plus: Plus,
  "file-text": FileText,
  search: Search,
  database: Database,
  network: Network,
  "git-compare-arrows": GitCompareArrows,
  "file-output": FileOutput,
  "help-circle": HelpCircle,
  users: Users,
};

interface NavItemProps {
  label: string;
  href: string;
  icon: string;
  isActive: boolean;
  onClick?: () => void;
}

function NavItem({ label, href, icon, isActive, onClick }: NavItemProps) {
  const Icon = ICON_MAP[icon] || FileText;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
        isActive
          ? "bg-forest/8 text-forest border-l-2 border-forest ml-[-1px]"
          : "text-warm-muted hover:bg-cream hover:text-charcoal"
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span>{label}</span>
    </Link>
  );
}

function NavSection({
  title,
  items,
  pathname,
  onNavigate,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string; icon: string }>;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="space-y-0.5">
      <p className="px-3 py-1.5 text-[11px] font-semibold tracking-widest text-warm-muted/70 uppercase">
        {title}
      </p>
      {items.map((item) => (
        <NavItem
          key={item.href}
          {...item}
          isActive={pathname === item.href}
          onClick={onNavigate}
        />
      ))}
    </div>
  );
}

interface AppSidebarContentProps {
  onNavigate?: () => void;
}

export function AppSidebarContent({ onNavigate }: AppSidebarContentProps) {
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const currentLang = LANGUAGES.find((l) => l.value === selectedLanguage);

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className="flex items-center gap-2.5 px-4 py-5 hover:opacity-90 transition-opacity"
      >
        <div className="flex size-8 items-center justify-center rounded-lg bg-forest text-primary-foreground">
          <Leaf className="size-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-charcoal">
            IP-SAKTI
          </span>
          <span className="text-[11px] text-warm-muted">Sahayak</span>
        </div>
      </Link>

      <Separator className="bg-warm-border" />

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-3">
        <nav className="space-y-5">
          <NavSection
            title="Main"
            items={NAV_ITEMS.main}
            pathname={pathname}
            onNavigate={onNavigate}
          />
          <NavSection
            title="Knowledge"
            items={NAV_ITEMS.knowledge}
            pathname={pathname}
            onNavigate={onNavigate}
          />
          <NavSection
            title="Output"
            items={NAV_ITEMS.output}
            pathname={pathname}
            onNavigate={onNavigate}
          />
          <NavSection
            title="Help"
            items={NAV_ITEMS.help}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        </nav>
      </ScrollArea>

      {/* Bottom section */}
      <div className="mt-auto border-t border-warm-border p-3 space-y-3">
        {/* Language selector */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-warm-muted hover:bg-cream hover:text-charcoal transition-colors">
            <span>{currentLang?.label ?? "English"}</span>
            <ChevronDown className="size-3.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            {LANGUAGES.map((lang) => (
              <DropdownMenuItem
                key={lang.value}
                onSelect={() => setSelectedLanguage(lang.value)}
                className={cn(
                  "flex justify-between",
                  lang.value === selectedLanguage && "bg-forest/5 text-forest font-medium"
                )}
              >
                <span>{lang.label}</span>
                {lang.value === selectedLanguage && (
                  <span className="text-forest font-bold">✓</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User profile */}
        <div className="flex items-center gap-2.5 rounded-lg px-3 py-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-forest/10 text-forest">
            <User className="size-3.5" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-charcoal truncate">
              Rushi
            </span>
            <span className="text-[11px] text-warm-muted">Innovator</span>
          </div>
        </div>
      </div>
    </div>
  );
}
