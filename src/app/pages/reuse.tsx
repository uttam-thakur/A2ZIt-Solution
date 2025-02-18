// import React from "react";
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";

// const Reuse = ({
//   imageSrc,
//   title,
//   subtitle,
//   description,
//   isImageRight,
// }: any) => {
//   return (
//     <Card
//       sx={{
//         boxShadow: "none",
//         padding: { xs: "0 1.75rem", md: "0 100px" },
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         flexDirection={{ xs: "column-reverse", md: "row" }}
//       >
//         {/* Content Section */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           order={{ xs: 2, md: isImageRight ? 1 : 2 }} // Reverse order on desktop if isImageRight is true
//         >
//           <CardContent
//             sx={{
//               padding: { xs: "0px", md: "50px" },
//               marginTop: { xs: "40px", md: "90px" },
//               textAlign: { xs: "left" },
//             }}
//           >
//             <Typography
//               variant="h3"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat UltraLight",
//                 fontSize: { xs: "28px", md: "34px" },
//                 textAlign: { xs: "left", md: "center" },
//               }}
//             >
//               <b>{title}</b>
//             </Typography>
//             <p style={{ fontSize: "22px", color: "grey" }}>{subtitle}</p>
//             <Typography variant="body1" sx={{ fontSize: "16px" }}>
//               {description}
//             </Typography>
//           </CardContent>
//         </Grid>

//         {/* Image Section */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           order={{ xs: 1, md: isImageRight ? 2 : 1 }} // Reverse order on desktop if isImageRight is true
//         >
//           <CardMedia
//             component="img"
//             alt={title}
//             image={imageSrc}
//             sx={{
//               opacity: "0.9",
//               height: { xs: "350px", md: "500px" },
//               width: "100%",
//               objectFit: "contain",
//               padding: { xs: "0px", md: "50px" },
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Card>
//   );
// };

// export default Reuse;

"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const Reuse = ({
  imageSrc,
  title,
  subtitle,
  description,
  isImageRight,
}: any) => {
  // Motion Variants
  const fadeInVariant = (direction: string) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  return (
    <Card
      sx={{ boxShadow: "none", padding: { xs: "0 1.75rem", md: "0 100px" } }}
    >
      <Grid
        container
        spacing={2}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        {/* Content Section */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: isImageRight ? 1 : 2 }}>
          <motion.div
            variants={fadeInVariant(isImageRight ? "left" : "right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
          >
            <CardContent
              sx={{
                padding: { xs: "0px", md: "50px" },
                marginTop: { xs: "40px", md: "90px" },
                textAlign: { xs: "left" },
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontFamily: "Montserrat UltraLight",
                  fontSize: { xs: "28px", md: "34px" },
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                <b>{title}</b>
              </Typography>
              <p style={{ fontSize: "22px", color: "grey" }}>{subtitle}</p>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                {description}
              </Typography>
            </CardContent>
          </motion.div>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: isImageRight ? 2 : 1 }}>
          <motion.div
            variants={fadeInVariant(isImageRight ? "right" : "left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
          >
            <CardMedia
              component="img"
              alt={title}
              image={imageSrc}
              sx={{
                opacity: "0.9",
                height: { xs: "350px", md: "500px" },
                width: "100%",
                objectFit: "contain",
                padding: { xs: "0px", md: "50px" },
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Reuse;
