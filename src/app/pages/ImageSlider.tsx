// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import styles from "../style/ImageSlider.module.css";
// const images = [
//   {
//     src: "/images/imageslider/antivirus.jpg",
//     title: "Comprehensive Antivirus & Cybersecurity Solutions",
//     description:
//       "Protect your digital assets with our advanced antivirus solutions that offer real-time scanning, proactive threat detection, firewall protection, and scheduled updates to ensure your systems are always secure from evolving cyber threats and malware attacks.",
//   },
//   {
//     src: "/images/imageslider/cctv installtion.jpg",
//     title: "Intelligent CCTV Installation & Surveillance Systems",
//     description:
//       "Secure your home or workplace with our smart CCTV installation services. We offer customized surveillance setups with high-definition cameras, night vision, remote access via mobile apps, and 24/7 recording to give you complete peace of mind and situational awareness.",
//   },
//   {
//     src: "/images/imageslider/desktop repair.jpg",
//     title: "Reliable Desktop Repair & Hardware Maintenance Services",
//     description:
//       "Our certified technicians provide expert desktop repair services, including diagnostics, motherboard and RAM upgrades, hard disk replacement, software troubleshooting, and complete system cleanups to restore speed, reliability, and performance to your desktop computers.",
//   },
//   {
//     src: "/images/imageslider/laptop repair.jpg",
//     title: "Expert Laptop Repair with On-Demand Service Options",
//     description:
//       "From cracked screens and keyboard issues to battery replacement and system overheating, our laptop repair services are fast, affordable, and backed by technical expertise. We also offer pickup and drop-off options to make your experience as convenient as possible.",
//   },
//   {
//     src: "/images/imageslider/printer1.jpg",
//     title: "End-to-End Printer Setup, Repair & Support Solutions",
//     description:
//       "We provide comprehensive printer support — whether you're dealing with paper jams, ink cartridge problems, wireless configuration, or driver issues. Our team ensures your printing devices are running smoothly, reducing downtime and improving productivity for your home or office.",
//   },
// ];

// export default function ImageSlider() {
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       perView: 1,
//     },
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//   });

//   useEffect(() => {
//     if (!slider) return;

//     intervalRef.current = setInterval(() => {
//       if (slider.current) {
//         slider.current.next();
//       }
//     }, 3000);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [slider]);

//   return (
//     <div ref={sliderRef} className={`keen-slider ${styles.sliderContainer}`}>
//       {images.map((item, i) => (
//         <div key={i} className={`keen-slider__slide ${styles.slide}`}>
//           <img src={item.src} alt={`Slide ${i}`} className={styles.image} />
//           <div
//             className={`${styles.textOverlay} ${
//               currentSlide === i ? styles.animateText : ""
//             }`}
//           >
//             <h2 className={styles.title}>{item.title}</h2>
//             <p className={styles.description}>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../style/ImageSlider.module.css";

const slides = [
  {
    src: "/images/imageslider/antivirus.jpg",
    title: "Antivirus & Cybersecurity Solutions",
    description:
      "Protect your computers and business with reliable antivirus, malware protection, firewall security, and proactive threat detection.",
    label: "SMARTER DIGITAL SECURITY",
  },
  {
    src: "/images/imageslider/cctv installtion.jpg",
    title: "CCTV Installation & Surveillance",
    description:
      "Protect your home and workplace with professional CCTV installation, HD cameras, night vision, and remote monitoring.",
    label: "SECURITY YOU CAN TRUST",
  },
  {
    src: "/images/imageslider/desktop repair.jpg",
    title: "Professional Desktop Repair",
    description:
      "Get dependable computer diagnostics, hardware upgrades, troubleshooting, and maintenance from experienced technicians.",
    label: "RELIABLE TECHNICAL SUPPORT",
  },
  {
    src: "/images/imageslider/laptop repair.jpg",
    title: "Laptop Repair & Maintenance",
    description:
      "From screen replacement to performance issues, we help keep your laptop running smoothly with expert repair services.",
    label: "EXPERT LAPTOP SOLUTIONS",
  },
  {
    src: "/images/imageslider/printer1.jpg",
    title: "Printer Repair & Office Solutions",
    description:
      "Keep your office productive with printer installation, repair, wireless configuration, and dependable technical support.",
    label: "SUPPORT FOR YOUR BUSINESS",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    defaultAnimation: {
      duration: 700,
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        instanceRef.current?.next();
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [instanceRef]);

  return (
    <section
      className={styles.hero}
      aria-label="A2Z IT Solution services"
    >
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {slides.map((slide, index) => (
          <div
            className={`keen-slider__slide ${styles.slide}`}
            key={slide.src}
            aria-hidden={currentSlide !== index}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className={styles.image}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              draggable={false}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>
              <div className={styles.label}>
                <span />
                A2Z IT SOLUTION
              </div>

              <p className={styles.kicker}>{slide.label}</p>

              <h1 className={styles.title}>{slide.title}</h1>

              <p className={styles.description}>
                {slide.description}
              </p>

              <a href="/contact" className={styles.button}>
                Get Expert Support
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={() => instanceRef.current?.prev()}
        aria-label="Previous slide"
      >
        &#8249;
      </button>

      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={() => instanceRef.current?.next()}
        aria-label="Next slide"
      >
        &#8250;
      </button>

      <div className={styles.bottomControls}>
        <div className={styles.dots}>
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.dot} ${
                currentSlide === index ? styles.activeDot : ""
              }`}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
            />
          ))}
        </div>

        <span className={styles.counter}>
          {String(currentSlide + 1).padStart(2, "0")}
          <span> / {String(slides.length).padStart(2, "0")}</span>
        </span>
      </div>
    </section>
  );
}
