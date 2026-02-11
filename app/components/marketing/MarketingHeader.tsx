"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/app/lib/constants";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";

export function MarketingHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-gray-900"
          aria-label={`${SITE.name} home`}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
            C
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm font-medium transition-colors",
                  isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex">
            <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-600/40"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-10">
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
                    C
                  </div>
                  <span className="font-semibold text-gray-900">{SITE.name}</span>
                </div>

                <nav className="grid gap-2" aria-label="Mobile navigation">
                  {NAV_LINKS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={[
                            "rounded-lg px-3 py-2 text-base font-semibold transition-colors",
                            isActive
                              ? "bg-primary-50 text-gray-900"
                              : "text-gray-700 hover:bg-gray-100",
                          ].join(" ")}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                <div className="mt-auto">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                      <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
