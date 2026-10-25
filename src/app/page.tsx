// "use client";
// import type { Metadata } from "next";

// import Hero from "./pages/hero";
// import AboutUs from "./pages/aboutUs";
// import ChooseUs from "./pages/chooseUs";
// import FadeInSection from "./component/FadeInSection";
// import Scene from "./component/FaceModel";
// import WhyChooseUs from "./pages/whyChooseUs";
// export default function Home() {
//   return (
//     <div style={{ position: "relative" }}>
      
      


//       <Hero />

//       <FadeInSection>
//         <AboutUs />
//       </FadeInSection>

//       <FadeInSection>
//         <ChooseUs />
//       </FadeInSection>
//       <FadeInSection>
//         <WhyChooseUs />
//       </FadeInSection>

//       {/* <Scene /> */}
//     </div>
//   );
// }




import type { Metadata } from "next";

import Hero from "./pages/hero";
import AboutUs from "./pages/aboutUs";
import ChooseUs from "./pages/chooseUs";
import FadeInSection from "./component/FadeInSection";
import WhyChooseUs from "./pages/whyChooseUs";

export const metadata: Metadata = {
  title: "A2Z IT SOLUTION | Laptop Repair, CCTV & Website Design in Asansol",
  description:
    "A2Z IT SOLUTION provides laptop and desktop repair, CCTV installation, printer services, computer sales, networking, data recovery, AMC and professional website design in Asansol, West Bengal.",
  keywords: [
    "A2Z IT SOLUTION",
    "laptop repair in Asansol",
    "computer repair in Asansol",
    "CCTV installation in Asansol",
    "website design in Asansol",
    "printer repair in Asansol",
    "desktop repair",
    "data recovery",
    "computer AMC",
    "IT support services in Asansol",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A2Z IT SOLUTION | IT Services in Asansol",
    description:
      "Professional computer repair, CCTV, printer, networking and website design services in Asansol.",
    url: "/",
    siteName: "A2Z IT SOLUTION",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />

      <FadeInSection>
        <AboutUs />
      </FadeInSection>

      <FadeInSection>
        <ChooseUs />
      </FadeInSection>

      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>
    </main>
  );
}
