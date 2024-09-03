// "use client";
// import Navbar from "./component/Navbar";
// import Hero from "./pages/hero";
// import AboutUs from "./pages/aboutUs";
// import Services from "./pages/services";
// import ChooseUs from "./pages/chooseUs";
// import Footer from "./pages/footer";
// import Combine from "./pages/combine";
// import CustomersFeedback from "./pages/customersFeedback";
// import "./style/globals.css";
// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <br />
//       <AboutUs />
//       <br />
//       <Services />
//       <br />
//       <ChooseUs />
//       <br />
//       <br />
//       <CustomersFeedback />
//       <br />
//       <Combine />
//       <br />
//       <Footer />
//     </div>
//   );
// }



// Home.tsx
"use client";
import Navbar from "./component/Navbar";
import Hero from "./pages/hero";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import ChooseUs from "./pages/chooseUs";
import Footer from "./pages/footer";
import Combine from "./pages/combine";
import CustomersFeedback from "./pages/customersFeedback";
import "./style/globals.css";

export default function Home() {
  return (
    <div style={{ position: "relative", overflow: "scroll", height: "100vh" }}>
      {/* 3D Animation Component */}

      {/* Main content */}
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
        <br />
        <CustomersFeedback />
        <br />
        <Combine />
        <br />
        <Footer />
      </div>
    </div>
  );
}
