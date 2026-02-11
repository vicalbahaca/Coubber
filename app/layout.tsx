import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coubber.com"),
  title: {
    default: "Coubber — AI Performance Reports in 30 Seconds",
    template: "%s — Coubber",
  },
  description:
    "Automated sports performance analysis platform. Unify athlete data from force plates, VBT, GPS and more. Generate decision-ready reports instantly.",
  openGraph: {
    title: "Coubber — AI Performance Reports in 30 Seconds",
    description:
      "AI-powered analysis that unifies athlete data and delivers decision-ready insights for coaches and practitioners.",
    type: "website",
    siteName: "Coubber",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
