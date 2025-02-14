import React from "react";
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
            <p style={{ fontSize: "22px", color: "grey" }}>{subtitle}</p>
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
              objectFit: "contain",
              padding: { xs: "0px", md: "50px" },
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Reuse;
