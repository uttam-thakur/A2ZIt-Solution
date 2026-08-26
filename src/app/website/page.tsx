
"use client";
import React from "react";
import Reuse from "../pages/reuse";
import styles from "./styles.module.css";

const page = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className={styles.mainSection}>
          <div className={styles.introContainer}>
            <p className={styles.introHeading}>
              Build a powerful online presence with modern, professional
              website development solutions.
            </p>

            <p className={styles.introSubHeading}>
              With years of experience in web development, we create fast,
              responsive, secure, and user-friendly websites for businesses,
              startups, and organizations. Our websites are designed to
              strengthen your brand, attract customers, and help your business
              grow online.
            </p>

            <div className={styles.ctaContainer}>
              <p>
                Your business deserves a website that works for you — build
                your digital presence with us today!
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}></div>

        <Reuse
          imageSrc="/images/WEB/Website1.webp"
          title="PROFESSIONAL WEBSITE DEVELOPMENT SERVICES"
          description={
            <>
              Take your business online with our{" "}
              <b>professional website development services</b>. At{" "}
              <b>A2Z IT SOLUTION</b>, we design and develop modern, responsive,
              and high-performance websites that help businesses establish a
              strong digital presence.
              <br />
              <br />
              Our website development services include:
              <br />
              <br />
              <b>Business Website Development</b> – Professional websites
              designed according to your business requirements, brand identity,
              and target audience.
              <br />
              <b>Responsive Web Design</b> – Mobile-friendly websites that
              provide a smooth browsing experience across smartphones, tablets,
              laptops, and desktops.
              <br />
              <b>Custom Website Development</b> – Customized websites with
              features and functionality tailored specifically to your
              business needs.
              <br />
              <b>Website Maintenance</b> – Regular updates, security
              improvements, bug fixes, content changes, and performance
              optimization to keep your website running smoothly.
            </>
          }
          isImageRight={false}
        />

        <Reuse
          imageSrc="/images/WEB/Website6.jpg"
          title="RESPONSIVE WEBSITE DESIGN"
          description="A website should look and work perfectly on every device. We develop responsive websites that automatically adapt to different screen sizes, including mobile phones, tablets, laptops, and desktop computers. Our clean and user-friendly designs provide visitors with a smooth and professional browsing experience."
          isImageRight={true}
        />

        <Reuse
          imageSrc="/images/WEB/Website3.avif"
          title="CUSTOM WEBSITE DEVELOPMENT"
          description="Every business is different, and your website should reflect your unique requirements. We create customized websites with modern layouts, professional designs, business-specific features, contact forms, service pages, product sections, and other functionality required to represent your business effectively online."
          isImageRight={false}
        />

        <Reuse
          imageSrc="/images/WEB/Website4.webp"
          title="E-COMMERCE WEBSITE DEVELOPMENT"
          description="Start selling your products online with a professional e-commerce website. We develop user-friendly online stores with product listings, categories, shopping carts, secure payment integration, order management, and responsive designs to help businesses reach more customers and grow their online sales."
          isImageRight={true}
        />

        <Reuse
          imageSrc="/images/WEB/Website5.webp"
          title="WEBSITE MAINTENANCE & SUPPORT"
          description="Keeping your website updated and secure is essential for a successful online presence. We provide ongoing website maintenance, content updates, security improvements, performance optimization, bug fixing, backup support, and technical assistance to ensure your website remains fast, secure, and reliable."
          isImageRight={false}
        />
      </div>
    </>
  );
};

export default page;