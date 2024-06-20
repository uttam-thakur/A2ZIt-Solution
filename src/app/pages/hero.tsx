import React from "react";
import styles from "../style/hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className={styles.main_hero}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h3 className={styles.heading}>
              COMPUTERS, GADGETS, IT ACCESSORIES AND SERVICES
            </h3>
            <p className={styles.para}>
              We are one of the top-most upcoming resellers of computers in
              Central India. With high-tech PC, laptop, mac, gadgets and
              accessories of top-notch brands, we also supply you best
              rent-to-own computers, printers, projectors and more.
            </p>

            <button className={styles.button}>MORE DETAILS</button>
            <button className={styles.button}>ASK FOR TEST</button>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            height={90}
            width={250}
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
