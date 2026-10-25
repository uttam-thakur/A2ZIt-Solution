
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import styles from "../blog.module.css";

const siteUrl =
<<<<<<< HEAD
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.a2zitsolution.co.in";
=======
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.a2zitsolution.com";
>>>>>>> cef7596624ce830dc5ea8ac0f070140598cbb1ca

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return { title: "Article Not Found | A2Z IT SOLUTION" };

  return {
    title: `${post.title} | A2Z IT SOLUTION`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [
        {
          url: `${siteUrl}${post.image}`,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${siteUrl}${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "A2Z IT SOLUTION",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "A2Z IT SOLUTION",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className={styles.articlePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>{post.category}</span>
      </nav>

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <span className={styles.articleCategory}>{post.category}</span>
          <h1>{post.title}</h1>
          <p className={styles.articleIntro}>{post.description}</p>

          <div className={styles.articleMeta}>
            <span>By A2Z IT SOLUTION</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <Image
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={675}
          priority
          className={styles.articleImage}
          sizes="(max-width: 900px) 100vw, 900px"
        />

        <div className={styles.articleContent}>
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className={styles.articleCta}>
            <h2>Need IT Support in Asansol?</h2>
            <p>
              Contact A2Z IT SOLUTION to discuss computer repair, CCTV,
              website development, or other IT service requirements.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Our Team <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </article>

      <section className={styles.relatedSection}>
        <h2>More from the A2Z Blog</h2>
        <div className={styles.relatedGrid}>
          {relatedPosts.map((item) => (
            <Link
              href={`/blog/${item.slug}`}
              key={item.slug}
              className={styles.relatedCard}
            >
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <span className={styles.readMore}>Read Article →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
