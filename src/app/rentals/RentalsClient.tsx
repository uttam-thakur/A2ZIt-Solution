
"use client";

import React from "react";
import Reuse from "../pages/reuse";
import styles from "./styles.module.css";

const RentalsClient = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
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
        imageSrc="/images/Rental/9.jpg"
        altText="Computer rental services in Asansol"
        subtitle="Trust in Our Specialists"
        title="COMPUTERS"
        description="Buying an entire set of a computer for a purpose that lasts a few days is not a thoughtful decision. Hence, we recommend renting a computer for your temporary needs. We have computers from high-end manufacturers. Rent a computer, use it, and return it after your work gets done; it’s that simple. We keep our PCs and Macs updated with operating system and antivirus software so customers can use them conveniently."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Rental/4.webp"
        altText="Laptop rental services in Asansol"
        subtitle="Wide Range of Laptops for Every Need"
        title="LAPTOPS"
        description="Why invest in a full computer setup for a temporary requirement? With our hassle-free laptop rental service, you get access to high-performance PCs and Macs from top brands, ready to use and updated with operating system and antivirus software. Simply rent, work, and return when you're done. Enjoy a seamless and secure experience without a long-term commitment."
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/Rental/8.jpg"
        altText="Printer and projector rental services in Asansol"
        subtitle="Rent Printers & Projectors for Your Urgent Needs"
        title="PRINTERS & PROJECTORS"
        description="Printers and projectors are essential tools, but not everyone needs them daily. At A2Z IT SOLUTION, we offer rental services for business presentations, events, and temporary office requirements. Our equipment helps you stay prepared when an additional printer or projector is needed."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Rental/6.webp"
        altText="CCTV camera rental services for temporary security"
        subtitle="Short-Term CCTV Camera Rentals for Security & Emergencies"
        title="CCTV CAMERA"
        description="Sometimes a temporary CCTV solution is needed for an event, emergency, or short-term surveillance requirement. A2Z IT SOLUTION provides short-term CCTV camera rental options to help meet your security needs without a long-term commitment. Contact us to discuss your requirements and rental duration."
        isImageRight={false}
      />
    </div>
  );
};

export default RentalsClient;
