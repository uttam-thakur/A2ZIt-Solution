// "use client";
// import Navbar from "./component/Navbar";
// import Hero from "./pages/hero";
// import AboutUs from "./pages/aboutUs";
// import Services from "./pages/services";
// import ChooseUs from "./pages/chooseUs";
// import Footer from "./pages/footer";
// import CustomersFeedback from "./pages/customersFeedback";
// import "./style/globals.css";
// import WriteUs from "./pages/writeUs";

// export default function Home() {
//   return (
//     <div style={{ position: "relative", overflow: "scroll", height: "100vh" }}>
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <Navbar />
//         <Hero />
//         <br />
//         <AboutUs />
//         <br />
//         <br />
//         <br />
//         <Services />
//         <br />
//         <ChooseUs />
//         <br />
//         <br />
//         <CustomersFeedback />
//         <br />
//         {/* <WriteUs /> */}
//         <br />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Navbar from "./component/Navbar";
// import Hero from "./pages/hero";
// import AboutUs from "./pages/aboutUs";
// import Services from "./pages/services";
// import ChooseUs from "./pages/chooseUs";
// import Footer from "./pages/footer";
// import CustomersFeedback from "./pages/customersFeedback";
// import MobileNavbar from "./pages/mobileNavbar"; // Import Mobile Navbar
// import "./style/globals.css";
// import WriteUs from "./pages/writeUs";

// export default function Home() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showMobileNavbar, setShowMobileNavbar] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY; // ✅ Correct way to get scroll position
//       const threshold = window.innerHeight * 0.2; // 20% of screen height
//       setShowMobileNavbar(scrollPosition > threshold);
//       console.log("Scroll Position:", scrollPosition, "Threshold:", threshold);
//     };

//     checkScreenSize(); // Initial check
//     window.addEventListener("resize", checkScreenSize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ position: "relative" }}>
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <Navbar />
//         <Hero />
//         <br />
//         <AboutUs />
//         <br />
//         <br />
//         <br />
//         <Services />
//         <br />
//         <ChooseUs />
//         <br />
//         <br />
//         <CustomersFeedback />
//         <br />
//         <br />
//         <Footer />
//       </div>

//       {/* ✅ Show Mobile Navbar only in mobile view after 20% scroll */}
//       {isMobile && showMobileNavbar && <MobileNavbar />}
//     </div>
//   );
// }

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
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
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
        <Footer />
      </div>

      <MobileNavbarWrapper />
    </div>
  );
}
