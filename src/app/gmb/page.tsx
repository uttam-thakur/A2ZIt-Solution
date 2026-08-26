
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
              Grow your business online with powerful Google Business Profile
              solutions.
            </p>

            <p className={styles.introSubHeading}>
              With our Google My Business (GMB) services, we help businesses
              improve their online visibility, attract more local customers,
              and build a strong presence on Google Search and Google Maps.
              Our professional solutions are designed to increase customer
              engagement, generate leads, and improve your local search
              ranking.
            </p>

            <div className={styles.ctaContainer}>
              <p>
                Make your business easier to find on Google — grow your local
                presence with us today!
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}></div>

        <Reuse
          imageSrc="/images/GMB/GMB1.avif"
          title="GOOGLE MY BUSINESS (GMB) SERVICES"
          description={
            <>
              Establish a strong online presence with our{" "}
              <b>Google Business Profile (GMB)</b> services. At{" "}
              <b>A2Z IT SOLUTION</b>, we help businesses create, optimize, and
              manage their Google Business Profile to improve visibility on
              <b> Google Search and Google Maps</b>.
              <br />
              <br />
              Our GMB services include:
              <br />
              <br />
              <b>Google Business Profile Setup</b> – Complete profile creation,
              verification guidance, business information, categories, and
              service setup.
              <br />
              <b>GMB Profile Optimization</b> – Optimize your business profile
              with accurate information, services, descriptions, photos, and
              relevant local keywords.
              <br />
              <b>Google Maps Listing</b> – Improve your business presence on
              Google Maps so local customers can easily find your location and
              services.
              <br />
              <b>Review Management</b> – Help manage customer reviews and
              improve your business reputation through professional responses
              and review strategies.
            </>
          }
          isImageRight={false}
        />

        <Reuse
          imageSrc="/images/GMB/GMB2.avif"
          title="GMB PROFILE OPTIMIZATION"
          description="A properly optimized Google Business Profile helps your business appear more prominently in local Google searches. We optimize your business name, category, description, services, contact information, business hours, photos, and other important profile details to create a professional and customer-friendly presence."
          isImageRight={true}
        />

        <Reuse
          imageSrc="/images/GMB/GMB3.jpg"
          title="GOOGLE MAPS & LOCAL SEO"
          description="Get your business discovered by customers searching for products and services in your area. We optimize your Google Business Profile to strengthen your local presence and improve visibility across Google Search and Google Maps, helping potential customers find your business more easily."
          isImageRight={false}
        />

        <Reuse
          imageSrc="/images/GMB/GMB.webp"
          title="GOOGLE REVIEWS & REPUTATION MANAGEMENT"
          description="Customer reviews play an important role in building trust and attracting new customers. We help businesses manage their Google reviews, respond professionally to customer feedback, and develop effective strategies to encourage genuine customer reviews and build a stronger online reputation."
          isImageRight={true}
        />
      </div>
    </>
  );
};

export default page;
