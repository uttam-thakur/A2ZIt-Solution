
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
              Google Business Profile Management & Local SEO
  Services in Asansol
            </p>

            
<p className={styles.introSubHeading}>
  A2Z IT SOLUTION provides Google Business Profile setup,
  profile optimization, Google Maps listing support, and
  local SEO services in Asansol, West Bengal. We help
  businesses improve their online presence, share accurate
  business information, connect with local customers, and
  build trust through professional profile management.
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
          imageSrc="/images/GMB/GMB3.webp"
          title="GOOGLE MAPS & LOCAL SEO"
          description="Get your business discovered by customers searching for products and services in your area. We optimize your Google Business Profile to strengthen your local presence and improve visibility across Google Search and Google Maps, helping potential customers find your business more easily."
          isImageRight={false}
        />

        <Reuse
          imageSrc="/images/GMB/gmb.webp"
          title="GOOGLE REVIEWS & REPUTATION MANAGEMENT"
          description="Customer reviews play an important role in building trust and attracting new customers. We help businesses manage their Google reviews, respond professionally to customer feedback, and develop effective strategies to encourage genuine customer reviews and build a stronger online reputation."
          isImageRight={true}
        />
      </div>
    </>
  );
};

export default page;
