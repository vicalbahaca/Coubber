import type { ReactNode } from "react";

import { MarketingFooter } from "@/app/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/app/components/marketing/MarketingHeader";
import { SoftwareApplicationJsonLd } from "@/app/components/seo/SoftwareApplicationJsonLd";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow-lg"
      >
        Saltar al contenido
      </a>
      <SoftwareApplicationJsonLd />
      <MarketingHeader />
      <main id="main" className="min-h-[70vh]">
        {children}
      </main>
      <MarketingFooter />
    </>
  );
}
