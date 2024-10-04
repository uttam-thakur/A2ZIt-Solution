import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../../public/images/logo.jpeg";
import SEO from ".././app/component/SEO";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A2Z IT SOLUTION",
  description:
    "Your one-stop solution for laptop, desktop, CCTV, and printer sales and services. We provide expert maintenance, repair, and support, ensuring top-quality technology solutions for home and business needs.",
  keywords:
    "laptop, desktop, repair, sales, service, cctv, camera, software, antivirus, a2z it solution, printer, mouse, keyboard, motherboard",
  url: "https://www.a2ziysolution23.com",
  image: logo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        image={metadata.image}
        url={metadata.url}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
