"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, Home, Music2, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/history", label: "History", icon: History },
  { href: "/settings", label: "Settings", icon: Settings }
];

const appRoutes = ["/home", "/generating", "/result", "/history", "/settings"];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showAppNav = appRoutes.includes(pathname);

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur">
        <div className="app-container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
              <Music2 size={18} aria-hidden="true" />
            </span>
            <span>Playlist Copilot</span>
          </Link>

          {showAppNav ? (
            <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
              {navItems.map((item) => (
                <DesktopNavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </nav>
          ) : (
            <Link href="/login" className="secondary-button hidden sm:inline-flex">
              Login
            </Link>
          )}
        </div>
      </header>

      <main>{children}</main>

      {showAppNav ? (
        <nav
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white md:hidden"
          aria-label="Mobile"
        >
          <div className="grid grid-cols-3">
            {navItems.map((item) => (
              <MobileNavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </div>
        </nav>
      ) : null}
    </div>
  );
}

function DesktopNavItem({
  item,
  pathname
}: {
  item: NavItem;
  pathname: string;
}) {
  const Icon = item.icon;
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`inline-flex min-h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition ${
        isActive
          ? "bg-ink text-white"
          : "text-ink/70 hover:bg-mist hover:text-ink"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon size={16} aria-hidden="true" />
      {item.label}
    </Link>
  );
}

function MobileNavItem({
  item,
  pathname
}: {
  item: NavItem;
  pathname: string;
}) {
  const Icon = item.icon;
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold ${
        isActive ? "text-accent" : "text-ink/55"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon size={20} aria-hidden="true" />
      {item.label}
    </Link>
  );
}
