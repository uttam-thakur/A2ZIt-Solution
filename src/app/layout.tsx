import "./globals.css";
import Footer from "./pages/footer";
import Navbar from "./component/Navbar";
import { Inter } from "next/font/google";
import SEO from ".././app/component/SEO";
// import logo from "../../public/images/logo.jpeg";
import logo from "../../public/images/logopng.png";
import FABWhatsApp from "./component/fabComponents/FABWhatsApp";
import FABLocation from "./component/fabComponents/FABLocation";
import FABProduct from "./component/fabComponents/FABProduct";
import MobileNavbarWrapper from "./component/MobileNavbarWrapper";
import CustomersFeedback from "./pages/customersFeedback";
import Services from "./pages/services";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A2Z IT SOLUTION",
  description:
    "Your one-stop solution for laptop, desktop, CCTV, and printer sales and services. We provide expert maintenance, repair, and support, ensuring top-quality technology solutions for home and business needs.",
  keywords:
    "laptop, desktop, repair, sales, service, cctv, camera, software, antivirus, a2z it solution, printer, mouse, keyboard, motherboard, AMC, Laptop repair shop near me, Annual Maintenance Contract, Data Recovery, IT Service, Motherboard repair, printer Service, Refilling, ",
  url: "https://www.a2zitsolution.com",
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
        <Services />
        <br></br>
        <br></br>
        <br></br>

        <CustomersFeedback />
        <br></br>
        <br></br>
        <br></br>

        <MobileNavbarWrapper />
        <Footer />
      </body>
    </html>
  );
}
