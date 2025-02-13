import React from "react";
import styles from "../style/hero.module.css";
import ParticlesBackground from "../component/ParticlesBackground"; // Import Particles Component

const Hero = () => {
  return (
    <div className={styles.mainHero}>
      <div
        className={styles.getInTouch}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <ParticlesBackground />
        <div className={styles.leftSection}>
          <div className={styles.info}>
            <div className={styles.infoWindow}>
              <h2 className={styles.subTitle}>
                COMPUTERS, GADGETS, IT ACCESSORIES AND SERVICES
              </h2>
              <p className={styles.description}>
                Welcome to our tech haven! We are proud to be one of Central
                India’s fastest-growing resellers of premium computers, laptops,
                Macs, cameras, gadgets, and accessories from leading brands.
                Along with top-quality products, we offer convenient rent-to-own
                options for computers, printers, projectors, and cameras. Our
                services also include expert IT support to meet both personal
                and professional needs. Thank you for trusting us to power your
                tech journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
