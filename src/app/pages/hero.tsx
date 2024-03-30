import React from "react";
import styles from "../style/hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.main_hero}>
        <div className={styles.hero}>
          {/* hero */}
          <div className={styles.container}>
            <h3 className={styles.heading}>
              COMPUTERS, GADGETS, IT ACCESSORIES AND SERVICES
            </h3>
            <p className={styles.para}>
              We are one of the top-most upcoming resellers of computers in
              Central India. With high-tech PC, laptop, mac, gadgets and
              accessories of top-notch brands, we also supply you best
              rent-to-own computers, printers, projectors and more.
            </p>

            <button className={styles.button}>MORE DETAILS</button>
            <button className={styles.button}>ASK FOR TEST</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            height="90%"
            width="100%"
            className="img"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

// "use Client";
// import React, { useState, useEffect } from "react";
// import styles from "../style/hero.module.css";

// const Hero = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     // Set loaded to true after a short delay
//     const timer = setTimeout(() => {
//       setLoaded(true);
//     }, 100); // Adjust the delay time as needed

//     // Clear the timer on component unmount
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className={`${styles.main_hero} ${loaded ? styles.loaded : ""}`}>
//         <div className={`${styles.hero} ${loaded ? styles.loaded : ""}`}>
//           {/* hero */}
//           <div className={`${styles.container} ${loaded ? styles.loaded : ""}`}>
//             <h3 className={`${styles.heading} ${loaded ? styles.loaded : ""}`}>
//               COMPUTERS, GADGETS, IT ACCESSORIES AND SERVICES
//             </h3>
//             <p className={`${styles.para} ${loaded ? styles.loaded : ""}`}>
//               We are one of the top-most upcoming resellers of computers in
//               Central India. With high-tech PC, laptop, mac, gadgets and
//               accessories of top-notch brands, we also supply you best
//               rent-to-own computers, printers, projectors and more.
//             </p>

//             <button
//               className={`${styles.button} ${loaded ? styles.loaded : ""}`}
//             >
//               MORE DETAILS
//             </button>
//             <button
//               className={`${styles.button} ${loaded ? styles.loaded : ""}`}
//             >
//               ASK FOR TEST
//             </button>
//           </div>
//           <img
//             src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="image"
//             height="90%"
//             width="100%"
//             className={`${styles.img} ${loaded ? styles.loaded : ""}`}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;
