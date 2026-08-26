
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
  { label: "Product", path: "/pro" },
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
