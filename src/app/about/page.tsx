// pages/about.tsx
import Image from "next/image";
import styles from "./About.module.css";
import Album from "../component/Album";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <Image
            src="/images/5.png"
            alt="Profile Image"
            width={400}
            height={400}
            className={styles.image}
          />
          <div className={styles.mission}>
            <p>
              At A2Z IT SOLUTION, our vision is to be a leading provider of
              comprehensive IT solutions, delivering excellence in laptop,
              desktop, and printer sales, repairs, and AMC services. With years
              of expertise, we are committed to offering reliable,
              cost-effective, and innovative solutions tailored for both
              individual clients and corporate businesses. We strive to enhance
              productivity and efficiency through expert IT support, proactive
              maintenance, and cutting-edge technology solutions. Our mission is
              to build long-term partnerships by ensuring seamless IT
              operations, minimizing downtime, and delivering unparalleled
              customer satisfaction. Through our dedication to quality and
              innovation, we aim to empower businesses and individuals with
              robust IT infrastructure, supporting their growth and success in
              the ever-evolving digital world.
            </p>
            <br></br>
            <p className={styles.name}>
              {/* Jitendra Thakur &amp; Birendra Thakur{" "} */}
              Jitendra Thakur 
            </p>
            <p className={styles.role}>Founder &amp; CEO - A2Z IT SOLUTION</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            {" "}
            Jitendra, the visionary Founder and CEO of A2Z IT SOLUTION, has been
            instrumental in redefining IT services and solutions, catering to
            both individual clients and corporate enterprises. Under his
            leadership, A2Z IT SOLUTION has evolved into a trusted name in
            laptop, desktop, and printer sales, repair services, and
            comprehensive AMC solutions. His unwavering commitment to quality,
            reliability, and technological advancement has positioned the
            company as a leader in the IT industry.
          </p>{" "}
          <p>
            With a strong background in engineering and project management,
            Jitendra has successfully led A2Z IT SOLUTION in delivering
            cutting-edge IT infrastructure solutions to a diverse clientele. His
            expertise in strategic planning, operational efficiency, and
            client-focused services ensures that every project meets the highest
            standards, minimizing downtime and optimizing productivity for
            businesses.
          </p>{" "}
          <p>
            Beyond technical expertise, Birendra’s leadership is defined by
            customer-centric innovation and strong industry relationships. His
            vision extends to creating long-term partnerships with businesses,
            offering tailored IT solutions that drive growth, security, and
            efficiency. Through proactive maintenance, expert support, and
            seamless IT integration, A2Z IT SOLUTION continues to empower
            businesses and individuals with reliable, future-ready technology
            solutions.
          </p>{" "}
          <p>
            Driven by excellence and innovation, Jitendra remains committed to
            advancing A2Z IT SOLUTION as a pioneer in IT services, ensuring that
            businesses have access to the best technology support for sustained
            success in a rapidly evolving digital landscape.
          </p>
        </div>
      </div>
      <Album />
    </>
  );
};

export default About;
