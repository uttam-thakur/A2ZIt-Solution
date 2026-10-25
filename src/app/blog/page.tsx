
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";
import styles from "./blog.module.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.a2zitsolution.co.in";

export const metadata: Metadata = {
  title: "IT Tips, Computer Repair & Local SEO Blog | A2Z IT SOLUTION",
  description:
    "Read practical IT tips, laptop and computer repair guides, CCTV security advice, website development insights, and local SEO guidance from A2Z IT SOLUTION in Asansol.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "IT Tips, Computer Repair & Local SEO Blog | A2Z IT SOLUTION",
    description:
      "Helpful technology guides and digital business insights for Asansol homes, professionals, and businesses.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

const categories = [
  "All",
  ...Array.from(new Set(posts.map((post) => post.category))),
];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "A2Z IT SOLUTION Blog",
    description: metadata.description,
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "A2Z IT SOLUTION",
      url: siteUrl,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      image: `${siteUrl}${post.image}`,
    })),
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <span className={styles.eyebrow}>THE A2Z KNOWLEDGE HUB</span>
        <h1>Technology Insights for Smarter Decisions</h1>
        <p>
          Practical IT advice, computer troubleshooting guides, CCTV
          security tips, website development insights, and local SEO
          resources for individuals and businesses in Asansol.
        </p>
        <div className={styles.heroTags}>
          <span>IT Support</span>
          <span>Cybersecurity</span>
          <span>Web Development</span>
          <span>Local SEO</span>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>LATEST ARTICLES</span>
            <h2>Explore Our Blog</h2>
            <p>
              Helpful information to maintain your technology, protect
              your devices, and grow your business online.
            </p>
          </div>
          <span className={styles.articleCount}>
            {posts.length} articles
          </span>
        </div>

        <div className={styles.categories}>
          {categories.map((category, index) => (
            <a
              key={category}
              href={index === 0 ? "#articles" : `#category-${index}`}
              className={index === 0 ? styles.categoryActive : styles.category}
            >
              {category}
            </a>
          ))}
        </div>

        <div id="articles" className={styles.grid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <Link
                href={`/blog/${post.slug}`}
                className={styles.imageLink}
                aria-label={`Read ${post.title}`}
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={720}
                  height={440}
                  className={styles.cardImage}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              </Link>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p>{post.description}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.readMore}
                >
                  Read Article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <span className={styles.sectionEyebrow}>NEED PROFESSIONAL HELP?</span>
        <h2>Looking for Reliable IT Support in Asansol?</h2>
        <p>
          Whether you need computer repair, CCTV installation, a business
          website, or help with your online presence, contact A2Z IT SOLUTION
          to discuss your requirements.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact A2Z IT SOLUTION <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
