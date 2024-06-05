"use client";
import React from "react";
import Services from "../pages/services";
import Navbar from "../component/Navbar";
import Reuse from "../pages/reuse";
import CustomersFeedback from "../pages/customersFeedback";
import Combine from "../pages/combine";
import Footer from "../pages/footer";

const page = () => {
  return (
    <>
      <Navbar />
      <img
        src={
          "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
        }
        width="100%"
        height="400px"
        alt={"rent image"}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="MICROSOFT SURFACE
        "
        description="For all who always wanted an elegant and stylish computer, here’s where you’ll find the most amazing ones. At A2Z IT SOLUTION, we have Microsoft’s family of surface computers. With a plethora of options in versions and style-&-colour, we help you pick the computer that caters to your requirements and needs. With this, we also provide information about its- Graphics, Security, Sensors, Warranty, etc.

        "
        isImageRight={true}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="GAMING LAPTOPS & DESKTOPS
        "
        description="At A2Z IT SOLUTION, we take the gaming experience a notch higher. With the range of sturdy and robust Gaming Laptop & PC, we make sure to provide you systems that have cutting-edge innovation in GPU, display resolutions, & high-speed processors. We have the best systems when it comes to gaming iBuyPower RDY ELIBG207, CyberpowerPC Gamer Xtreme, Corsair Vengeance 5185 and HP Omen Obelisk.

        "
        isImageRight={false}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="COMMERCIAL DESKTOPS & LAPTOPS
        "
        description="Commercial laptop/desktop comes with high-end configuration, thus making it best for official purposes. The computers are designed to meet the professional goals, hence come with extended warranties, durable designs and conservative styling are additional features. At Krishnam Computers, we sell best commercial computer systems- Dell OptiPlex 3050 Micro, Microsoft Surface Studio, Apple iMac Pro, Apple iMac, Huawei MateBook X Pro, Lenovo ThinkPad X1 Carbon, and Apple MacBook Pro.

        "
        isImageRight={true}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="CONSUMER DESKTOPS & LAPTOPS
        "
        description="A Consumer computer system helps you achieve everyday simple computing-tasks. These laptops are meant to be affordable because it comes with configuration that is less impactful than a commercial one. Our best consumer systems are Lenovo Ideapad, HP 15, Acer Aspire, Dell Inspiron, HP Pavilion Wave, Apple iMac, LG, etc

        "
        isImageRight={false}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="PERIPHERALS & ACCESSORIES

        "
        description="Your computer system is incomplete without its peripherals and accessories. Installing these essentials will help your PC, Mac, and Laptop function more efficiently. At A2Z IT SOLUTION , we have a wide range of computer hardware parts that are durable and compatible with all the computer systems. We have Mouse, Keyboard, Speaker, Printer, Scanner, Pendrive, Data Cables. Graphic Table, Barcode Reader, etc.
        "
        isImageRight={true}
      />
      <Services />

      <CustomersFeedback />
      <Combine />
      <Footer />
    </>
  );
};

export default page;
