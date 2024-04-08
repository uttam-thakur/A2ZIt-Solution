import React from "react";
import styles from "../style/hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.main_hero}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h3 className={styles.heading}>
              COMPUTERS, GADGETS, IT ACCESSORIES AND SERVICES
            </h3>
            <p className={styles.para}>
              We are one of the top-most upcoming resellers of computers in
              Central India. With high-tech PC, laptop, mac, gadgets and
              accessories of top-notch brands, we also supply you best
              rent-to-own computers, printers, projectors and more.
            </p>

            <button className={styles.button}>MORE DETAILS</button>
            <button className={styles.button}>ASK FOR TEST</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            // height="90%"
            // width="100%"
            // width="250%" for responsive
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

// import React from "react";
// import styles from "../style/hero.module.css";

// import { Typography, Button, Container, Box } from "@mui/material";

// const Hero = () => {
//   return (
//     <Box className={styles.main_hero}>
//       <Container className={styles.container}>
//         <Typography variant="h3" gutterBottom className={styles.heading}>
//           COMPUTERS, GADGETS, IT ACCESSORIES AND SERVICES
//         </Typography>
//         <Typography variant="body1" paragraph className={styles.para}>
//           We are one of the top-most upcoming resellers of computers in Central
//           India. With high-tech PC, laptop, mac, gadgets and accessories of
//           top-notch brands, we also supply you best rent-to-own computers,
//           printers, projectors and more.
//         </Typography>
//         <Button variant="contained" color="secondary" className={styles.button}>
//           MORE DETAILS
//         </Button>
//         <Button variant="contained" color="secondary" className={styles.button}>
//           ASK FOR TEST
//         </Button>
//       </Container>
//       <img
//         src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="image"
//       />
//     </Box>
//   );
// };

// export default Hero;
