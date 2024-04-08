import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AboutUs = () => {
  return (
    <div>
      <Card style={{ boxShadow: "none", backgroundColor: "red" }}>
        <Grid container>
          {/* Description on the left */}
          <Grid item xs={12} md={6}>
            <CardContent style={{ padding: "50px" }}>
              <Typography
                variant="h5"
                gutterBottom
                style={{
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
                style={{
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
                style={{ fontSize: "16px", marginTop: "0px" }}
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
            <CardMedia
              // style={{ opacity: "0.9", padding: "40px" }}
              component="img"
              alt="Image Alt Text"
              height="500"
              // image=" https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              image="https://img.freepik.com/free-photo/male-technician-working-broken-computer_23-2147922177.jpg?w=1380&t=st=1712133492~exp=1712134092~hmac=0bdcb9c737eb4790f8fb311c9a950a9bf9193f705910446156e7bd3069beacbf"
              sx={{ paddingRight: "10px", opacity: "0.9" }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AboutUs;
