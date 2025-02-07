"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import styles from "../style/services.module.css";
import { usePathname, useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import MobileNavbarWrapper from "../component/MobileNavbarWrapper";

const ServiceCard = ({ title, description, imageSrc, href }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const pathname = usePathname();
  const isPathMatched = pathname;

  return (
    <>
      <Link href={href} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            maxWidth: 260,
            margin: "10px",
            border: "1px solid grey",
            transition: "transform 0.3s ease-in-out",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            display: href === isPathMatched ? "none" : "block",
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
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            />
            <CardContent>
              <div className={styles.titleContainer}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ display: "flex", justifyContent: "center" }}
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
      </Link>
    </>
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
      href: "/rentals",
    },
    {
      title: "CONSULTING",
      description:
        "We at A2Z IT SOLUTION consult & help our customers with understanding the devices and software they have, bought.",
      imageSrc:
        "https://img.freepik.com/premium-vector/continuous-one-line-drawing-two-smart-businessmen-discussing-project-office-business-consulting-concept-single-line-draw-design-vector-graphic-illustration_638785-1374.jpg",
      href: "/consulting",
    },
    {
      title: "SOFTWARES",
      description:
        "We provide security-based, system-based and application-based software for corporate/non-corporate clients.",
      imageSrc:
        "https://www.shutterstock.com/image-vector/hand-draw-business-doodles-digital-260nw-670252099.jpg",
      href: "/softwares",
    },
    {
      title: "COMPUTER & ACCESSORIES",
      description:
        "We sell PC, Mac, Laptops and accessories like speakers, cables, battery backups, headsets, charger and many .",
      imageSrc:
        "https://www.shutterstock.com/image-vector/different-computer-gadgets-doodle-vector-260nw-645427756.jpg",
      href: "/comp&Acc",
    },
    {
      title: "MAINTENANCE & REPAIR",
      description:
        "We are dedicated to providing the best computer maintenance services and repair services when needed.",
      imageSrc:
        "https://img.freepik.com/premium-vector/continuous-line-drawing-construction-worker-vector-illustration-isolated-white-background_497857-152.jpg",
      href: "/maintenance",
    },
  ];

  const pathname = usePathname();
  const isPathMatched = pathname;
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      setLoading(true);
      router.push(href);
    }
  };

  React.useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const filteredServicesData = servicesData.filter(
    (service) => service.href !== isPathMatched
  );

  return (
    <div className={styles.container}>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <CircularProgress color="warning" size={60} />
        </Box>
      )}
      <p className={styles.p}>WHAT WE PROVIDE</p>
      <h2 className={styles.h2}>SERVICES</h2>
      <MobileNavbarWrapper />
      <p className={styles.p}>
        We believe in providing quality and timely service to the customers.
        <br /> Our team of experts is pro at executing all kinds of repair work
        <br /> right from data recovery to desktop screen replacement, we manage
        everything.
        <br /> We also consult our customers on the latest tech devices,
        software updates as per their need.
      </p>
      <div className={styles.cardContainer}>
        {filteredServicesData?.map((service, index) => (
          <div key={index} onClick={() => handleNavigation(service.href)}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
