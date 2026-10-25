import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteShell from "./SiteShell";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

const siteUrl = "https://www.a2zitsolution.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A2Z IT SOLUTION | IT Services in Asansol",
    template: "%s",
  },
  description:
    "A2Z IT SOLUTION provides laptop and desktop repair, printer services, CCTV installation, networking, IT maintenance and website development in Asansol, West Bengal.",
  applicationName: "A2Z IT SOLUTION",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "A2Z IT SOLUTION",
    url: siteUrl,
    title: "A2Z IT SOLUTION | IT Services in Asansol",
    description:
      "Professional computer repair, CCTV, printer, networking and website development services in Asansol, West Bengal.",
    images: [{ url: "/images/logopng.png", width: 413, height: 411, alt: "A2Z IT SOLUTION logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A2Z IT SOLUTION | IT Services in Asansol",
    description:
      "Professional computer repair, CCTV, printer, networking and website development services in Asansol.",
    images: ["/images/logopng.png"],
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071426",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7R14H2B7B5" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-7R14H2B7B5');`}
        </Script>
      </body>
    </html>
  );
}
