import Link from "next/link";

import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/app/lib/constants";
import { NewsletterSignup } from "@/app/components/marketing/NewsletterSignup";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export function MarketingFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
                C
              </div>
              <span className="font-semibold text-gray-900">{SITE.name}</span>
            </div>
            <p className="text-sm text-gray-600">
              AI-powered performance reporting for modern sports teams.
            </p>
            <div>
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-700"
              >
                {PRIMARY_CTA.label}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Resources Hub
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@coubber.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <NewsletterSignup />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900"
              aria-label="X"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
