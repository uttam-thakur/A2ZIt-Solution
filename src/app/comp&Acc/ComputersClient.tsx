
"use client";

import React from "react";
import Reuse from "../pages/reuse";
import styles from "./styles.module.css";

const ComputersClient = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={styles.mainSection}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>
            Powering Your Digital World with Cutting-Edge Computers &
            Accessories.
          </p>

          <p className={styles.introSubHeading}>
            With over 10 years of industry expertise, we deliver computers
            and accessories designed for professional and personal needs.
            Explore laptops, desktops, keyboards, mice, monitors, and other
            peripherals to support productivity and everyday computing.
          </p>

          <div className={styles.ctaContainer}>
            <p>
              Your satisfaction is our priority — upgrade your setup today!
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }} />

      <Reuse
        imageSrc="/images/Comp&Acc/microsoft.jpg"
        altText="Microsoft Surface computers and devices"
        title="MICROSOFT SURFACE"
        subtitle="Discover the Power of Microsoft Surface"
        description="Explore Microsoft Surface devices for work, study, and creative tasks. A2Z IT SOLUTION helps you choose a suitable device based on your performance, portability, and productivity requirements."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Comp&Acc/gaming.avif"
        altText="Gaming laptops and high-performance desktop computers"
        title="GAMING LAPTOPS & DESKTOPS"
        subtitle="Level Up Your Gaming Experience"
        description="Explore high-performance gaming laptops and desktop PCs with powerful graphics, fast processors, and immersive displays. We can help you compare suitable configurations for gaming, streaming, and demanding applications."
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/Comp&Acc/ccommercial.jpg"
        altText="Commercial laptops and desktop computers for business"
        title="COMMERCIAL DESKTOPS & LAPTOPS"
        subtitle="Powerful & Reliable Commercial Laptops & Desktops"
        description="Find computers suited to professional and business needs. Compare business laptops and desktops based on performance, durability, configuration, and support requirements. Contact A2Z IT SOLUTION for help choosing the right system."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Comp&Acc/consumer.avif"
        altText="Consumer laptops and desktop computers for home use"
        title="CONSUMER DESKTOPS & LAPTOPS"
        subtitle="Efficient Consumer Laptops & Desktops"
        description="Discover laptops and desktop computers for everyday tasks, home use, study, and entertainment. We can help you compare suitable options based on your intended use, specifications, and budget."
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/Comp&Acc/acc.avif"
        altText="Computer accessories and peripherals including keyboards, mice, and cables"
        title="PERIPHERALS & ACCESSORIES"
        subtitle="Essential Accessories for Your Computer Setup"
        description="Complete your computer setup with compatible peripherals and accessories. Options may include keyboards, mice, speakers, printers, scanners, pen drives, data cables, graphics tablets, barcode readers, and other computer hardware accessories."
        isImageRight={true}
      />
    </div>
  );
};

export default ComputersClient;
