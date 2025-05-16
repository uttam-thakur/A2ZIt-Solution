import Image from "next/image";
import styles from "../style/whyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.container}>
      <div className="container mx-auto">
        {/* <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2> */}

        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles.icon}>🔧</span>
              <div>
                <h3 className="font-bold text-xl">10+</h3>
                <p className="text-gray-600">Experienced Staff</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>🏢</span>
              <div>
                <h3 className="font-bold text-xl">2</h3>
                <p className="text-gray-600">Branches Across India</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>👍</span>
              <div>
                <h3 className="font-bold text-xl">1K +</h3>
                <p className="text-gray-600">Customers Serviced</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/why3.webp"
              alt="A2Z IT Solution"
              width={350}
              height={350}
              className={styles.image}
            />
          </div>

          {/* Right Column */}
          <div className={styles.right}>
            <div className={styles.item}>
              <span className={styles.icon}>🏆</span>
              <div>
                <h3 className="font-bold text-xl">2007</h3>
                <p className="text-gray-600">Journey Started</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>🛒</span>
              <div>
                <h3 className="font-bold text-xl">Online/Offline</h3>
                <p className="text-gray-600">Shopping</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>📜</span>
              <div>
                <h3 className="font-bold text-xl">Certified</h3>
                <p className="text-gray-600">Laptop Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
