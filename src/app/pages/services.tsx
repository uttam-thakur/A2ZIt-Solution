// "use client";
// import React from "react";
// import Link from "next/link";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import { CardActionArea } from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import styles from "../style/services.module.css";
// import CardContent from "@mui/material/CardContent";
// import { usePathname, useRouter } from "next/navigation";
// import CircularProgress from "@mui/material/CircularProgress";
// import MobileNavbarWrapper from "../component/MobileNavbarWrapper";

// import { SxProps, Theme } from "@mui/system";

// const loadingStyles: SxProps<Theme> = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   backgroundColor: "rgba(0,0,0,0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 9999,
// };

// const ServiceCard = ({ title, description, imageSrc, href }: any) => {
//   const [isHovered, setIsHovered] = React.useState(false);
//   const pathname = usePathname();
//   const isPathMatched = pathname;

//   return (
//     <>
//       <Link href={href} style={{ textDecoration: "none" }}>
//         <Card
//           sx={{
//             maxWidth: 260,
//             margin: "10px",
//             border: "1px solid grey",
//             transition: "transform 0.3s ease-in-out",
//             transform: isHovered ? "scale(1.05)" : "scale(1)",
//             display: href === isPathMatched ? "none" : "block",
//           }}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="250px"
//               width="200px"
//               image={imageSrc}
//               alt={title}
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "20px",
//               }}
//             />
//             <CardContent>
//               <div className={styles.titleContainer}>
//                 <Typography
//                   gutterBottom
//                   variant="h6"
//                   component="div"
//                   sx={{ display: "flex", justifyContent: "center" }}
//                 >
//                   {title}
//                 </Typography>
//               </div>
//               <br />
//               <Typography variant="body2" color="text.secondary">
//                 {description}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Link>
//     </>
//   );
// };

// const Services = () => {
//   const servicesData = [
//     {
//       title: "RENTALS",
//       description:
//         "We rent reliable Desktop Computers, Macbooks, Laptops and tech gadgets of the top brands at the best price.",
//       imageSrc:
//         "https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg",
//       href: "/rentals",
//     },
//     {
//       title: "CONSULTING",
//       description:
//         "We at A2Z IT SOLUTION consult & help our customers with understanding the devices and software they have, bought.",
//       imageSrc:
//         "https://img.freepik.com/premium-vector/continuous-one-line-drawing-two-smart-businessmen-discussing-project-office-business-consulting-concept-single-line-draw-design-vector-graphic-illustration_638785-1374.jpg",
//       href: "/consulting",
//     },
//     {
//       title: "SOFTWARES",
//       description:
//         "We provide security-based, system-based and application-based software for corporate/non-corporate clients.",
//       imageSrc:
//         "https://www.shutterstock.com/image-vector/hand-draw-business-doodles-digital-260nw-670252099.jpg",
//       href: "/softwares",
//     },
//     {
//       title: "COMPUTER & ACCESSORIES",
//       description:
//         "We sell PC, Mac, Laptops and accessories like speakers, cables, battery backups, headsets, charger and many .",
//       imageSrc:
//         "https://www.shutterstock.com/image-vector/different-computer-gadgets-doodle-vector-260nw-645427756.jpg",
//       href: "/comp&Acc",
//     },
//     {
//       title: "MAINTENANCE & REPAIR",
//       description:
//         "We are dedicated to providing the best computer maintenance services and repair services when needed.",
//       imageSrc:
//         "https://img.freepik.com/premium-vector/continuous-line-drawing-construction-worker-vector-illustration-isolated-white-background_497857-152.jpg",
//       href: "/maintenance",
//     },
//       {
//     title: "WEBSITE DEVELOPMENT",
//     description:
//       "We design and develop fast, responsive and professional websites for businesses, startups and organizations with modern, mobile-friendly and SEO-ready solutions.",
//     imageSrc: "/images/website-development.webp",
//     href: "/website",
//   },
//     {
//   title: "GOOGLE BUSINESS PROFILE",
//   description:
//     "We set up and optimize Google Business Profiles to improve your local online presence, help customers find your business on Google Search and Maps, and generate more enquiries.",
//   imageSrc: "/images/services/google-business-profile.webp",
//   href: "/gmb",
// },
//   ];

//   const pathname = usePathname();
//   const isPathMatched = pathname;
//   const router = useRouter();
//   const [loading, setLoading] = React.useState(false);

