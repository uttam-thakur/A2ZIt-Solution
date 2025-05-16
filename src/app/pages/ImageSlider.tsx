"use client";

import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../style/ImageSlider.module.css";
const images = [
  {
    src: "/images/imageslider/antivirus.jpg",
    title: "Comprehensive Antivirus & Cybersecurity Solutions",
    description:
      "Protect your digital assets with our advanced antivirus solutions that offer real-time scanning, proactive threat detection, firewall protection, and scheduled updates to ensure your systems are always secure from evolving cyber threats and malware attacks.",
  },
  {
    src: "/images/imageslider/cctv installtion.jpg",
    title: "Intelligent CCTV Installation & Surveillance Systems",
    description:
      "Secure your home or workplace with our smart CCTV installation services. We offer customized surveillance setups with high-definition cameras, night vision, remote access via mobile apps, and 24/7 recording to give you complete peace of mind and situational awareness.",
  },
  {
    src: "/images/imageslider/desktop repair.jpg",
    title: "Reliable Desktop Repair & Hardware Maintenance Services",
    description:
      "Our certified technicians provide expert desktop repair services, including diagnostics, motherboard and RAM upgrades, hard disk replacement, software troubleshooting, and complete system cleanups to restore speed, reliability, and performance to your desktop computers.",
  },
  {
    src: "/images/imageslider/laptop repair.jpg",
    title: "Expert Laptop Repair with On-Demand Service Options",
    description:
      "From cracked screens and keyboard issues to battery replacement and system overheating, our laptop repair services are fast, affordable, and backed by technical expertise. We also offer pickup and drop-off options to make your experience as convenient as possible.",
  },
  {
    src: "/images/imageslider/printer1.jpg",
    title: "End-to-End Printer Setup, Repair & Support Solutions",
    description:
      "We provide comprehensive printer support — whether you're dealing with paper jams, ink cartridge problems, wireless configuration, or driver issues. Our team ensures your printing devices are running smoothly, reducing downtime and improving productivity for your home or office.",
  },
];

export default function ImageSlider() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slider]);

  return (
    <div ref={sliderRef} className={`keen-slider ${styles.sliderContainer}`}>
      {images.map((item, i) => (
        <div key={i} className={`keen-slider__slide ${styles.slide}`}>
          <img src={item.src} alt={`Slide ${i}`} className={styles.image} />
          <div
            className={`${styles.textOverlay} ${
              currentSlide === i ? styles.animateText : ""
            }`}
          >
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
