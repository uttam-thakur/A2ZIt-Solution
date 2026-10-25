"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Navbar from "./component/Navbar";
import FABWhatsApp from "./component/fabComponents/FABWhatsApp";
import FABLocation from "./component/fabComponents/FABLocation";
import MobileNavbarWrapper from "./component/MobileNavbarWrapper";
import FadeInSection from "./component/FadeInSection";
import Footer from "./pages/footer";

const Services = dynamic(() => import("./pages/services"));
const CustomersFeedback = dynamic(() => import("./pages/customersFeedback"));

const hiddenPages = new Set(["/about", "/contact", "/pro", "/cartItems"]);

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const showSharedSections = !hiddenPages.has(pathname);

  return (
    <>
      <Navbar />
      <div id="page-content">{children}</div>
      <FABWhatsApp />
      <FABLocation />
      {showSharedSections && (
        <>
          <FadeInSection><Suspense fallback={null}><Services /></Suspense></FadeInSection>
          <FadeInSection><Suspense fallback={null}><CustomersFeedback /></Suspense></FadeInSection>
        </>
      )}
      <MobileNavbarWrapper />
      {/* Footer is intentionally loaded after the route content. */}
      <Footer />
    </>
  );
}

