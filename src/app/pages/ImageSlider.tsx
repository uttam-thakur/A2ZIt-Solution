
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
      duration: 500,
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
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    // Avoid automatic movement for visitors who prefer reduced motion.
    if (mediaQuery.matches) return;

    const timer = window.setInterval(() => {
      if (
        !document.hidden &&
        document.visibilityState === "visible"
      ) {
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
      <div
        ref={sliderRef}
        className={`keen-slider ${styles.slider}`}
      >
        {slides.map((slide, index) => (
          <div
            className={`keen-slider__slide ${styles.slide}`}
            key={slide.src}
            aria-hidden={currentSlide !== index}
            inert={currentSlide !== index}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              width={1920}
              height={1080}
              sizes="100vw"
              className={styles.image}
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              quality={75}
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
              aria-current={
                currentSlide === index ? "true" : undefined
              }
            />
          ))}
        </div>

        <span className={styles.counter} aria-live="off">
          {String(currentSlide + 1).padStart(2, "0")}
          <span> / {String(slides.length).padStart(2, "0")}</span>
        </span>
      </div>
    </section>
  );
}