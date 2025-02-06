"use client";
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Product", path: "/product" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // Handle navigation with loader
  const handleNavigation = (path: string) => {
    if (pathname !== path) {
      setLoading(true);
      router.push(path);
    }
  };

  // Hide loader when path changes
  React.useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <Image
        src={"/images/logopng.png"}
        height={100}
        width={100}
        alt={"logo"}
        style={{ marginTop: "25px" }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.path} style={{ textDecoration: "none" }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: pathname === item.path ? "#fdba74" : "black",
                  fontWeight: pathname === item.path ? "bold" : "normal",
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Full-Screen Loader */}
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
          <CircularProgress color="warning" size={80} />
        </Box>
      )}
      <AppBar component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "block", sm: "none" },
              flexGrow: 1,
              marginLeft: "160px",
            }}
          >
            A2Z IT SOLUTION
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            A2Z IT SOLUTION
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={item.path} key={item.label}>
                <Button
                  onClick={() => handleNavigation(item.path)}
                  className="heading glow"
                  sx={{
                    color: pathname === item.path ? "red" : "#fff",
                    fontSize: "20px",
                    letterSpacing: "1px",
                    position: "relative",
                    "&:hover": {
                      // color: "blue",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-5px",
                      left: "50%",
                      width: pathname === item.path ? "100%" : "0%",
                      height: "2px",
                      backgroundColor: "#fdba74",
                      transition: "width 0.3s ease-in-out",
                      transform: "translateX(-50%)",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

// "use client";
// import * as React from "react";
// import { usePathname, useRouter } from "next/navigation";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Link from "next/link";
// import Image from "next/image";
// import CircularProgress from "@mui/material/CircularProgress";

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

// export default function DrawerAppBar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const [loading, setLoading] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   // Handle navigation with loader
//   const handleNavigation = (path: string) => {
//     if (pathname !== path) {
//       setLoading(true);
//       router.push(path);
//     }
//   };

//   // Hide loader when path changes
//   React.useEffect(() => {
//     setLoading(false);
//   }, [pathname]);

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Divider />
//       <Image
//         src={"/images/logopng.png"}
//         height={100}
//         width={100}
//         alt={"logo"}
//         style={{ marginTop: "25px" }}
//       />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton
//               onClick={() => handleNavigation(item.path)}
//               sx={{
//                 textAlign: "center",
//                 color: pathname === item.path ? "#fdba74" : "black",
//                 fontWeight: pathname === item.path ? "bold" : "normal",
//               }}
//             >
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Full-Screen Loader */}
//       {loading && (
//         <Box
//           sx={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100vh",
//             backgroundColor: "rgba(0, 0, 0, 0.8)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 2000,
//           }}
//         >
//           <CircularProgress color="warning" size={60} />
//         </Box>
//       )}

//       <AppBar component="nav" sx={{ background: "black" }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
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
//               <Button
//                 key={item.label}
//                 onClick={() => handleNavigation(item.path)}
//                 className="heading glow"
//                 sx={{
//                   color: pathname === item.path ? "red" : "#fff",
//                   fontSize: "20px",
//                   letterSpacing: "1px",
//                   position: "relative",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     bottom: "-5px",
//                     left: "50%",
//                     width: pathname === item.path ? "100%" : "0%",
//                     height: "2px",
//                     backgroundColor: "#fdba74",
//                     transition: "width 0.3s ease-in-out",
//                     transform: "translateX(-50%)",
//                   },
//                   "&:hover::after": {
//                     width: "100%",
//                   },
//                 }}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
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
