
"use client";

import React from "react";
import Reuse from "../pages/reuse";
import styles from "./styles.module.css";

const ConsultingClient = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={styles.mainSection}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>
            Empowering You with Expert Consulting for Smarter Technology
            Decisions.
          </p>

          <p className={styles.introSubHeading}>
            With over 10 years of industry expertise, we provide tailored
            consulting solutions to help you choose the right technology for
            your needs. From laptops and printers to CCTV systems and
            projectors, our guidance ensures you make informed decisions for
            efficiency and reliability.
          </p>

          <div className={styles.ctaContainer}>
            <p>Get expert advice — consult with us today!</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }} />

      <Reuse
        imageSrc="/images/Consulting/1.avif"
        altText="Professional computer consulting services"
        title="COMPUTERS"
        subtitle="Expert Computer Consulting Services"
        description="At A2Z IT SOLUTION, we offer professional consulting services to help you make the right technology decisions. Whether you're setting up a new system, upgrading your existing infrastructure, or troubleshooting technical issues, our experts provide tailored solutions to meet your needs. From hardware recommendations to software optimization, we help you improve performance and efficiency. Contact us for expert advice and IT solutions."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Consulting/2.jpg"
        altText="Expert laptop selection and technology consulting"
        title="LAPTOPS"
        subtitle="Expert Laptop Consulting Services"
        description="Choosing the right laptop can be challenging, whether for personal use, business, or specialized tasks. A2Z IT SOLUTION provides guidance to help you find a suitable device based on your needs, budget, and performance requirements. Get advice on specifications, brand comparisons, and software compatibility so you can make an informed decision."
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/Consulting/3.avif"
        altText="Printer and projector selection consulting"
        title="PRINTERS & PROJECTORS"
        subtitle="Professional Printer & Projector Consulting Services"
        description="Selecting the right printer or projector can be challenging. A2Z IT SOLUTION provides guidance tailored to your requirements, whether you need a high-speed printer for bulk printing or a projector for presentations. We help you compare performance, features, quality, and costs to choose equipment suited to your needs."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Consulting/4.avif"
        altText="CCTV camera and security system consulting"
        title="CCTV CAMERA"
        subtitle="Expert CCTV Camera Consultation Services"
        description="Choosing the right CCTV camera requires careful consideration of features, coverage, and technology. A2Z IT SOLUTION helps you evaluate surveillance solutions for homes, offices, and commercial spaces, including indoor monitoring, outdoor surveillance, night vision, and remote access. Contact us to discuss a CCTV system suited to your security requirements."
        isImageRight={false}
      />
    </div>
  );
};

export default ConsultingClient;
