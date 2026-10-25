<<<<<<< HEAD
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact A2Z IT SOLUTION | IT Services in Asansol",
  description: "Contact A2Z IT SOLUTION in Asansol, West Bengal for laptop and desktop repair, printer services, CCTV installation, website development and IT support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact A2Z IT SOLUTION | IT Services in Asansol",
    description: "Get in touch with A2Z IT SOLUTION for computer repair and professional IT support in Asansol.",
    url: "/contact",
    images: [{ url: "/images/logopng.png", alt: "A2Z IT SOLUTION logo" }],
  },
  twitter: { card: "summary_large_image", title: "Contact A2Z IT SOLUTION | IT Services in Asansol", description: "Contact our team for computer repair and IT support in Asansol.", images: ["/images/logopng.png"] },
};

export default function ContactPage() {
  return <ContactClient />;
=======
"use client";

import React from "react";
import FAQ from "../pages/FAQ";
import styles from "./contact.module.css";
import { infoData } from "../common/constant";
import GetInTouchForm from "../pages/GetInTouchForm";
import ParticlesBackground from "../component/ParticlesBackground";

export default function Contact() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className={styles.main}>
          <div className={styles.particlesContainer}>
            <ParticlesBackground />
          </div>{" "}
          <div className={styles.info}>
            <div className={styles.title}>{infoData.title}</div>
            <div className={styles.infoWindow}>
              <div className={styles.subTitle}>{infoData.subTitle}</div>
              <div className={styles.description}>{infoData.description}</div>
            </div>
          </div>
        </div>

        <FAQ />
        <GetInTouchForm />
      </div>
    </>
  );
>>>>>>> cef7596624ce830dc5ea8ac0f070140598cbb1ca
}
