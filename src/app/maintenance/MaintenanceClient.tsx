
"use client";

import React from "react";
import Reuse from "../pages/reuse";
import styles from "./styles.module.css";

const MaintenanceClient = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={styles.mainSection}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>
            Empowering businesses with cutting-edge technology solutions for a
            smarter future.
          </p>

          <p className={styles.introSubHeading}>
            With over 10 years of expertise, we specialize in laptops, CCTV
            security systems, and software upgrade maintenance. Our solutions
            help enhance security, boost productivity, and support reliable
            performance.
          </p>

          <div className={styles.ctaContainer}>
            <p>
              Your technology needs are our priority — upgrade with us today!
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }} />

      <Reuse
        imageSrc="/images/Maintenance/AMC.jfif"
        altText="Annual maintenance contract for IT equipment and CCTV systems"
        title="Annual Maintenance Contract Services"
        description={
          <>
            Ensure the smooth operation of your IT infrastructure with our{" "}
            <b>Annual Maintenance Contract (AMC)</b> services for{" "}
            <b>laptops, computers, CCTV systems, and software solutions</b>.
            At <b>A2Z IT SOLUTION</b>, we provide maintenance and technical
            support to help keep your equipment running efficiently.
            <br />
            <br />
            <b>Laptop & Computer Maintenance</b> – Regular servicing, hardware
            diagnostics, and software updates.
            <br />
            <b>CCTV System Support</b> – Camera troubleshooting, DVR/NVR
            maintenance, and routine system checks.
            <br />
            <b>Software Maintenance</b> – Software installation, updates,
            troubleshooting, and license management.
          </>
        }
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/Maintenance/laptop.avif"
        altText="Laptop and desktop computer repair and maintenance"
        title="LAPTOP MAINTENANCE & REPAIR"
        description="A2Z IT SOLUTION provides laptop, desktop, and MacBook troubleshooting and repair services. Our technicians diagnose hardware and software problems, assist with data recovery where possible, remove malware, and help restore reliable computer performance."
        isImageRight={true}
      />

      <Reuse
        imageSrc="/images/Maintenance/cctv.avif"
        altText="CCTV camera servicing, troubleshooting, and maintenance"
        title="CCTV MAINTENANCE"
        description="Regular CCTV maintenance helps keep your surveillance system working reliably. A2Z IT SOLUTION assists with camera troubleshooting, DVR/NVR issues, system checks, and CCTV repairs for homes, offices, and commercial properties."
        isImageRight={false}
      />

      <Reuse
        imageSrc="/images/Maintenance/software.avif"
        altText="Software updates, operating system upgrades, and computer security"
        title="SOFTWARE UPDATE & UPGRADE"
        description="Keep your laptops, PCs, and Macs updated with suitable operating system upgrades, software updates, security tools, and troubleshooting support. A2Z IT SOLUTION helps improve software compatibility, system stability, and protection against security threats."
        isImageRight={true}
      />
    </div>
  );
};

export default MaintenanceClient;
