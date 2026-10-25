import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from "../style/aboutUs.module.css";
const AboutUs = () => {
  return (
    <div>
      <Card sx={{ boxShadow: "none" }}>
        <Grid container>
          {/* Description on the left */}
          <Grid item xs={12} md={6}>
            <CardContent
              sx={{
                padding: {
                  xs: "10px",
                  sm: "50px",
                },
                marginTop: {
                  xs: "-60px",
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  marginTop: "90px",
                  fontSize: "20px",
                  fontFamily: "Montserrat UltraLight",
                  fontWeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                A2Z IT Solution
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  // marginLeft: "35%",
                  // marginTop: "90px",
                  fontFamily: "Montserrat UltraLight",
                  fontSize: "34px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <b> ABOUT US </b>
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontSize: "18px",
                  marginTop: "0px",
                  textAlign: "left",
                }}
              >
             

          At A2Z IT Solution, we provide end-to-end Multi-Brand Hardware Solutions — Sales, Service, and Rentals — all in one place.  
  We handle your daily tech hurdles with precision, keeping your systems running as smoothly as a well-aligned circuit 🖥️✨  
  <br /><br />
  Our services include expert CCTV installation, laptop and desktop repairs, and modern website design that strengthens your digital presence.  
  <br /><br />
  We also build high-performance custom PCs at competitive prices, giving you powerful performance without stretching your budget.
</Typography>
            </CardContent>
          </Grid>

          {/* Image on the right */}
          <Grid item xs={12} md={6}>
            <Image
              alt={"Image Alt Text"}
              height={450}
              width={800}
              src={"/images/technitian.jpg"}
              className={styles.image}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AboutUs;
