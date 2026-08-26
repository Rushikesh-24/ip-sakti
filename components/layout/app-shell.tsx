"use client";

import { type ReactNode } from "react";
import { AppSidebarContent } from "./app-sidebar";
import { Topbar } from "./topbar";
import { useSidebar } from "./sidebar-context";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

interface AppShellProps {
  children: ReactNode;
  title: string;
}

export function AppShell({ children, title }: AppShellProps) {
  const { isOpen, setIsOpen, isMobile } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      {!isMobile && (
        <aside className="hidden lg:flex w-[260px] shrink-0 flex-col border-r border-warm-border bg-white">
          <AppSidebarContent />
        </aside>
      )}

      {/* Mobile sidebar (Sheet) */}
      {isMobile && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="w-[280px] p-0" showCloseButton>
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <AppSidebarContent onNavigate={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>
      )}

      {/* Main content area */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        <Topbar title={title} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
