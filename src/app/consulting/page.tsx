"use client";
import React from "react";
import Reuse from "../pages/reuse";
import Services from "../pages/services";
import CustomersFeedback from "../pages/customersFeedback";
import styles from "./styles.module.css";
const page = () => {
  return (
    <>
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
        <div style={{ marginTop: "20px" }}></div>

        <Reuse
          imageSrc="/images/Consulting/1.avif"
          title="COMPUTERS"
          subtitle="Expert Computer Consulting Services
"
          description="At A2Z IT SOLUTION, we offer professional consulting services to help you make the right technology decisions. Whether you're setting up a new system, upgrading your existing infrastructure, or troubleshooting technical issues, our experts provide tailored solutions to meet your needs. From hardware recommendations to software optimization, we ensure you get the best performance and efficiency. Let us guide you in making informed choices for your personal or business computing requirements. Get in touch today for expert advice and seamless IT solutions!"
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Consulting/2.jpg"
          title="LAPTOPS"
          subtitle="Expert Laptop Consulting Services"
          description="Choosing the right laptop can be challenging, whether for personal use, business, or specialized tasks. At A2Z IT SOLUTION, we provide expert laptop consulting services to help you find the perfect device based on your needs, budget, and performance requirements. Whether you need advice on specifications, brand comparisons, or software compatibility, our experts ensure you make an informed decision. Get the best laptop solutions tailored to your work or lifestyle—consult with us today!"
          isImageRight={false}
        />
        <Reuse
          imageSrc="/images/Consulting/3.avif"
          title="PRINTERS & PROJECTORS"
          subtitle="Professional Printer & Projector Consulting Services
"
          description="Selecting the right printer or projector can be a challenge, especially with so many options available. At A2Z IT SOLUTION, we simplify the process by providing expert guidance tailored to your specific needs. Whether you require a high-speed printer for bulk tasks or a projector with superior clarity for presentations, we help you make the best choice. Our team ensures you get the perfect balance of performance, quality, and budget. Reach out to us for personalized recommendations and hassle-free solutions!"
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Consulting/4.avif"
          title="CCTV CAMERA"
          subtitle="Expert CCTV Camera Consultation Services
"
          description="Choosing the right CCTV camera for your security needs requires careful consideration of features, coverage, and technology. At A2Z IT SOLUTION, we provide professional consultation services to help you select the ideal surveillance solution for your home, office, or commercial space. Whether you need indoor monitoring, outdoor surveillance, or advanced features like night vision and remote access, our experts guide you in making the best choice. Ensure maximum security with the right CCTV system—consult with us today!"
          isImageRight={false}
        />
        {/* <br></br>
        <br></br>
        <br></br>
        <Services />
        <br></br>
        <br></br>

        <CustomersFeedback /> */}
      </div>
    </>
  );
};

export default page;
