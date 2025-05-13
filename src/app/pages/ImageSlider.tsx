// "use client";

// import React, { useRef } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import styles from "../style/ImageSlider.module.css";

// const images = ["/images/5.png", "/images/banner.webp", "/images/banner1.webp"];

// export default function ImageSlider() {
//   const [sliderRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       perView: 1,
//     },

//   });

//   return (
//     <div ref={sliderRef} className={`keen-slider ${styles.sliderContainer}`}>
//       {images.map((src, i) => (
//         <div key={i} className={`keen-slider__slide ${styles.slide}`}>
//           <img src={src} alt={`Slide ${i}`} className={styles.image} />
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";

import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../style/ImageSlider.module.css";

const images = ["/images/5.png", "/images/banner.webp", "/images/banner1.webp"];

export default function ImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  // Start autoplay
  useEffect(() => {
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 3000); // every 3 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slider]);

  return (
    <div ref={ref} className={`keen-slider ${styles.sliderContainer}`}>
      {images.map((src, i) => (
        <div key={i} className={`keen-slider__slide ${styles.slide}`}>
          <img src={src} alt={`Slide ${i}`} className={styles.image} />
        </div>
      ))}
    </div>
  );
}
