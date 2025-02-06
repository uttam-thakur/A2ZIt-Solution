// page.tsx
"use client";
import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Reuse from "../pages/reuse";
import Services from "../pages/services";
import { usePathname } from "next/navigation";
import Combine from "../pages/combine";
import Footer from "../pages/footer";
import CustomersFeedback from "../pages/customersFeedback";
import Map from "../pages/map";
import Image from "next/image";
import ThreeDBackground from "../pages/threeDBackground";
import styles from "./styles.module.css";

const Page = () => {
  const pathname = usePathname();
  const isPathMatched: string = pathname;

  return (
    <>
      <Navbar />

      <div style={{ overflowX: "hidden", marginTop: "-50px" }}>
        <div className={styles.mainSection}>
          <div className={styles.introContainer}>
            <p className={styles.introHeading}>
              Providing top-quality gadgets on rent to power your business and
              personal needs.
            </p>
            <p className={styles.introSubHeading}>
              With over 10 years of trusted expertise, we offer reliable and
              cost-effective IT rental solutions. From laptops to
              high-performance workstations, we ensure seamless technology
              access tailored to your requirements.
            </p>
            <div className={styles.ctaContainer}>
              <p>Your satisfaction is our priority—rent with us today!</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <Reuse
          imageSrc="/images/Rental/3.webp"
          title="COMPUTERS"
          description="Buying an entire set of a computer for a purpose that lasts a few days- is not a thoughtful decision. Hence, we recommend you rent a laptop, as we have computers from high-end manufacturers. Rent a laptop, use it, and return it after your work gets done; it’s that simple. We keep our PCs and Mac updated with OS and anti-virus software so that customers find it convenient to use."
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Rental/2.webp"
          title="LAPTOPS"
          description="For all types of work and all types of need, we at Krishnam Computers provide our customer wide array of laptops that differ in style, size, and features. Our laptops are best for travelers or the ones who are always on the go. For your unstoppable work, we make sure to rent you a laptop that has an up-to-date operating system and anti-virus software."
          isImageRight={false}
        />
        <Reuse
          imageSrc="/images/Rental/1.webp"
          title="PRINTERS & PROJECTORS"
          description="A printer and a projector, both in their spaces are very useful. But not everyone on a personal level would need either of them on a daily basis. Even in offices, there can be situations that call for an urgent demand for extra printer and projector; hence, for all of your urgent requirements, we rent printer and projector, both."
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Rental/cctv.jfif"
          title="CCTV CAMERA"
          description="To install a security camera in or around a house/commercial space is a conscious decision, but for uncalled emergencies and preventive measures, one might think to opt for a CCTV camera for a short term basis. At Krishnam Computers, we understand the need for it and hence rent CCTV cameras that help you solve your purpose."
          isImageRight={false}
        />
        <br></br>
        <br></br>
        <br></br>

        <Services />
        <br></br>
        <br></br>
        <br></br>
        <CustomersFeedback />
        {/* <Combine /> */}
        <Footer />
      </div>
    </>
  );
};

export default Page;
