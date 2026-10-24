
"use client";

import React from "react";
import Reuse from "../pages/reuse";
import styles from "./styles.module.css";

const SoftwareClient = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
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

      <div style={{ marginTop: "20px" }} />

      <Reuse
        imageSrc="/images/Software/erp1.avif"
        altText="ERP software solutions for business management"
        title="ERP SOFTWARES"
        subtitle="Enterprise Resource Planning (ERP) Software"
        description="Enterprise Resource Planning (ERP) software helps streamline essential business operations. It supports functions such as accounting, procurement, project management, compliance, and supply chain management from a centralized system. Real-time information and automated workflows can improve productivity, decision-making, and collaboration across departments."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Software/accounting1.avif"
        altText="Accounting software for business financial management"
        title="ACCOUNTING SOFTWARE"
        subtitle="Accounting Software – Simplifying Financial Management"
        description="Accounting software helps businesses manage financial operations accurately and efficiently. Features may include transaction management, payroll, accounts receivable, accounts payable, trial balances, and financial reporting. Automating calculations and organizing financial data can reduce manual errors and help businesses make informed decisions."
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/Software/security1.avif"
        altText="Antivirus and cybersecurity software solutions"
        title="SECURITY"
        subtitle="Advanced Security Solutions – Protecting Your Digital World"
        description="Protect your computers and business data with suitable security software. A2Z IT SOLUTION provides software options such as antivirus, antimalware, and VPN solutions for compatible laptops, desktops, and Macs. The right security tools can help detect threats, protect privacy, and support a safer computing environment."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Software/business.avif"
        altText="Business operations and workflow management software"
        title="BUSINESS OPERATIONS"
        subtitle="Business Operation Software – Streamline, Optimize, and Grow"
        description="Business operations software helps organizations manage workflows, track expenses, coordinate tasks, and organize resources. By reducing repetitive manual work and improving visibility into daily operations, suitable software can help businesses improve efficiency and support informed decisions."
        isImageRight={false}
      />
    </div>
  );
};

export default SoftwareClient;
