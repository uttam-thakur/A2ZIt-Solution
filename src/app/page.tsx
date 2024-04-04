"use client";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./pages/hero";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import ChooseUs from "./pages/chooseUs";
import ContactUs from "./pages/contactUs";
import WriteUs from "./pages/writeUs";
import Footer from "./pages/footer";
import Combine from "./pages/combine";
import CustomersFeedback from "./pages/customersFeedback";

export default function Home() {
  return (
    <div style={{ backgroundColor: "" }}>
      <Navbar />
      <Hero />
      <br />
      <AboutUs />
      <br />
      <Services />
      <br />
      <ChooseUs />
      <br />
      <br />
      <CustomersFeedback />
      <br />
      <Combine />
      <br />
      <Footer />
    </div>
  );
}
