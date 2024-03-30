"use Client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../style/services.css";
const ServiceCard = ({ title, description, imageSrc }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      sx={{
        maxWidth: 260,
        margin: "10px",
        border: "1px solid grey",
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250px"
          width="200px"
          image={imageSrc}
          alt={title}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        />
        <CardContent>
          <div className="title-container">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {title}
            </Typography>
          </div>

          <br />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "RENTALS",
      description:
        "We rent reliable Desktop Computers, Macbooks, Laptops and tech gadgets of the top brands at the best price.",
      imageSrc:
        "https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg",
    },
    {
      title: "CONSULTING",
      description:
        "We consult & help our customers with understanding the devices and software they’ve, bought.",
      imageSrc:
        "https://img.freepik.com/premium-vector/continuous-one-line-drawing-two-smart-businessmen-discussing-project-office-business-consulting-concept-single-line-draw-design-vector-graphic-illustration_638785-1374.jpg",
    },
    {
      title: "SOFTWARES",
      description:
        "We provide security-based, system-based and application-based software for corporate/non-corporate clients.",
      imageSrc:
        "https://www.shutterstock.com/image-vector/hand-draw-business-doodles-digital-260nw-670252099.jpg",
    },
    {
      title: "COMPUTER & ACCESSORIES",
      description:
        "We sell PC, Mac, Laptops and accessories like- speakers, cables, battery backups, headsets, charger and many more.",
      imageSrc:
        "https://www.shutterstock.com/image-vector/different-computer-gadgets-doodle-vector-260nw-645427756.jpg",
    },
    {
      title: "MAINTENANCE & REPAIR",
      description:
        "We are dedicated to providing the best computer maintenance services and repair services when needed.",
      imageSrc:
        "https://img.freepik.com/premium-vector/continuous-line-drawing-construction-worker-vector-illustration-isolated-white-background_497857-152.jpg",
    },

    // Add more service data as needed
  ];

  return (
    <div className="container">
      <p className="h">WHAT WE PROVIDE</p>
      <h2>SERVICES</h2>
      <p>
        We believe in providing quality and timely service to the customers.
        <br /> Our team of experts is pro at executing all kinds of repair work{" "}
        <br /> right from data recovery to desktop screen replacement, we manage
        everything.
        <br /> We also consult our customers on the latest tech devices,
        software updates as per their need.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
