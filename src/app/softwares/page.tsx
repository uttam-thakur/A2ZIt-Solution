"use client";
import React from "react";
import Services from "../pages/services";
import Navbar from "../component/Navbar";
import Reuse from "../pages/reuse";
import CustomersFeedback from "../pages/customersFeedback";
import Combine from "../pages/combine";
import Footer from "../pages/footer";
import Image from "next/image";
import styles from "./styles.module.css";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <img
        src={
          "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
        }
        width="100%"
        height="400px"
        alt={"rent image"}
      /> */}
      <div style={{ overflowX: "hidden", marginTop: "-50px" }}>
        <div className={styles.mainSection}>
          <div className={styles.introContainer}>
            <p className={styles.introHeading}>
              Delivering Advanced Software Solutions for Laptops and Desktops.
            </p>
            <p className={styles.introSubHeading}>
              With over a decade of expertise, we provide{" "}
              <strong>tailored software services</strong> to enhance
              productivity and efficiency. From{" "}
              <strong>business management and accounting software</strong> to{" "}
              <strong>antivirus protection and enterprise solutions</strong>, we
              ensure seamless integration for your laptops and desktops.
            </p>
            <div className={styles.ctaContainer}>
              <p>
                Optimize your workflow with our cutting-edge software — get
                started today!
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}></div>

        <Reuse
          imageSrc="/images/Software/erp1.avif"
          title="ERP SOFTWARES"
          subtitle="Enterprise Resource Planning (ERP) Software
"
          description="Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate essential business operations. It enables organizations to efficiently manage key functions such as accounting, procurement, project management, risk compliance, and supply chain operations—all from a centralized system. With real-time data access and automation, ERP enhances productivity, improves decision-making, and ensures seamless collaboration across departments. By eliminating redundant processes and optimizing workflows, our ERP software empowers businesses to operate smarter and more efficiently."
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Software/accounting1.avif"
          title="ACCOUNTING SOFTWARE"
          subtitle="Accounting Software – Simplifying Financial Management
"
          description="Every business, from startups to large enterprises, requires a reliable system to manage its financial operations with accuracy and efficiency. Our Accounting Software is designed to streamline financial processes, ensuring precision in managing transactions, payroll, accounts receivable, accounts payable, and trial balances. By automating complex calculations and reducing manual errors, it enhances productivity and compliance. Stay on top of your finances with real-time insights, seamless reporting, and a user-friendly interface—empowering your business to make informed financial decisions with ease.

        "
          isImageRight={false}
        />
        <Reuse
          imageSrc="/images/Software/security1.avif"
          title="SECURITY"
          subtitle="Advanced Security Solutions – Protecting Your Digital World
"
          description="With cyber threats and data breaches on the rise, securing your systems has never been more critical. Every new strain of malware brings increased risks, making robust security measures essential for individuals and businesses alike. At A2Z IT SOLUTION, we provide top-tier Antivirus, Antimalware, and VPN software for Laptops, PCs, and Mac to safeguard your data, privacy, and digital assets. Stay protected from cyber threats, prevent unauthorized access, and ensure a secure computing environment with our trusted security solutions.







"
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Software/business.avif"
          title="BUSSINESS OPERATIONS"
          subtitle="Business Operation Software – Streamline, Optimize, and Grow
"
          description="Efficient business operations are key to maximizing productivity and profitability. However, managing multiple tasks and complex workflows can slow down progress toward organizational goals. Business Operation Software simplifies and automates processes, optimizing resource allocation and reducing operational costs. From workflow management to expense tracking, it provides a unified platform to enhance efficiency and drive business growth. Empower your organization with smart solutions that help you stay on track and achieve success faster.







 "
          isImageRight={false}
        />
        <Services />

        <CustomersFeedback />
        {/* <Combine /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default page;
