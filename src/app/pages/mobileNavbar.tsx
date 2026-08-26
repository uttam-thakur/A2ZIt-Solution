
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoCallOutline,
  IoCartOutline,
  IoCubeOutline,
} from "react-icons/io5";

import styles from "../style/Navbar.module.css";

const icons = [
  { component: IoHomeOutline, name: "Home", path: "/" },
  { component: IoInformationCircleOutline, name: "Profile", path: "/about" },
  { component: IoCallOutline, name: "Chat", path: "/contact" },
  { component: IoCubeOutline, name: "Cart", path: "/pro" },
  // { component: IoCartOutline, name: "Cart", path: "/cartItems" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout: NodeJS.Timeout | null = null;

  const activeIndex = icons.findIndex((icon) => icon.path === pathname);

  const handleNavigation = (path: string) => {
    if (pathname !== path) {
      setLoading(true);
      router.push(path);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide navbar on scroll

      // Clear timeout if user is continuously scrolling
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Show navbar when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 300); // Adjust timing as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className={styles.loaderOverlay}>
          <CircularProgress color="warning" size={80} />
        </div>
      )}

      <div
        className={`${styles.navigation} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <ul>
          {icons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <li
                key={index}
                className={activeIndex === index ? styles.active : ""}
                onClick={() => handleNavigation(icon.path)}
              >
                <Link href={icon.path}>
                  <span
                    className={`${styles.icon} ${
                      activeIndex === index ? styles.activeIcon : ""
                    }`}
                  >
                    <IconComponent
                      size={25}
                      style={{ marginTop: "12px", marginLeft: "10px" }}
                    />
                  </span>
                </Link>
              </li>
            );
          })}

          {activeIndex !== -1 && (
            <div
              className={styles.indicator}
              style={{
                transform: `translateX(calc(70px * ${activeIndex}))`,
              }}
            >
              <span></span>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
