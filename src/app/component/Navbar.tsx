
// "use client";

// import { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import styles from "./Navbar.module.css";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Contact", path: "/contact" },
//   { label: "Product", path: "/pro" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const pathname = usePathname();
//   const router = useRouter();

//   const handleNavigation = (path: string) => {
//     if (pathname !== path) {
//       setLoading(true);
//       router.push(path);
//     }
//   };

//   useEffect(() => {
//     if (loading) {
//       setLoading(false);
//     }
//   }, [pathname]);

//   // Prevent scrolling when the mobile menu or loader is active
//   useEffect(() => {
//     if (mobileOpen || loading) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Reset on unmount
//     };
//   }, [mobileOpen, loading]);

//   return (
//     <header className={styles.navbar}>
//       {/* Full-screen Loader */}
//       {loading && (
//         <div className={styles.loaderOverlay}>
//           <div className={styles.loader}></div>
//         </div>
//       )}

//       <nav className={styles.navContainer}>
//         {/* Logo */}
//         <div className={styles.logoContainer}>
//           <Image src="/images/logopng.png" width={45} height={45} alt="Logo" />
//           <span className={styles.logoText}>A2Z IT SOLUTION</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className={styles.navMenu}>
//           {navItems.map((item) => (
//             <li key={item.label} className={styles.glow}>
//               <button
//                 onClick={() => handleNavigation(item.path)}
//                 className={`${styles.navLink} ${
//                   pathname === item.path ? styles.active : ""
//                 }`}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className={styles.menuButton}
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           &#9776;
//         </button>
//       </nav>

//       {/* Mobile Drawer */}
//       {mobileOpen && (
//         <div className={styles.mobileMenu}>
//           {/* Logo */}
//           <div className={styles.logoContainer}>
//             <Image
//               src="/images/logopng.png"
//               width={100}
//               height={100}
//               alt="Logo"
//               style={{ marginTop: "-150px" }}
//             />
//           </div>
//           {navItems.map((item) => (
//             <button
//               key={item.label}
//               onClick={() => {
//                 handleNavigation(item.path);
//                 setMobileOpen(false);
//               }}
//               className={styles.mobileNavLink}
//             >
//               {item.label}
//             </button>
//           ))}
//           <button
//             className={styles.closeButton}
//             onClick={() => setMobileOpen(false)}
//           >
//             &times;
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/pro" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className={styles.navbar}>
      <nav className={styles.navContainer} aria-label="Main navigation">
        <Link
          href="/"
          className={styles.brand}
          aria-label="A2Z IT Solution home"
        >
          <Image
            src="/images/logopng.png"
            width={46}
            height={46}
            alt=""
            priority
            className={styles.logo}
          />

          <span className={styles.brandText}>
            <span className={styles.brandName}>A2Z IT SOLUTION</span>
            <span className={styles.brandTagline}>
              Technology. Trust. Support.
            </span>
          </span>
        </Link>

        <div className={styles.desktopMenu}>
          {navItems.map((item) => {
            const active =
              pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path + "/"));

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.navLink} ${
                  active ? styles.active : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

         
        </div>

        <button
          type="button"
          className={`${styles.menuButton} ${
            mobileOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileBackdrop} onClick={() => setMobileOpen(false)}>
          <div
            id="mobile-navigation"
            className={styles.mobileDrawer}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>Explore A2Z</span>

              <button
                type="button"
                className={styles.drawerClose}
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                &times;
              </button>
            </div>

            <div className={styles.mobileLinks}>
              {navItems.map((item) => {
                const active =
                  pathname === item.path ||
                  (item.path !== "/" && pathname.startsWith(item.path + "/"));

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`${styles.mobileNavLink} ${
                      active ? styles.mobileActive : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </div>

            <div className={styles.drawerFooter}>
              <p>Need technical assistance?</p>
              <Link
                href="/contact"
                className={styles.drawerContact}
                onClick={() => setMobileOpen(false)}
              >
                Contact Our Team
              </Link>
              <span>A2Z IT SOLUTION</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
