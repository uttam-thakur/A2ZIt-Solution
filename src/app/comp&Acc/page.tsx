"use client";
import React from "react";
import Image from "next/image";

import Reuse from "../pages/reuse";
import Footer from "../pages/footer";
import Combine from "../pages/combine";
import Services from "../pages/services";
import Navbar from "../component/Navbar";
import CustomersFeedback from "../pages/customersFeedback";
import styles from "./styles.module.css";
const page = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className={styles.mainSection}>
          <div className={styles.introContainer}>
            <p className={styles.introHeading}>
              Powering Your Digital World with Cutting-Edge Computers &
              Accessories.
            </p>
            <p className={styles.introSubHeading}>
              With over 10 years of industry expertise, we deliver cutting-edge
              computers and premium accessories designed to meet your
              professional and personal needs. From high-performance laptops and
              desktops to ergonomic keyboards, precision mice, and immersive
              monitors, our solutions ensure superior efficiency, productivity,
              and an enhanced user experience.
            </p>

            <div className={styles.ctaContainer}>
              <p>
                Your satisfaction is our priority — upgrade your setup today!
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <Reuse
          imageSrc="/images/Comp&Acc/microsoft.jpg"
          title="MICROSOFT SURFACE
          
        "
          subtitle="Discover the Power of Microsoft Surface

"
          description="At A2Z IT SOLUTION, we offer a premium range of Microsoft Surface devices, combining performance, style, and versatility. Whether for work or creativity, find the perfect model with high-end graphics, top-tier security, and advanced features.



        "
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Comp&Acc/gaming.avif"
          title="GAMING LAPTOPS & DESKTOPS
        "
          subtitle="Level Up Your Gaming Experience

"
          description="At A2Z IT SOLUTION, we bring you high-performance gaming laptops and PCs with powerful GPUs, high-speed processors, and stunning displays. Explore top-tier systems like iBuyPower RDY ELIBG207, CyberpowerPC Gamer Xtreme, Corsair Vengeance 5185, and HP Omen Obelisk for an unmatched gaming experience.

        "
          isImageRight={false}
        />
        <Reuse
          imageSrc="/images/Comp&Acc/ccommercial.jpg"
          title="COMMERCIAL DESKTOPS & LAPTOPS
        "
          subtitle="Powerful & Reliable Commercial Laptops & Desktops

"
          description="At A2Z IT SOLUTION, we offer high-performance commercial computers designed for professional needs. With extended warranties, durable designs, and top-tier configurations, our systems ensure seamless productivity. Choose from leading models like Dell OptiPlex 3050 Micro, Microsoft Surface Studio, Apple iMac Pro, Huawei MateBook X Pro, Lenovo ThinkPad X1 Carbon, and Apple MacBook Pro.
        "
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Comp&Acc/consumer.avif"
          title="CONSUMER DESKTOPS & LAPTOPS
        "
          subtitle="Affordable & Efficient Consumer Laptops & Desktops"
          description="Designed for everyday computing tasks, our consumer computer systems offer reliability and affordability. With balanced configurations, they are perfect for home and personal use. Explore top models like Lenovo Ideapad, HP 15, Acer Aspire, Dell Inspiron, HP Pavilion Wave, Apple iMac, and LG.

        "
          isImageRight={false}
        />
        <Reuse
          imageSrc="/images/Comp&Acc/acc.avif"
          title="PERIPHERALS & ACCESSORIES

        "
          description="Your computer system is incomplete without its peripherals and accessories. Installing these essentials will help your PC, Mac, and Laptop function more efficiently. At A2Z IT SOLUTION , we have a wide range of computer hardware parts that are durable and compatible with all the computer systems. We have Mouse, Keyboard, Speaker, Printer, Scanner, Pendrive, Data Cables. Graphic Table, Barcode Reader, etc.
        "
          isImageRight={true}
        />
        <br></br>
        <br></br>
        <Services />
        <br></br>
        <br></br>

        <CustomersFeedback />
        {/* <Combine /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default page;
