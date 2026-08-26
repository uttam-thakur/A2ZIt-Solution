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
}
