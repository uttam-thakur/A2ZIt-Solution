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

      {/* <div style={{ overflowX: "hidden" }}> */}
      {/* <Image
          src={
            "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
          }
          width={1260}
          height={400}
          alt={"rent image"}
        /> */}

      <div style={{ overflowX: "hidden", marginTop: "-50px" }}>
        <div className={styles.mainSection}>
          <div className={styles.introContainer}>
            <p className={styles.introHeading}>
              Empowering businesses with cutting-edge technology solutions for a
              smarter future.
            </p>
            <p className={styles.introSubHeading}>
              With over 10 years of expertise, we specialize in laptops, CCTV
              security systems, and software upgrade maintenance. Our innovative
              solutions are designed to enhance security, boost productivity,
              and ensure seamless performance.
            </p>
            <div className={styles.ctaContainer}>
              <p>
                Your technology needs are our priority — upgrade with us today!
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <Reuse
          imageSrc="/images/Maintenance/laptop.avif"
          title="LAPTOP MAINTENANCE & REPAIR
        "
          description="Malfunctioning computers and laptops are not a problem, as long as you have access to our repairing services. At A2Z IT SOLUTION, our team of experts is super quick at understanding the problem and fixing the problem. Our technicians are pro at handling laptop, desktop & MacBook, and together they diagnose and repair the computer, help in recovering computer files and photos, and remove all kinds of malware.

        "
          isImageRight={true}
        />
        <Reuse
          imageSrc="/images/Maintenance/cctv.avif"
          title="CCTV MAINTENANCE
        "
          description="You need to have a CCTV camera to shield your property and keep a close eye on what’s happening around it. But then just installing doesn’t do it all, you need timely maintenance. At Krishnam Computers, we look after the maintenance part and repair the CCTV whenever needed. We have qualified engineers and technicians on board, who are prompt enough in helping you sort out every problem."
          isImageRight={false}
        />
        <Reuse
          imageSrc="/images/Maintenance/software.avif"
          title="SOFTWARE UPDATE & UPGRADE
        "
          description="The practice of ignoring software upgrades has taken a major toll on many computers, to date. Using outdated software and OS keeps malware at bay and matches the compatibility of the system with new applications. We, at A2Z IT SOLUTION, take the mantle of maintaining all the devices with the best security, protection, and privacy software. We also help in installing new versions of the Operating System. We update and upgrade all software and OS for all laptops, PCs, and Macs.

        "
          isImageRight={true}
        />
        <br></br>
        <br></br>
        <br></br>
        <Services />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CustomersFeedback />
        {/* <Combine /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default page;
