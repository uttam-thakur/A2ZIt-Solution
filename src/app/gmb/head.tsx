
export default function Head() {
  const title =
    "Google Business Profile Services in Asansol | A2Z IT SOLUTION";

  const description =
    "A2Z IT SOLUTION offers Google Business Profile setup, profile optimization, Google Maps visibility, review management and local SEO services for businesses in Asansol, West Bengal.";

  const canonical =
    "https://www.a2zitsolution.co.in/gmb";

  return (
    <>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonical}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="A2Z IT SOLUTION"
      />

      <meta
        property="og:image"
        content="https://www.a2zitsolution.co.in/images/GMB/GMB1.avif"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />
    </>
  );
}
