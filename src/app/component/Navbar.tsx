
"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

export default function DrawerAppBar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = React.useCallback(
    (path: string) => {
      if (pathname !== path) {
        setLoading(true);
        router.push(path);
      }
    },
    [pathname, router]
  );

  React.useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [pathname]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <Image
        src="/images/logopng.png"
        height={100}
        width={100}
        alt="logo"
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

      {/* Navbar */}
      <AppBar
        component="nav"
        sx={{
          background: "rgba(0, 0, 0, 0.5)", // Transparent black
          backdropFilter: "blur(10px)", // Glass effect
          WebkitBackdropFilter: "blur(10px)", // Safari support
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
        }}
      >
        {" "}
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

      {/* Mobile Drawer */}
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
