import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../../public/images/logo.jpeg";
import SEO from ".././app/component/SEO";
import FABWhatsApp from "./component/fabComponents/FABWhatsApp";
import FABLocation from "./component/fabComponents/FABLocation";
import FABProduct from "./component/fabComponents/FABProduct";
import MobileNavbarWrapper from "./component/MobileNavbarWrapper";
import Navbar from "./component/Navbar";
import Footer from "./pages/footer";
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
      <body className={inter.className}>
        <SEO
          title={metadata.title}
          description={metadata.description}
          keywords={metadata.keywords}
          image={metadata.image}
          url={metadata.url}
        />
        <main>{children} </main>
        <Navbar />
        {/* <div className="application-portal" id={"portalRoot"}></div> */}
        <FABWhatsApp />
        <FABLocation />
        <FABProduct />

        <MobileNavbarWrapper />
        <Footer />
      </body>
    </html>
  );
}