//   const handleNavigation = (href: string) => {
//     if (pathname !== href) {
//       setLoading(true);
//       router.push(href);
//     }
//   };

//   React.useEffect(() => {
//     setLoading(false);
//   }, [pathname]);

//   // 🚫 Freeze background scroll when loading
//   React.useEffect(() => {
//     if (loading) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [loading]);

//   const filteredServicesData = servicesData.filter(
//     (service) => service.href !== isPathMatched
//   );

//   return (
//     <div className={styles.container} style={{ backgroundColor: "snow" }}>
//       {loading && (
//         // @ts-ignore
//         <Box sx={loadingStyles}>
//           <CircularProgress color="warning" size={60} />
//         </Box>
//       )}
//       <p className={styles.p}>WHAT WE PROVIDE</p>
//       <h2 className={styles.h2}>SERVICES</h2>
//       <MobileNavbarWrapper />
//       <p className={styles.p}>
//         We believe in providing quality and timely service to the customers.
//         <br /> Our team of experts is pro at executing all kinds of repair work
//         <br /> right from data recovery to desktop screen replacement, we manage
//         everything.
//         <br /> We also consult our customers on the latest tech devices,
//         software updates as per their need.
//       </p>
//       <div className={styles.cardContainer}>
//         {filteredServicesData?.map((service, index) => (
//           <div key={index} onClick={() => handleNavigation(service.href)}>
//             <ServiceCard {...service} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


"use client";

import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import { SxProps, Theme } from "@mui/system";
import { usePathname, useRouter } from "next/navigation";

import styles from "../style/services.module.css";
import MobileNavbarWrapper from "../component/MobileNavbarWrapper";



const loadingStyles: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};
/* =========================
   SERVICE CARD TYPES
========================= */

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

/* =========================
   SERVICE CARD
========================= */

