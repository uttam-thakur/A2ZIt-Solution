"use client";
import Navbar from "./component/Navbar";
import Hero from "./pages/hero";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import ChooseUs from "./pages/chooseUs";
import Footer from "./pages/footer";
import CustomersFeedback from "./pages/customersFeedback";
import MobileNavbarWrapper from "./component/MobileNavbarWrapper"; // Import reusable component
import "./style/globals.css";
import WriteUs from "./pages/writeUs";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      {/* <div style={{ position: "relative", zIndex: 1 }}> */}
      {/* <Navbar /> */}
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
      {/* <Footer /> */}
      {/* </div> */}

      {/* <MobileNavbarWrapper /> */}
    </div>
  );
}
