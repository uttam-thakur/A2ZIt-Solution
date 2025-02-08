// // RentCar.js
// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";

// const Reuse = ({ imageSrc, title, description, isImageRight }: any) => {
//   return (
//     <Card
//       sx={{
//         boxShadow: "none",
//         padding: { xs: "0 1.75rem", md: "0 100px" },
//       }}
//     >
//       <Grid container>
//         {isImageRight ? (
//           <>
//             <Grid item xs={12} md={6}>
//               <CardContent
//                 sx={{
//                   padding: { xs: "0px", md: "50px" },
//                   marginTop: { xs: "40px", md: "90px" },
//                   textAlign: { xs: "left" },
//                 }}
//               >
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
//                   <b>{title}</b>
//                 </Typography>
//                 <Typography variant="body1" style={{ fontSize: "16px" }}>
//                   {description}
//                 </Typography>
//               </CardContent>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <CardMedia
//                 component="img"
//                 alt="Image Alt Text"
//                 image={imageSrc}
//                 sx={{
//                   opacity: "0.9",
//                   height: { xs: "350px", md: "500px" },
//                   width: "100%",
//                   objectFit: "cover",

//                   padding: { xs: "0px", md: "50px" },
//                 }}
//               />
//             </Grid>
//           </>
//         ) : (
//           <>
//             <Grid item xs={12} md={6}>
//               <CardMedia
//                 component="img"
//                 alt="Image Alt Text"
//                 image={imageSrc}
//                 sx={{
//                   opacity: "0.9",
//                   height: { xs: "350px", md: "500px" },
//                   width: "100%",
//                   objectFit: "cover",

//                   padding: { xs: "0px", md: "50px" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <CardContent
//                 sx={{
//                   padding: { xs: "0px", md: "50px" },
//                   marginTop: { xs: "40px", md: "90px" },
//                   textAlign: { xs: "left" },
//                 }}
//               >
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
//                   <b>{title}</b>
//                 </Typography>
//                 <Typography variant="body1" style={{ fontSize: "16px" }}>
//                   {description}
//                 </Typography>
//               </CardContent>
//             </Grid>
//           </>
//         )}
//       </Grid>
//     </Card>
//   );
// };

// export default Reuse;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Reuse = ({ imageSrc, title, description, isImageRight }: any) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        padding: { xs: "0 1.75rem", md: "0 100px" },
      }}
    >
      <Grid
        container
        spacing={2}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        {/* Content Section */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: isImageRight ? 1 : 2 }} // Reverse order on desktop if isImageRight is true
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
            <Typography variant="body1" sx={{ fontSize: "16px" }}>
              {description}
            </Typography>
          </CardContent>
        </Grid>

        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: isImageRight ? 2 : 1 }} // Reverse order on desktop if isImageRight is true
        >
          <CardMedia
            component="img"
            alt={title}
            image={imageSrc}
            sx={{
              opacity: "0.9",
              height: { xs: "350px", md: "500px" },
              width: "100%",
              objectFit: "cover",
              padding: { xs: "0px", md: "50px" },
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Reuse;
