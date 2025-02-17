"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import styles from "../style/footer.module.css";
import CircularText from "../component/CircularText";
const Footer: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#232f3e",
          color: "white",
          padding: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <CircularText
              // text="REACT*BITS*COMPONENTS*"
              text="A2Z*IT*SOLUTION*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
            <Image
              src="/images/logopng.png"
              alt="logo"
              height={100}
              width={100}
              className={styles.image}
            />

            <Typography variant="body2" color="grey" marginTop="10px" paragraph>
              At A2Z IT SOLUTION, we offer comprehensive Multi-Brand Hardware
              Solutions, including (Sales, Service, Rentals, and Annual
              Maintenance Contracts (AMC)). Our goal is to deliver tailored tech
              solutions that meet the unique needs of both individuals and
              businesses. We also specialize in custom-built PCs at highly
              competitive rates, ensuring optimal performance and value.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="#" color="grey" underline="hover">
              <li className={styles.redMarker}>Rentals</li>
            </Link>
            <hr></hr>
            <Link href="#" color="grey" underline="hover">
              <li className={styles.redMarker}>Consulting</li>
            </Link>
            <hr></hr>

            <Link href="#" color="grey" underline="hover">
              <li className={styles.redMarker}>Softwares</li>
            </Link>
            <hr></hr>

            <Link href="#" color="grey" underline="hover">
              <li className={styles.redMarker}>Computer & Accessories</li>
            </Link>
            <hr></hr>

            <Link href="#" color="grey" underline="hover">
              <li className={styles.redMarker}>Maintenance & Repair</li>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography
              className={styles.contactHead}
              variant="h6"
              gutterBottom
              sx={{ marginLeft: "100px" }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{ color: "grey", marginLeft: "100px" }}
              className={styles.contact}
            >
              Lower Chelidanga, Loretto Para
              <br /> Near ST Pauls Club
              <br />
              Asansol 713304
            </Typography>
            <hr style={{ marginTop: "25px" }}></hr>
            <Typography
              sx={{ color: "grey", marginLeft: "100px" }}
              className={styles.contact}
            >
              Phone:{" "}
              <a
                href="tel:961947358"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                961947358
              </a>
              <br />
              Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=a2zit@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                a2zit@gmail.com
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} paddingBottom={3}>
            <Typography variant="h6" gutterBottom sx={{ marginLeft: "0px" }}>
              Follow Us
            </Typography>
            <IconButton color="warning">
              <FacebookIcon />
            </IconButton>
            <IconButton color="warning">
              <TwitterIcon />
            </IconButton>
            <IconButton color="warning">
              <InstagramIcon />
            </IconButton>
            <IconButton color="warning">
              <PinterestIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <div
        style={{
          height: "50px",
          width: "100%",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "14px",
        }}
      >
        <p>© {new Date().getFullYear()} Bhookhad Tech. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
