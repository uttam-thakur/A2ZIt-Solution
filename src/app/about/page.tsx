<<<<<<< HEAD
import type { Metadata } from "next";
=======
// // pages/about.tsx
// import Image from "next/image";
// import styles from "./About.module.css";
// import Album from "../component/Album";

// const About = () => {
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.profileSection}>
//           <Image
//             src="/images/5.png"
//             alt="Profile Image"
//             width={400}
//             height={400}
//             className={styles.image}
//           />
//           <div className={styles.mission}>
//             <p>
//               At A2Z IT SOLUTION, our vision is to be a leading provider of
//               comprehensive IT solutions, delivering excellence in laptop,
//               desktop, and printer sales, repairs, and AMC services. With years
//               of expertise, we are committed to offering reliable,
//               cost-effective, and innovative solutions tailored for both
//               individual clients and corporate businesses. We strive to enhance
//               productivity and efficiency through expert IT support, proactive
//               maintenance, and cutting-edge technology solutions. Our mission is
//               to build long-term partnerships by ensuring seamless IT
//               operations, minimizing downtime, and delivering unparalleled
//               customer satisfaction. Through our dedication to quality and
//               innovation, we aim to empower businesses and individuals with
//               robust IT infrastructure, supporting their growth and success in
//               the ever-evolving digital world.
//             </p>
//             <br></br>
//             <p className={styles.name}>
//               {/* Jitendra Thakur &amp; Birendra Thakur{" "} */}
//               Jitendra Thakur 
//             </p>
//             <p className={styles.role}>Founder &amp; CEO - A2Z IT SOLUTION</p>
//           </div>
//         </div>
//         <div className={styles.description}>
//           <p>
//             {" "}
//             Jitendra, the visionary Founder and CEO of A2Z IT SOLUTION, has been
//             instrumental in redefining IT services and solutions, catering to
//             both individual clients and corporate enterprises. Under his
//             leadership, A2Z IT SOLUTION has evolved into a trusted name in
//             laptop, desktop, and printer sales, repair services, and
//             comprehensive AMC solutions. His unwavering commitment to quality,
//             reliability, and technological advancement has positioned the
//             company as a leader in the IT industry.
//           </p>{" "}
//           <p>
//             With a strong background in engineering and project management,
//             Jitendra has successfully led A2Z IT SOLUTION in delivering
//             cutting-edge IT infrastructure solutions to a diverse clientele. His
//             expertise in strategic planning, operational efficiency, and
//             client-focused services ensures that every project meets the highest
//             standards, minimizing downtime and optimizing productivity for
//             businesses.
//           </p>{" "}
//           <p>
//             Beyond technical expertise, Birendra’s leadership is defined by
//             customer-centric innovation and strong industry relationships. His
//             vision extends to creating long-term partnerships with businesses,
//             offering tailored IT solutions that drive growth, security, and
//             efficiency. Through proactive maintenance, expert support, and
//             seamless IT integration, A2Z IT SOLUTION continues to empower
//             businesses and individuals with reliable, future-ready technology
//             solutions.
//           </p>{" "}
//           <p>
//             Driven by excellence and innovation, Jitendra remains committed to
//             advancing A2Z IT SOLUTION as a pioneer in IT services, ensuring that
//             businesses have access to the best technology support for sustained
//             success in a rapidly evolving digital landscape.
//           </p>
//         </div>
//       </div>
//       <Album />
//     </>
//   );
// };

// export default About;




import Head from "next/head";
>>>>>>> cef7596624ce830dc5ea8ac0f070140598cbb1ca
import Image from "next/image";
import styles from "./About.module.css";
import Album from "../component/Album";

<<<<<<< HEAD
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
=======
const About = () => {
  const siteUrl = "https://www.a2zitsolution.co.in";

  return (
    <>
      <Head>
        <title>
          About A2Z IT SOLUTION | IT Services & Support in Asansol
        </title>

        <meta
          name="description"
          content="Learn about A2Z IT SOLUTION, an IT service provider in Asansol, West Bengal, offering laptop and desktop repair, printer services, CCTV solutions, website development, networking and IT maintenance."
        />

        <meta
          name="keywords"
          content="A2Z IT SOLUTION, about A2Z IT SOLUTION, IT services in Asansol, computer repair Asansol, laptop repair Asansol, printer repair Asansol, CCTV installation Asansol, website development Asansol, IT AMC services"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={`${siteUrl}/about`} />

        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="About A2Z IT SOLUTION | Your IT Support Partner in Asansol"
        />
        <meta
          property="og:description"
          content="Discover A2Z IT SOLUTION's commitment to dependable IT support, computer and printer services, CCTV solutions, website development and business technology support."
        />
        <meta
          property="og:url"
          content={`${siteUrl}/about`}
        />
        <meta
          property="og:site_name"
          content="A2Z IT SOLUTION"
        />
        <meta
          property="og:image"
          content={`${siteUrl}/images/5.png`}
        />
        <meta
          property="og:image:alt"
          content="A2Z IT SOLUTION team and company profile"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="About A2Z IT SOLUTION | IT Services in Asansol"
        />
        <meta
          name="twitter:description"
          content="Learn about our IT support, computer repair, CCTV, printer, website development and maintenance services."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/images/5.png`}
        />
      </Head>

>>>>>>> cef7596624ce830dc5ea8ac0f070140598cbb1ca
      <main className={styles.container}>
        <section
          className={styles.profileSection}
          aria-labelledby="about-heading"
        >
          <Image
<<<<<<< HEAD
            src="/images/about-profile.webp"
=======
            src="/images/5.png"
>>>>>>> cef7596624ce830dc5ea8ac0f070140598cbb1ca
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
<<<<<<< HEAD
}
=======
};

export default About;

>>>>>>> cef7596624ce830dc5ea8ac0f070140598cbb1ca
