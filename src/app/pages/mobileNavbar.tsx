"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";

import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoCallOutline,
  IoCartOutline,
} from "react-icons/io5";

import styles from "../style/Navbar.module.css";

const icons = [
  { component: IoHomeOutline, name: "Home", path: "/" },
  { component: IoInformationCircleOutline, name: "Profile", path: "/about" },
  { component: IoCallOutline, name: "Chat", path: "/contact" },
  { component: IoCartOutline, name: "Cart", path: "/cartItems" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ✅ Find active index, if no match set to -1
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

  return (
    <>
      {loading && (
        <div className={styles.loaderOverlay}>
          <CircularProgress color="warning" size={80} />
        </div>
      )}

      <div className={styles.navigation}>
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

          {/* ✅ Hide indicator when activeIndex is -1 */}
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
