"use client";
import React from "react";
import Services from "../pages/services";
import Navbar from "../component/Navbar";
import Reuse from "../pages/reuse";
import CustomersFeedback from "../pages/customersFeedback";
import Combine from "../pages/combine";
import Footer from "../pages/footer";
import Image from "next/image";
const page = () => {
  return (
    <>
      <Navbar />
      {/* <img
        src={
          "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
        }
        width="100%"
        height="400px"
        alt={"rent image"}
      /> */}
      <div style={{ overflowX: "hidden" }}>
        <Image
          src={
            "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
          }
          width={1260}
          height={400}
          alt={"rent image"}
        />
        <Reuse
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="LAPTOP MAINTENANCE & REPAIR
        "
          description="Malfunctioning computers and laptops are not a problem, as long as you have access to our repairing services. At A2Z IT SOLUTION, our team of experts is super quick at understanding the problem and fixing the problem. Our technicians are pro at handling laptop, desktop & MacBook, and together they diagnose and repair the computer, help in recovering computer files and photos, and remove all kinds of malware.

        "
          isImageRight={true}
        />
        <Reuse
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="CCTV MAINTENANCE
        "
          description="You need to have a CCTV camera to shield your property and keep a close eye on what’s happening around it. But then just installing doesn’t do it all, you need timely maintenance. At Krishnam Computers, we look after the maintenance part and repair the CCTV whenever needed. We have qualified engineers and technicians on board, who are prompt enough in helping you sort out every problem."
          isImageRight={false}
        />
        <Reuse
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="SOFTWARE UPDATE & UPGRADE
        "
          description="The practice of ignoring software upgrades has taken a major toll on many computers, to date. Using outdated software and OS keeps malware at bay and matches the compatibility of the system with new applications. We, at A2Z IT SOLUTION, take the mantle of maintaining all the devices with the best security, protection, and privacy software. We also help in installing new versions of the Operating System. We update and upgrade all software and OS for all laptops, PCs, and Macs.

        "
          isImageRight={true}
        />

        <Services />

        <CustomersFeedback />
        <Combine />
        <Footer />
      </div>
    </>
  );
};

export default page;
