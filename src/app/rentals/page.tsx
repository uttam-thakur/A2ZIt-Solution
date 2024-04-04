// "use client";
// import React from "react";
// import Navbar from "../component/Navbar";
// import Image from "next/image";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Services from "../pages/services";

// const page = () => {
//   return (
//     <>
//       <div>rent page</div>;
//       <Navbar />
//       {/* //firsthalf */}
//       <img
//         src={
//           "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
//         }
//         width="100%"
//         height="400px"
//         alt={"rent image"}
//       />
//       {/* //second half */}
//       <div>
//         <Card style={{ boxShadow: "none" }}>
//           <Grid container>
//             {/* Description on the left */}
//             <Grid item xs={12} md={6}>
//               <CardContent style={{ padding: "50px", marginTop: "90px" }}>
//                 <Typography
//                   variant="h3"
//                   gutterBottom
//                   style={{
//                     fontFamily: "Montserrat UltraLight",
//                     fontSize: "34px",
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <b> COMPUTERS </b>
//                 </Typography>
//                 <Typography variant="body1" style={{ fontSize: "16px" }}>
//                   Buying an entire set of a computer for a purpose that lasts a
//                   few days- is not a thoughtful decision. Hence, we recommend
//                   you rent a laptop, as we have computers from high-end
//                   manufacturers. Rent a laptop, use it, and return it after your
//                   work gets done; it’s that simple. We keep our PCs and Mac
//                   updated with OS and anti-virus software so that customers find
//                   it convenient to use.
//                 </Typography>
//               </CardContent>
//             </Grid>

//             {/* Image on the right */}
//             <Grid item xs={12} md={6}>
//               <CardMedia
//                 component="img"
//                 alt="Image Alt Text"
//                 height="500"
//                 image=" https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 sx={{ opacity: "0.9" }}
//               />
//             </Grid>

//             {/* //third part */}
//             {/* Image on the left */}
//             <Grid item xs={12} md={6}>
//               <CardMedia
//                 component="img"
//                 alt="Image Alt Text"
//                 height="500"
//                 image=" https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 sx={{ opacity: "0.9" }}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <CardContent style={{ padding: "50px", marginTop: "90px" }}>
//                 <Typography
//                   variant="h3"
//                   gutterBottom
//                   style={{
//                     fontFamily: "Montserrat UltraLight",
//                     fontSize: "34px",
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <b> LAPTOPS </b>
//                 </Typography>
//                 <Typography variant="body1" style={{ fontSize: "16px" }}>
//                   For all types of work and all types of need, we at Krishnam
//                   Computers provide our customer wide array of laptops that
//                   differ in style, size, and features. Our laptops are best for
//                   travelers or the ones who are always on the go. For your
//                   unstoppable work, we make sure to rent you a laptop that has
//                   an up-to-date operating system and anti-virus software.
//                 </Typography>
//               </CardContent>
//             </Grid>
//             {/* //fouth part */}
//             <Grid item xs={12} md={6}>
//               <CardContent style={{ padding: "50px", marginTop: "90px" }}>
//                 <Typography
//                   variant="h3"
//                   gutterBottom
//                   style={{
//                     fontFamily: "Montserrat UltraLight",
//                     fontSize: "34px",
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <b> PRINTERS & PROJECTORS </b>
//                 </Typography>
//                 <Typography variant="body1" style={{ fontSize: "16px" }}>
//                   A printer and a projector, both in their spaces are very
//                   useful. But not everyone on a personal level would need either
//                   of them on a daily basis. Even in offices, there can be
//                   situations that call for an urgent demand for extra printer
//                   and projector; hence, for all of your urgent requirements, we
//                   rent printer and projector, both.
//                 </Typography>
//               </CardContent>
//             </Grid>
//             {/* //fifth part */}
//             {/* Image on the right */}
//             <Grid item xs={12} md={6}>
//               <CardMedia
//                 component="img"
//                 alt="Image Alt Text"
//                 height="500"
//                 image=" https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 sx={{ opacity: "0.9" }}
//               />
//             </Grid>

//             {/* //third part */}
//             {/* Image on the left */}
//             <Grid item xs={12} md={6}>
//               <CardMedia
//                 component="img"
//                 alt="Image Alt Text"
//                 height="500"
//                 image=" https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 sx={{ opacity: "0.9" }}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <CardContent style={{ padding: "50px", marginTop: "90px" }}>
//                 <Typography
//                   variant="h3"
//                   gutterBottom
//                   style={{
//                     fontFamily: "Montserrat UltraLight",
//                     fontSize: "34px",
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <b> CCTV CAMERA </b>
//                 </Typography>
//                 <Typography variant="body1" style={{ fontSize: "16px" }}>
//                   To install a security camera in or around a house/commercial
//                   space is a conscious decision, but for uncalled emergencies
//                   and preventive measures, one might think to opt for a CCTV
//                   camera for a short term basis. At Krishnam Computers, we
//                   understand the need for it and hence rent CCTV cameras that
//                   help you solve your purpose.
//                 </Typography>
//               </CardContent>
//             </Grid>
//           </Grid>
//         </Card>
//       </div>
//       <Services />
//     </>
//   );
// };

// export default page;

// page.js
"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Image from "next/image";
import Reuse from "../pages/reuse";
import Services from "../pages/services";

const Page = () => {
  return (
    <>
      <div>rent page</div>
      <Navbar />
      {/* //firsthalf */}
      <img
        src={
          "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
        }
        width="100%"
        height="400px"
        alt={"rent image"}
      />
      {/* //second half */}
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="COMPUTERS"
        description="Buying an entire set of a computer for a purpose that lasts a few days- is not a thoughtful decision. Hence, we recommend you rent a laptop, as we have computers from high-end manufacturers. Rent a laptop, use it, and return it after your work gets done; it’s that simple. We keep our PCs and Mac updated with OS and anti-virus software so that customers find it convenient to use."
        isImageRight={true}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="LAPTOPS"
        description="For all types of work and all types of need, we at Krishnam Computers provide our customer wide array of laptops that differ in style, size, and features. Our laptops are best for travelers or the ones who are always on the go. For your unstoppable work, we make sure to rent you a laptop that has an up-to-date operating system and anti-virus software."
        isImageRight={false}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="PRINTERS & PROJECTORS"
        description="A printer and a projector, both in their spaces are very useful. But not everyone on a personal level would need either of them on a daily basis. Even in offices, there can be situations that call for an urgent demand for extra printer and projector; hence, for all of your urgent requirements, we rent printer and projector, both."
        isImageRight={true}
      />
      <Reuse
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="CCTV CAMERA"
        description="To install a security camera in or around a house/commercial space is a conscious decision, but for uncalled emergencies and preventive measures, one might think to opt for a CCTV camera for a short term basis. At Krishnam Computers, we understand the need for it and hence rent CCTV cameras that help you solve your purpose."
        isImageRight={false}
      />
      <Services />
    </>
  );
};

export default Page;
