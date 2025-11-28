// "use client";
// import * as React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   AppBar,
//   Box,
//   Button,
//   CssBaseline,
//   CircularProgress,
//   Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// interface Props {
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Contact", path: "/contact" },
//   { label: "Product", path: "/product" },
// ];

// export default function DrawerAppBar({ window }: Props) {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   const pathname = usePathname();
//   const router = useRouter();

//   const handleDrawerToggle = React.useCallback(() => {
//     setMobileOpen((prevState) => !prevState);
//   }, []);

//   const handleNavigation = React.useCallback(
//     (path: string) => {
//       if (pathname !== path) {
//         setLoading(true);
//         router.push(path);
//       }
//     },
//     [pathname, router]
//   );

//   React.useEffect(() => {
//     if (loading) {
//       setLoading(false);
//     }
//   }, [pathname]);

//   const drawer = (
//     <Box onClick={handleDrawerToggle}>
//       <Divider />
//       <Image
//         src="/images/logopng.png"
//         height={100}
//         width={100}
//         alt="logo"
//         style={{ marginTop: "25px" }}
//       />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <Link href={item.path} style={{ textDecoration: "none" }}>
//               <ListItemButton
//                 onClick={() => handleNavigation(item.path)}
//                 sx={
//                   {
//                     textAlign: "center",
//                     color: pathname === item.path ? "#fdba74" : "black",
//                     fontWeight: pathname === item.path ? "bold" : "normal",
//                   } as React.CSSProperties
//                 }
//               >
//                 <ListItemText primary={item.label} />
//               </ListItemButton>
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" } as React.CSSProperties}>
//       <CssBaseline />

//       {/* Full-Screen Loader */}
//       {loading && (
//         <Box
//           sx={
//             {
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100vh",
//               backgroundColor: "rgba(0, 0, 0, 0.8)",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               zIndex: 2000,
//             } as React.CSSProperties
//           }
//         >
//           <CircularProgress color="warning" size={80} />
//         </Box>
//       )}

//       {/* Navbar */}
//       <AppBar
//         component="nav"
//         sx={
//           {
//             background: "rgba(0, 0, 0, 0.5)", // Transparent black
//             backdropFilter: "blur(10px)", // Glass effect
//             WebkitBackdropFilter: "blur(10px)", // Safari support
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
//           } as React.CSSProperties
//         }
//       >
//         {" "}
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } as React.CSSProperties }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               display: { xs: "block", sm: "none" },
//               flexGrow: 1,
//               marginLeft: "160px",
//             }}
//           >
//             A2Z IT SOLUTION
//           </Typography>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             A2Z IT SOLUTION
//           </Typography>

//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Link href={item.path} key={item.label}>
//                 <Button
//                   onClick={() => handleNavigation(item.path)}
//                   className="heading glow"
//                   sx={
//                     {
//                       color: pathname === item.path ? "red" : "#fff",
//                       fontSize: "20px",
//                       letterSpacing: "1px",
//                       position: "relative",
//                       "&:hover": {
//                         // color: "blue",
//                       },
//                       "&::after": {
//                         content: '""',
//                         position: "absolute",
//                         bottom: "-5px",
//                         left: "50%",
//                         width: pathname === item.path ? "100%" : "0%",
//                         height: "2px",
//                         backgroundColor: "#fdba74",
//                         transition: "width 0.3s ease-in-out",
//                         transform: "translateX(-50%)",
//                       },
//                       "&:hover::after": {
//                         width: "100%",
//                       },
//                     } as React.CSSProperties
//                   }
//                 >
//                   {item.label}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// second

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  // { label: "Product", path: "/product" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (pathname !== path) {
      setLoading(true);
      router.push(path);
    }
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [pathname]);

  // Prevent scrolling when the mobile menu or loader is active
  useEffect(() => {
    if (mobileOpen || loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [mobileOpen, loading]);

  return (
    <header className={styles.navbar}>
      {/* Full-screen Loader */}
      {loading && (
        <div className={styles.loaderOverlay}>
          <div className={styles.loader}></div>
        </div>
      )}

      <nav className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/images/logopng.png" width={45} height={45} alt="Logo" />
          <span className={styles.logoText}>A2Z IT SOLUTION</span>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.navMenu}>
          {navItems.map((item) => (
            <li key={item.label} className={styles.glow}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`${styles.navLink} ${
                  pathname === item.path ? styles.active : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          &#9776;
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Image
              src="/images/logopng.png"
              width={100}
              height={100}
              alt="Logo"
              style={{ marginTop: "-150px" }}
            />
          </div>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                handleNavigation(item.path);
                setMobileOpen(false);
              }}
              className={styles.mobileNavLink}
            >
              {item.label}
            </button>
          ))}
          <button
            className={styles.closeButton}
            onClick={() => setMobileOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </header>
  );
}
