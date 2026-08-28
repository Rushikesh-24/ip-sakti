"use client";

import { useState } from "react";
import {
  Menu,
  HelpCircle,
  Bell,
  ChevronDown,
  User,
  Globe,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { JURISDICTIONS, LANGUAGES } from "@/lib/demo-data";
import { useSidebar } from "./sidebar-context";
import { useLanguage } from "./language-context";
import { toast } from "sonner";

interface TopbarProps {
  title: string;
}

export function Topbar({ title }: TopbarProps) {
  const { toggle, isMobile } = useSidebar();
  const { language, setLanguage } = useLanguage();
  const [jurisdiction, setJurisdiction] = useState("india");

  const currentJurisdiction = JURISDICTIONS.find(
    (j) => j.value === jurisdiction
  );

  const handleLanguageChange = (val: string, label: string) => {
    setLanguage(val);
    toast.success(`Language changed to ${label}`, {
      description: "Prototype multilingual simulation.",
    });
  };

  const handleJurisdictionChange = (val: string, label: string) => {
    setJurisdiction(val);
    toast.success(`Jurisdiction set to ${label}`, {
      description: "Prototype jurisdiction context updated.",
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-warm-border bg-white/90 backdrop-blur-md px-4 lg:px-6">
      {/* Mobile menu button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          <Menu className="size-4" />
        </Button>
      )}

      {/* Page title and Demo Mode Indicator */}
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-semibold text-charcoal truncate">{title}</h1>

        {/* Demo Mode Badge */}
        <Tooltip>
          <TooltipTrigger
            render={
              <span className="hidden sm:inline-flex items-center rounded-md bg-sage/10 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase text-sage border border-sage/20 cursor-help">
                Demo Mode
              </span>
            }
          />
          <TooltipContent>Prototype uses demonstration data</TooltipContent>
        </Tooltip>
      </div>

      {/* Right side controls */}
      <div className="ml-auto flex items-center gap-1">
        {/* Jurisdiction selector */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs font-medium border-warm-border"
              >
                {currentJurisdiction?.icon === "globe" ? (
                  <Globe className="size-3.5" />
                ) : (
                  <MapPin className="size-3.5" />
                )}
                <span className="hidden sm:inline">
                  {currentJurisdiction?.label}
                </span>
                <ChevronDown className="size-3 text-warm-muted" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-44">
            {JURISDICTIONS.map((j) => (
              <DropdownMenuItem
                key={j.value}
                onClick={() => handleJurisdictionChange(j.value, j.label)}
                className={cn(
                  "gap-2",
                  j.value === jurisdiction && "bg-forest/5 text-forest font-medium"
                )}
              >
                {j.icon === "globe" ? (
                  <Globe className="size-4" />
                ) : (
                  <MapPin className="size-4" />
                )}
                <span>{j.label}</span>
                {j.value === jurisdiction && (
                  <span className="ml-auto text-forest font-bold">✓</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Language selector (topbar, shown on larger screens) */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 text-xs font-medium hidden md:flex no-translate"
                translate="no"
              >
                <Globe className="size-3.5" />
                <span>{language.label}</span>
                <ChevronDown className="size-3 text-warm-muted" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-44 max-h-[300px] overflow-y-auto no-translate" translate="no">
            {LANGUAGES.map((l) => (
              <DropdownMenuItem
                key={l.value}
                onClick={() => handleLanguageChange(l.value, l.label)}
                className={cn(
                  "flex justify-between",
                  l.value === language.value && "bg-forest/5 text-forest font-medium"
                )}
              >
                <span>{l.label}</span>
                {l.value === language.value && (
                  <span className="text-forest font-bold">✓</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="h-5 bg-warm-border hidden sm:block mx-1" />

        {/* Help */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Help">
                <HelpCircle className="size-4 text-warm-muted" />
              </Button>
            }
          />
          <TooltipContent>Help Center</TooltipContent>
        </Tooltip>

        {/* Notifications */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Notifications">
                <Bell className="size-4 text-warm-muted" />
              </Button>
            }
          />
          <TooltipContent>Notifications</TooltipContent>
        </Tooltip>

        {/* User avatar */}
        <Button
          variant="ghost"
          size="icon-sm"
          className="rounded-full"
          aria-label="User profile"
        >
          <div className="flex size-6 items-center justify-center rounded-full bg-forest/10 text-forest">
            <User className="size-3" />
          </div>
        </Button>
      </div>
    </header>
  );
}
