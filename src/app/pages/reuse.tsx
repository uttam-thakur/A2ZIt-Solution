// RentCar.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Reuse = ({ imageSrc, title, description, isImageRight }: any) => {
  return (
    <Card style={{ boxShadow: "none" }}>
      <Grid container>
        {isImageRight ? (
          <>
            <Grid item xs={12} md={6}>
              <CardContent style={{ padding: "50px", marginTop: "90px" }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{
                    fontFamily: "Montserrat UltraLight",
                    fontSize: "34px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <b>{title}</b>
                </Typography>
                <Typography variant="body1" style={{ fontSize: "16px" }}>
                  {description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="Image Alt Text"
                height="500"
                image={imageSrc}
                sx={{ opacity: "0.9" }}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="Image Alt Text"
                height="500"
                image={imageSrc}
                sx={{ opacity: "0.9" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent style={{ padding: "50px", marginTop: "90px" }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{
                    fontFamily: "Montserrat UltraLight",
                    fontSize: "34px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <b>{title}</b>
                </Typography>
                <Typography variant="body1" style={{ fontSize: "16px" }}>
                  {description}
                </Typography>
              </CardContent>
            </Grid>
          </>
        )}
      </Grid>
    </Card>
  );
};

export default Reuse;