const ServiceCard = ({
  title,
  description,
  imageSrc,
  href,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const pathname = usePathname();

  const isPathMatched = pathname === href;

  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        width: "100%",
        height: "100%",
        display: "block",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          minHeight: 430,

          border: "1px solid #e0e0e0",
          borderRadius: "12px",

          overflow: "hidden",

          backgroundColor: "#fff",

          boxShadow: isHovered
            ? "0 10px 25px rgba(0,0,0,0.12)"
            : "0 3px 10px rgba(0,0,0,0.06)",

          transition: "all 0.3s ease",

          transform: isHovered
            ? "translateY(-5px)"
            : "translateY(0)",

          display: isPathMatched ? "none" : "flex",

          flexDirection: "column",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          {/* IMAGE */}
          <CardMedia
            component="img"
            image={imageSrc}
            alt={title}
            sx={{
              width: "100%",
              height: "210px",

              objectFit: "contain",

              padding: "15px",

              backgroundColor: "#fafafa",

              boxSizing: "border-box",

              flexShrink: 0,
            }}
          />

          {/* CONTENT */}
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",

              flex: 1,

              padding: "18px",
            }}
          >
            {/* TITLE */}
            <div className={styles.titleContainer}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,

                  textAlign: "center",

                  fontSize: "18px",

                  lineHeight: 1.3,

                  margin: 0,
                }}
              >
                {title}
              </Typography>
            </div>

            {/* DESCRIPTION */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.6,

                textAlign: "center",

                minHeight: "90px",

                display: "-webkit-box",

                WebkitLineClamp: 4,

                WebkitBoxOrient: "vertical",

                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

/* =========================
   SERVICES COMPONENT
========================= */

const Services = () => {
  const servicesData: ServiceCardProps[] = [
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
        "We at A2Z IT SOLUTION consult & help our customers with understanding the devices and software they have bought.",
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
        "We sell PC, Mac, Laptops and accessories like speakers, cables, battery backups, headsets, chargers and more.",
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

    {
      title: "WEBSITE DEVELOPMENT",
      description:
        "We design and develop fast, responsive and professional websites for businesses, startups and organizations with modern, mobile-friendly and SEO-ready solutions.",
      imageSrc: "/images/WEB/websiteBN.png",
      href: "/website",
    },

    {
      title: "GOOGLE BUSINESS PROFILE",
      description:
        "We set up and optimize Google Business Profiles to improve your local online presence, help customers find your business on Google Search and Maps, and generate more enquiries.",
      imageSrc: "/images/GMB/GMBBN.png",
      href: "/gmb",
    },
  ];

  const pathname = usePathname();

  const router = useRouter();

  const sliderRef = React.useRef<HTMLDivElement>(null);

  const [loading, setLoading] = React.useState(false);

  const [activeDot, setActiveDot] = React.useState(0);

  /* =========================
     REMOVE CURRENT PAGE
  ========================= */

  const filteredServicesData = servicesData.filter(
    (service) => service.href !== pathname
  );

  /* =========================
     DESKTOP VISIBLE CARDS
  ========================= */

  const visibleCards = 5;

  /*
   * Example:
   *
   * 7 cards
   *
   * 1 2 3 4 5
   *   2 3 4 5 6
   *     3 4 5 6 7
   *
   * Therefore:
   * 7 - 5 + 1 = 3 dots
   */

  const totalDots = Math.max(
    filteredServicesData.length - visibleCards + 1,
    1
  );

  /* =========================
     HANDLE SLIDER SCROLL
  ========================= */

  const handleScroll = React.useCallback(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const firstCard = slider.querySelector(
      "[data-service-card]"
    ) as HTMLElement | null;

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;

    const gap = 20;

    const scrollPosition = slider.scrollLeft;

    const index = Math.round(
      scrollPosition / (cardWidth + gap)
    );

    setActiveDot(
      Math.min(
        Math.max(index, 0),
        totalDots - 1
      )
    );
  }, [totalDots]);

  /* =========================
     ADD SCROLL LISTENER
  ========================= */

  React.useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      slider.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [handleScroll]);

  /* =========================
     SCROLL TO DOT
  ========================= */

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const firstCard = slider.querySelector(
      "[data-service-card]"
    ) as HTMLElement | null;

    if (!firstCard) return;

    const gap = 20;

    const scrollAmount =
      index * (firstCard.offsetWidth + gap);

    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    setActiveDot(index);
  };

  /* =========================
     NAVIGATION
  ========================= */

  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      setLoading(true);

      router.push(href);
    }
  };

  /* =========================
     STOP LOADING
  ========================= */

  React.useEffect(() => {
    setLoading(false);
  }, [pathname]);

  /* =========================
     FREEZE BACKGROUND SCROLL
  ========================= */

  React.useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  /* =========================
     RESET DOT AFTER ROUTE
  ========================= */

  React.useEffect(() => {
    setActiveDot(0);

    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }
  }, [pathname]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: "snow",
      }}
    >
      {/* =========================
          LOADING OVERLAY
      ========================= */}

  {loading && (
  <Box sx={loadingStyles}>
    <CircularProgress color="warning" size={60} />
  </Box>
)}

      {/* =========================
          HEADING
      ========================= */}

      <p className={styles.p}>
        WHAT WE PROVIDE
      </p>

      <h2 className={styles.h2}>
        SERVICES
      </h2>

      <MobileNavbarWrapper />

      {/* =========================
          DESCRIPTION
      ========================= */}

      <p className={styles.p}>
        We believe in providing quality and timely
        service to the customers.
        <br />
        Our team of experts is pro at executing all
        kinds of repair work
        <br />
        right from data recovery to desktop screen
        replacement, we manage everything.
        <br />
        We also consult our customers on the latest
        tech devices,
        software updates as per their need.
      </p>

      {/* =========================
          SERVICE CAROUSEL
      ========================= */}

      <div
        ref={sliderRef}
        className={styles.cardContainer}
      >
        {filteredServicesData.map(
          (service, index) => (
            <div
              key={service.href}
              data-service-card
              className={styles.cardWrapper}
              onClick={() =>
                handleNavigation(service.href)
              }
            >
              <ServiceCard
                {...service}
              />
            </div>
          )
        )}
      </div>

      {/* =========================
          DOT NAVIGATION
      ========================= */}

      {totalDots > 1 && (
        <div
          className={styles.dotsContainer}
        >
          {Array.from({
            length: totalDots,
          }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${
                activeDot === index
                  ? styles.activeDot
                  : ""
              }`}
              onClick={() =>
                scrollToIndex(index)
              }
              aria-label={`Go to service slide ${
                index + 1
              }`}
              aria-current={
                activeDot === index
                  ? "true"
                  : undefined
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;