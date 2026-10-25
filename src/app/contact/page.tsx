import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact A2Z IT SOLUTION | IT Services in Asansol",
  description: "Contact A2Z IT SOLUTION in Asansol, West Bengal for laptop and desktop repair, printer services, CCTV installation, website development and IT support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact A2Z IT SOLUTION | IT Services in Asansol",
    description: "Get in touch with A2Z IT SOLUTION for computer repair and professional IT support in Asansol.",
    url: "/contact",
    images: [{ url: "/images/logopng.png", alt: "A2Z IT SOLUTION logo" }],
  },
  twitter: { card: "summary_large_image", title: "Contact A2Z IT SOLUTION | IT Services in Asansol", description: "Contact our team for computer repair and IT support in Asansol.", images: ["/images/logopng.png"] },
};

export default function ContactPage() {
  return <ContactClient />;
}
