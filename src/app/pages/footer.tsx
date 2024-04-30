import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

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
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="grey" paragraph>
              At A2Z IT SOLUTION, we provide Multi-Brand Hardware Solutions
              (Sales, Service & Rentals). By providing tech-related solutions,
              we strive to meet our customer’s specific individual or business
              needs. We also specialized in custom building PC’s on very
              competitive rates.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="#" color="grey" underline="hover">
              <li>Rentals</li>
            </Link>
            <hr></hr>
            <Link href="#" color="grey" underline="hover">
              <li>Consulting</li>
            </Link>
            <hr></hr>

            <Link href="#" color="grey" underline="hover">
              <li>Softwares</li>
            </Link>
            <hr></hr>

            <Link href="#" color="grey" underline="hover">
              <li>Computer & Accessories</li>
            </Link>
            <hr></hr>

            <Link href="#" color="grey" underline="hover">
              <li>Maintenance & Repair</li>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="h6" gutterBottom sx={{ marginLeft: "100px" }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: "grey" }}>
              Lower Chelidanga, Loretto Para
              <br /> Near ST Paul's Club
              <br />
              Asansol 713304
            </Typography>
            <hr style={{ width: "50%", marginLeft: "110px" }}></hr>
            <Typography sx={{ color: "grey" }}>
              Phone: 961947358
              <br />
              Email: a2zit@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="h6" gutterBottom sx={{ marginLeft: "10px" }}>
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
    </>
  );
};

export default Footer;
