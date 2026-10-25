
"use client";

import React from "react";
import Reuse from "../pages/reuse";
import styles from "./styles.module.css";

const WebsiteClient = () => {
  return (
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

      <div style={{ marginTop: "20px" }} />

      <Reuse
        imageSrc="/images/WEB/website1.webp"
        altText="Professional website development services for businesses"
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
            designed around your business requirements, brand identity, and
            target audience.
            <br />
            <b>Responsive Web Design</b> – Mobile-friendly websites for
            smartphones, tablets, laptops, and desktops.
            <br />
            <b>Custom Website Development</b> – Websites with functionality
            tailored to your business needs.
            <br />
            <b>Website Maintenance</b> – Updates, security improvements, bug
            fixes, content changes, and performance optimization.
          </>
        }
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/WEB/website6.webp"
        altText="Responsive website design for mobile, tablet, and desktop"
        title="RESPONSIVE WEBSITE DESIGN"
        description="We develop responsive websites that adapt to different screen sizes, including mobile phones, tablets, laptops, and desktop computers. Our clean and user-friendly designs provide visitors with a smooth browsing experience."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/WEB/website3.avif"
        altText="Custom website development tailored to business requirements"
        title="CUSTOM WEBSITE DEVELOPMENT"
        description="Every business is different, and your website should reflect your requirements. We create customized websites with modern layouts, professional designs, contact forms, service pages, product sections, and other features to represent your business effectively online."
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/WEB/website4.webp"
        altText="E-commerce website development and online store design"
        title="E-COMMERCE WEBSITE DEVELOPMENT"
        description="Start selling products online with a professional e-commerce website. Depending on your requirements, we can develop online stores with product listings, categories, shopping carts, payment integration, order management, and responsive designs."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/WEB/website5.webp"
        altText="Website maintenance, security updates, and technical support"
        title="WEBSITE MAINTENANCE & SUPPORT"
        description="Keep your website updated and reliable with website maintenance services. Support can include content updates, security improvements, performance optimization, bug fixing, backup assistance, and technical support."
        isImageRight={false}
      />
    </div>
  );
};

export default WebsiteClient;
