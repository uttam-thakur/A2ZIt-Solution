// import Image from "next/image";
// import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import AddIcon from "@mui/icons-material/Add";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
// import RemoveIcon from "@mui/icons-material/Remove";
// import styles from "../style/chooseUs.module.css";
// import WhyChooseUs from "./whyChooseUs";
// const ChooseUs = () => {
//   const [expandedItem, setExpandedItem]: any = useState("rentalService");

//   const toggleExpansion = (itemName: any) => {
//     if (expandedItem === itemName) {
//       setExpandedItem("");
//     } else {
//       setExpandedItem(itemName);
//     }
//   };

//   return (
//     <div className={styles.mainDiv}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ display: "flex", justifyContent: "center" }}
//       >
//         WHY CHOOSE US
//       </Typography>
//       <Card
//         sx={{
//           color: "red",
//           backgroundColor: "white",
//           boxShadow: "none",
//         }}
//       >
//         <Grid container>
//           {/* Image on the right */}
//           <Grid item xs={12} md={6}>
//             <Image
//               // component="img"
//               alt={"Image Alt Text"}
//               height={400}
//               width={750}
//               src={"/images/Rental/background4.webp"}
//               className={styles.image}
//             />
//           </Grid>
//           {/* <Grid item xs={12} md={6}>
//             <WhyChooseUs />
//           </Grid> */}

//           {/* Description on the left */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               marginTop: "-50px",
//             }}
//           >
//             <CardContent>
//               <IconButton
//                 onClick={() => toggleExpansion("rentalService")}
//                 sx={{
//                   color: "black",
//                   marginLeft: "auto",
//                   marginTop: "30px",
//                 }}
//               >
//                 {expandedItem === "rentalService" ? (
//                   <RemoveIcon />
//                 ) : (
//                   <AddIcon />
//                 )}
//                 <p className={styles.p}>RENTAL SERVICE</p>
//               </IconButton>

//               {expandedItem === "rentalService" && (
//                 <div className={`${styles.expandedItem} ${styles.mobileView}`}>
//                   <Image
//                     src={
//                       "https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
//                     }
//                     width={250}
//                     height={200}
//                     alt={"laptop image"}
//                   />
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: "black",
//                       textAlign: "justify",
//                       padding: "10px",
//                       marginTop: {
//                         xs: "0px",
//                         // sm: "20px",
//                         sm: "40px",
//                       },
//                     }}
//                   >
//                     We offer a diverse selection of high-performance PCs, Macs,
//                     and laptops tailored to both professional and personal
//                     needs. Every device we rent is equipped with an up-to-date
//                     operating system and robust antivirus software, ensuring
//                     security and seamless functionality
//                   </Typography>
//                 </div>
//               )}
//               <hr className={styles.horLine}></hr>
//               <IconButton
//                 onClick={() => toggleExpansion("maintenance")}
//                 sx={{
//                   color: "black",
//                   marginLeft: "auto",
//                   marginTop: "-30px",
//                 }}
//               >
//                 {expandedItem === "maintenance" ? <RemoveIcon /> : <AddIcon />}
//                 <p className={styles.p}>MAINTENANCE</p>
//               </IconButton>

//               {expandedItem === "maintenance" && (
//                 <div className={`${styles.expandedItem} ${styles.mobileView}`}>
//                   {" "}
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: "black",
//                       textAlign: "justify",
//                       padding: "10px",
//                       marginTop: {
//                         xs: "0px",
//                         sm: "20px",
//                       },
//                     }}
//                   >
//                     Regular maintenance is essential to keep your PC and Mac
//                     running at peak performance. At A2Z IT SOLUTION, we provide
//                     comprehensive services, including device driver updates,
//                     system optimization, and junk file cleanup, ensuring faster
//                     and more efficient performance.
//                   </Typography>
//                   <Image
//                     src={"/images/Maintenance/maintenance.avif"}
//                     width={250}
//                     height={200}
//                     alt={"laptop image"}
//                   />
//                 </div>
//               )}
//               <hr className={styles.horLine}></hr>

