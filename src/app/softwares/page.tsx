
import type { Metadata } from "next";
import SoftwareClient from "./SoftwareClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a2zitsolution.co.in"),

  title:
    "Business, Accounting & ERP Software Solutions in Asansol | A2Z IT SOLUTION",

  description:
    "Explore ERP, accounting, business management, antivirus and security software solutions from A2Z IT SOLUTION in Asansol, West Bengal. Get software guidance for your business and computers.",

  keywords: [
    "software solutions in Asansol",
    "ERP software Asansol",
    "accounting software Asansol",
    "business management software",
    "business software solutions",
    "antivirus software Asansol",
    "computer security software",
    "IT software services Asansol",
    "A2Z IT SOLUTION",
  ],

  alternates: {
    canonical: "https://www.a2zitsolution.co.in/softwares",
  },

  openGraph: {
    title:
      "Business, Accounting & ERP Software Solutions | A2Z IT SOLUTION",
    description:
      "Explore ERP, accounting, business operations and computer security software solutions for businesses in Asansol.",
    url: "https://www.a2zitsolution.co.in/softwares",
    siteName: "A2Z IT SOLUTION",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/Software/erp1.avif",
        alt: "ERP software solutions from A2Z IT SOLUTION",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Solutions in Asansol | A2Z IT SOLUTION",
    description:
      "Business, accounting, ERP and computer security software solutions in Asansol.",
    images: ["/images/Software/erp1.avif"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SoftwarePage() {
  return <SoftwareClient />;
}
