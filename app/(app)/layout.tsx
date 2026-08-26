"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import { AppShell } from "@/components/layout/app-shell";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/analysis/new": "New Analysis",
  "/analyses": "My Analyses",
  "/prior-art": "Prior Art Search",
  "/sources": "Sources",
  "/knowledge-graph": "Knowledge Graph",
  "/comparisons": "Comparisons",
  "/reports": "Reports",
  "/help": "Help Center",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = PAGE_TITLES[pathname] ?? "IP-SAKTI Sahayak";
  const isDashboard = pathname === "/dashboard" || pathname === "/";

  return (
    <SidebarProvider>
      <AppShell title={title}>
        {!isDashboard && (
          <div className="px-4 lg:px-8 py-3">
            <div className="flex items-center gap-1.5 text-[13px] text-warm-muted">
              <Link href="/dashboard" className="hover:text-forest transition-colors hover:underline underline-offset-2">Home</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{title}</span>
            </div>
          </div>
        )}
        {children}
      </AppShell>
    </SidebarProvider>
  );
}
