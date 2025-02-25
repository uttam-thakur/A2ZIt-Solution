"use client";
import Hero from "./pages/hero";
import AboutUs from "./pages/aboutUs";
import ChooseUs from "./pages/chooseUs";
import FadeInSection from "./component/FadeInSection";
import Scene from "./component/FaceModel";
import WhyChooseUs from "./pages/whyChooseUs";
export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Hero />

      <FadeInSection>
        <AboutUs />
      </FadeInSection>

      <FadeInSection>
        <ChooseUs />
      </FadeInSection>
      <WhyChooseUs />
      {/* <Scene /> */}
    </div>
  );
}
