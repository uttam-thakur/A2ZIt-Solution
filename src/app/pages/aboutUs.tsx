import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
                At A2Z IT Solution, we provide Multi-Brand Hardware Solutions
                (Sales, Service & Rentals).
                <br />
                By providing tech- related solutions, we strive to meet our
                customer’s specific individual or business needs.
                <br />
                We also specialized in custom building PC’s on very competitive
                rates.
              </Typography>
            </CardContent>
          </Grid>

          {/* Image on the right */}
          <Grid item xs={12} md={6}>
            <Image
              // component="img"
              alt={"Image Alt Text"}
              height={450}
              width={800}
              src={"/images/technitian.jpg"}
              className={styles.image}
              // sx={{ paddingRight: "10px", opacity: "0.9" }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AboutUs;
