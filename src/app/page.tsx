"use client";
import Navbar from "./component/Navbar";
import Hero from "./pages/hero";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import ChooseUs from "./pages/chooseUs";
import CustomersFeedback from "./pages/customersFeedback";
import "./style/globals.css";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Hero />
      <br />
      <AboutUs />
      <br />
      <br />
      <br />
      <Services />
      <br />
      <ChooseUs />
      <br />
      <br />
      <CustomersFeedback />
      <br />
      <br />
    </div>
  );
}
