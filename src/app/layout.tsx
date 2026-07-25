"use client";
// Ignore missing type declarations for side-effect CSS import
// TypeScript may complain about importing a .css file for side effects when
// no module declaration exists. Suppress that error here.
// @ts-ignore
import "./globals.css";
import Footer from "./pages/footer";
import Navbar from "./component/Navbar";
import { Inter } from "next/font/google";
import SEO from ".././app/component/SEO";
import logo from "../../public/images/logopng.png";
import FABWhatsApp from "./component/fabComponents/FABWhatsApp";
import FABLocation from "./component/fabComponents/FABLocation";
import FABProduct from "./component/fabComponents/FABProduct";
import MobileNavbarWrapper from "./component/MobileNavbarWrapper";
import CustomersFeedback from "./pages/customersFeedback";
import Services from "./pages/services";
import FadeInSection from "./component/FadeInSection";
import { usePathname } from "next/navigation"; // Import usePathname
// import { Metadata } from "next";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const data = {
  title: "A2Z IT SOLUTION",
  description:
    "Your one-stop solution for laptop, desktop, CCTV, and printer sales and services. We provide expert maintenance, repair, and support, ensuring top-quality technology solutions for home and business needs.",
  keywords:
    "laptop, desktop, repair, sales, service, cctv, camera, software, antivirus, a2z it solution, printer, mouse, keyboard, motherboard, AMC, Laptop repair shop near me, Annual Maintenance Contract, Data Recovery, IT Service, Motherboard repair, printer Service, Refilling",
  url: "https://www.a2zitsolution.com",
  image: logo,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); // Get current route

  // Pages where Services & Feedback should NOT be shown
  const hiddenPages = ["/about", "/contact", "/product", "/cartItems"];

  return (
    <html lang="en">
        
      

      <meta name="google-site-verification" content="5YDTO0O31JoJe2Sr5xTFQRP1FQ_cnzrtrgB64yiS65Q" />
      <body className={inter.className}>
        <SEO
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          image={data.image}
          url={data.url}
        />
        <main>{children}</main>
        <Navbar />
        <FABWhatsApp />
        <FABLocation />
        {/* <FABProduct /> */}

        {/* Hide Services & CustomersFeedback on specific pages */}
        {!hiddenPages.includes(pathname) && (
          <>
            <FadeInSection>
              <Services />
            </FadeInSection>
            <br />
            <br />
            <br />
            <FadeInSection>
              <CustomersFeedback />
            </FadeInSection>
            <br />
            <br />
            <br />
          </>
        )}
        <MobileNavbarWrapper />

        <Footer />


 {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7R14H2B7B5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7R14H2B7B5');
          `}
        </Script>
      </body>
    </html>
  );
}