//               <IconButton
//                 onClick={() => toggleExpansion("accessories")}
//                 sx={{
//                   color: "black",
//                   marginLeft: "auto",
//                   marginTop: "-30px",
//                 }}
//               >
//                 {expandedItem === "accessories" ? <RemoveIcon /> : <AddIcon />}
//                 <p className={styles.p}>ACCESSORIES</p>
//               </IconButton>

//               {expandedItem === "accessories" && (
//                 <div className={`${styles.expandedItem} ${styles.mobileView}`}>
//                   {" "}
//                   <Image
//                     src={"/images/access.avif"}
//                     width={250}
//                     height={200}
//                     alt={"laptop image"}
//                   />
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: "black",
//                       textAlign: "justify",
//                       padding: "10px",
//                       marginTop: {
//                         xs: "0px",
//                         sm: "20px",
//                       },
//                     }}
//                   >
//                     Peripherals and accessories play a crucial role in
//                     optimizing daily computing tasks. At A2Z IT SOLUTION, we
//                     offer a comprehensive range of high-quality accessories and
//                     peripherals from leading brands, ensuring seamless
//                     performance and enhanced productivity.
//                   </Typography>
//                 </div>
//               )}
//             </CardContent>
//           </Grid>
//         </Grid>
//       </Card>
//     </div>
//   );
// };

// export default ChooseUs;

"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../style/chooseUs.module.css";

const items = [
  // {
  //   id: "rental",
  //   title: "RENTAL SERVICE",
  //   image: "/images/Rental/1.webp",
  //   text: "We offer reliable PCs, Macs and laptops for professional and personal requirements, with updated systems and practical support.",
  // },
  {
    id: "maintenance",
    title: "MAINTENANCE",
    image: "/images/Maintenance/maintenance.avif",
    text: "Regular maintenance keeps devices fast and reliable. We handle optimization, updates, cleanup, troubleshooting and AMC support.",
  },
  {
    id: "accessories",
    title: "ACCESSORIES",
    image: "/images/access.avif",
    text: "Choose useful peripherals and accessories from dependable brands to improve everyday productivity and convenience.",
  },
  {
    id: "cctv",
    title: "CCTV & SECURITY",
    image: "/images/CCTV/cctv.jpg",
    text: "We provide professional CCTV installation, configuration and maintenance services for homes, offices, shops and commercial properties.",
  },
  {
    id: "website-design",
    title: "WEBSITE DEVELOPMENT",
    image: "/images/WEB/web.jpg",
    text: "We design and develop fast, responsive and professional websites for businesses, startups and organizations with modern technology and mobile-friendly layouts.",
  },
  {
    id: "gmb-setup",
    title: "GOOGLE PROFILE / GMB",
    image: "/images/GMB/gmb.webp",
    text: "We set up and optimize Google Business Profiles to help your business appear professionally on Google Search and Maps and attract more local customers.",
  },
];

export default function ChooseUs() {
  const [open, setOpen] = useState(items[0].id);
  return <section className={styles.mainDiv}>
    <div className={styles.inner}>
      <p className={styles.eyebrow}>WHY CHOOSE US</p>
      <h2>Technology support that stays practical.</h2>
      <div className={styles.layout}>
        <div className={styles.imageWrap}><Image src="/images/Rental/background4.webp" alt="Technology services from A2Z IT Solution" fill sizes="(max-width: 800px) 100vw, 50vw" className={styles.image} /></div>
        <div className={styles.list}>
          {items.map((item) => <div key={item.id} className={styles.item}>
            <button className={styles.trigger} onClick={() => setOpen(open === item.id ? "" : item.id)} aria-expanded={open === item.id}>{open === item.id ? "−" : "+"}<span>{item.title}</span></button>
            {open === item.id && <div className={styles.expanded}><Image src={item.image} width={220} height={150} alt="" className={styles.thumb} /><p>{item.text}</p></div>}
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
