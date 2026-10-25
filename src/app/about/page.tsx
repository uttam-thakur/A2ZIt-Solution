import type { Metadata } from "next";
import Image from "next/image";
import styles from "./About.module.css";
import Album from "../component/Album";

export const metadata: Metadata = {
  title: "About A2Z IT SOLUTION | IT Support in Asansol",
  description: "Learn about A2Z IT SOLUTION in Asansol, West Bengal, providing computer and laptop repair, printer services, CCTV installation, networking, website development and IT maintenance.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About A2Z IT SOLUTION | IT Support in Asansol",
    description: "Meet A2Z IT SOLUTION and learn about our professional IT support and technology services in Asansol, West Bengal.",
    url: "/about",
    images: [{ url: "/images/5.png", alt: "A2Z IT SOLUTION company profile" }],
  },
  twitter: { card: "summary_large_image", title: "About A2Z IT SOLUTION | IT Support in Asansol", description: "Learn about our IT support and technology services in Asansol.", images: ["/images/5.png"] },
};

export default function About() {
  return (
    <>
      <main className={styles.container}>
        <section
          className={styles.profileSection}
          aria-labelledby="about-heading"
        >
          <Image
            src="/images/about-profile.webp"
            alt="A2Z IT SOLUTION company profile"
            width={400}
            height={400}
            className={styles.image}
            priority
          />

          <div className={styles.mission}>
            <h1 id="about-heading">
              About A2Z IT SOLUTION
            </h1>

            <h2>
              Our Vision and Mission
            </h2>

            <p>
              At A2Z IT SOLUTION, our vision is to provide dependable,
              professional IT solutions that help individuals and businesses
              use technology with confidence. Based in Asansol, West Bengal,
              we support customers with computer and laptop repair, desktop
              and printer services, CCTV solutions, website development,
              networking, and Annual Maintenance Contract (AMC) services.
            </p>

            <p>
              Our mission is to deliver practical technology solutions
              tailored to each customer&apos;s requirements. Through technical
              support, preventive maintenance, troubleshooting, and
              customer-focused service, we aim to help reduce downtime,
              improve productivity, and keep essential IT systems running
              reliably.
            </p>

            <p>
              We believe that reliable IT support begins with understanding
              the customer&apos;s needs, recommending suitable solutions, and
              providing clear communication throughout the service process.
              We strive to build lasting relationships with individuals,
              offices, and businesses through professional service and
              continuous improvement.
            </p>

            <p className={styles.name}>
              Jitendra Thakur
            </p>

            <p className={styles.role}>
              Founder &amp; CEO — A2Z IT SOLUTION
            </p>
          </div>
        </section>

        <section
          className={styles.description}
          aria-labelledby="company-overview"
        >
          <h2 id="company-overview">
            Professional IT Services for Businesses and Individuals
          </h2>

          <p>
            A2Z IT SOLUTION provides technology support designed around
            everyday computing and business requirements. Whether you need
            assistance with a laptop, desktop computer, printer, CCTV
            system, or business website, we help you explore practical
            solutions based on your needs.
          </p>

          <h2>
            Computer, Laptop and Printer Repair Services
          </h2>

          <p>
            Computers and printers play an important role in daily
            operations. Our services include computer and laptop
            troubleshooting, hardware diagnostics, repair support, printer
            servicing, software installation, and related technical
            assistance. We aim to help customers maintain reliable equipment
            and address technical issues efficiently.
          </p>

          <h2>
            CCTV, Networking and IT Maintenance
          </h2>

          <p>
            We also support CCTV surveillance requirements, networking
            setups, and IT maintenance for homes, offices, and commercial
            environments. Our maintenance services can help customers
            monitor equipment condition, address technical problems, and
            plan ongoing IT support according to their requirements.
          </p>

          <h2>
            Website Development and Business Technology
          </h2>

          <p>
            A professional online presence helps businesses communicate
            their services and connect with customers. A2Z IT SOLUTION
            offers website development solutions focused on responsive
            design, usability, business requirements, and a clear online
            presentation. We also help customers explore suitable software
            and technology options for their operations.
          </p>

          <h2>
            Our Commitment to Customer Service
          </h2>

          <p>
            We understand that technology problems can interrupt work and
            affect productivity. Our approach focuses on understanding
            each requirement, explaining suitable options, and providing
            practical technical support. We aim to build long-term customer
            relationships through dependable service, transparent
            communication, and solutions that fit each customer&apos;s needs.
          </p>

          <h2>
            Your Local IT Support Partner in Asansol
          </h2>

          <p>
            If you are looking for IT support in Asansol, West Bengal,
            contact A2Z IT SOLUTION to discuss your computer repair, printer
            servicing, CCTV, networking, website development, or maintenance
            requirements. We will help you identify a suitable next step
            based on your needs.
          </p>
        </section>
      </main>

      <section aria-label="A2Z IT SOLUTION gallery">
        <Album />
      </section>
    </>
  );
}
