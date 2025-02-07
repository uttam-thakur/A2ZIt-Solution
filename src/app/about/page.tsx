import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../pages/footer";
import MobileNavbarWrapper from "../component/MobileNavbarWrapper";

const page = () => {
  return (
    <>
      <Navbar />
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <p>About us</p>
      <MobileNavbarWrapper />
      <Footer />
    </>
  );
};

export default page;

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   IoHomeOutline,
//   IoPersonOutline,
//   IoChatbubbleOutline,
//   IoCameraOutline,
//   IoSettingsOutline,
// } from "react-icons/io5";
// import styles from "./Navbar.module.css"; // Import CSS Module

// const icons = [
//   { component: IoHomeOutline, name: "Home" },
//   { component: IoPersonOutline, name: "Profile" },
//   { component: IoChatbubbleOutline, name: "Chat" },
//   { component: IoCameraOutline, name: "Camera" },
//   { component: IoSettingsOutline, name: "Settings" },
// ];

// const Navbar = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className={styles.navigation}>
//       <ul>
//         {icons.map((icon, index) => {
//           const IconComponent = icon.component;
//           return (
//             <li
//               key={index}
//               className={activeIndex === index ? styles.active : ""}
//               onClick={() => setActiveIndex(index)}
//             >
//               <Link href="#">
//                 <span
//                   className={`${styles.icon} ${
//                     activeIndex === index ? styles.activeIcon : ""
//                   }`}
//                 >
//                   <IconComponent
//                     size={25}
//                     style={{ marginTop: "12px", marginLeft: "10px" }}
//                   />
//                 </span>
//               </Link>
//             </li>
//           );
//         })}
//         <div
//           className={styles.indicator}
//           style={{ transform: `translateX(calc(70px * ${activeIndex}))` }}
//         >
//           <span></span>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
