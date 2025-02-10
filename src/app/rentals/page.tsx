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
          altText="On-Site Expertise"
          subtitle="Trust in Our Specialists"
          title="COMPUTERS"
          description="Buying an entire set of a computer for a purpose that lasts a few days- is not a thoughtful decision. Hence, we recommend you rent a laptop, as we have computers from high-end manufacturers. Rent a laptop, use it, and return it after your work gets done; it’s that simple. We keep our PCs and Mac updated with OS and anti-virus software so that customers find it convenient to use."
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Rental/2.webp"
          altText="On-Site Expertise"
          subtitle="Wide Range of Laptops for Every Need
"
          title="LAPTOPS"
          description="Why invest in a full computer setup for a temporary requirement? With our hassle-free laptop rental service, you get access to high-performance PCs and Macs from top brands—ready to use and updated with the latest OS and antivirus software. Simply rent, work, and return when you're done. It's that simple! Enjoy a seamless and secure experience without the long-term commitment."
          isImageRight={false}
        />
        <Reuse
          imageSrc="/images/Rental/1.webp"
          altText="On-Site Expertise"
          subtitle="Rent Printers & Projectors for Your Urgent Needs
"
          title="PRINTERS & PROJECTORS"
          description="Printers and projectors are essential tools, but not everyone needs them daily. Even in office environments, unexpected situations may arise where an extra printer or projector is required. At Krishnam Computers, we offer hassle-free rental services to meet your urgent needs. Whether for a business presentation, an event, or temporary office use, our high-quality printers and projectors are available whenever you need them. Rent with ease and stay prepared for any situation!"
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Rental/cctv.jfif"
          altText="On-Site Expertise"
          subtitle="Short-Term CCTV Camera Rentals for Security & Emergencies
"
          title="CCTV CAMERA"
          description="Installing a security camera is a smart choice for homes and commercial spaces. However, there are times when a temporary CCTV solution is needed for emergencies or preventive measures. At Krishnam Computers, we provide short-term CCTV camera rentals to ensure your security needs are met without a long-term commitment. Whether for events, temporary surveillance, or urgent situations, our reliable cameras offer the protection you need. Rent with confidence and enhance your security effortlessly!"
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
