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
          title="ERP SOFTWARES"
          description="Enterprise Resource Planning is a suite of software that manages all the essential tasks of enterprises. The activities might vary depending on the company and its need, but ERP majorly handles accounting, procurement, project management, risk management & compliance, and supply chain operations. It provides complete visibility into all the important processes across departments. It also helps in sharing information and saves time by eliminating unnecessary operations and data."
          isImageRight={true}
        />
        <Reuse
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="ACCOUNTING SOFTWARE"
          description="Every small-to-large-sized enterprise needs a structured system that looks into all the whereabouts related to finance. To match up the level of accuracy that deals in number, Accounting Software in such scenarios come to a big help; and many businesses are now looking forward to adopting it. The Software not only manages the accounting transaction but also helps in dealing with payroll, accounts receivable, accounts payable, and trial balances.

        "
          isImageRight={false}
        />
        <Reuse
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="SECURITY"
          description="Data breaching and computer threats are spreading all over the world, and to date has affected many people and companies. With every new variant of malware that gets introduced, the threat associated with it also multiplies. In such scenarios, every computer system is ought to have a backup of strong security and privacy software. At Krishnam Computers, we have Antivirus, Antimalware, VPN software for Laptops, PC and Mac."
          isImageRight={true}
        />
        <Reuse
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="BUSSINESS OPERATIONS"
          description="The objective of a Business Operation Software is to increase the value of the firm and bring profit to the business. But due to many ongoing tasks and chaotic workflow, the pre-decided goal of the firm takes longer to achieve. Now to manage the entire workflow and optimize the expenses, a Business Management/Operation Software helps to do the needful and takes the firm closer to its goal. "
          isImageRight={false}
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
