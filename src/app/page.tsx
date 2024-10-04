"use client";
import Navbar from "./component/Navbar";
import Hero from "./pages/hero";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import ChooseUs from "./pages/chooseUs";
import Footer from "./pages/footer";
import CustomersFeedback from "./pages/customersFeedback";
import "./style/globals.css";
import WriteUs from "./pages/writeUs";

export default function Home() {
  return (
    <div style={{ position: "relative", overflow: "scroll", height: "100vh" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <br />
        <AboutUs />
        <br />
        <Services />
        <br />
        <ChooseUs />
        <br />
        <CustomersFeedback />
        <br />
        <WriteUs />
        <br />
        <Footer />
      </div>
    </div>
  );
}
