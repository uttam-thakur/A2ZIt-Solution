
import type { Metadata } from "next";
import WebsiteClient from "./WebsiteClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a2zitsolution.co.in"),

  title:
    "Website Development Company in Asansol | Web Design | A2Z IT SOLUTION",

  description:
    "Looking for website development in Asansol? A2Z IT SOLUTION builds professional business websites, responsive websites, custom websites and e-commerce stores for businesses and organizations.",

  keywords: [
    "website development company in Asansol",
    "website design in Asansol",
    "web developer in Asansol",
    "web design services Asansol",
    "business website development",
    "custom website development",
    "e-commerce website development",
    "responsive website design",
    "website maintenance services",
    "SEO-friendly website development",
    "A2Z IT SOLUTION",
  ],

  alternates: {
    canonical: "https://www.a2zitsolution.co.in/website",
  },

  openGraph: {
    title:
      "Website Development & Web Design in Asansol | A2Z IT SOLUTION",
    description:
      "Professional business websites, custom web development, responsive design and e-commerce website solutions.",
    url: "https://www.a2zitsolution.co.in/website",
    siteName: "A2Z IT SOLUTION",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/WEB/Website1.webp",
        alt: "Website development services by A2Z IT SOLUTION",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development in Asansol | A2Z IT SOLUTION",
    description:
      "Professional business website design, custom development and e-commerce websites.",
    images: ["/images/WEB/Website1.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function WebsitePage() {
  return <WebsiteClient />;
}
