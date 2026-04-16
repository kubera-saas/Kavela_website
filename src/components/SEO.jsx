import { Helmet } from "react-helmet-async";

const SITE = "https://kavela.co";
const SITE_NAME = "Kavela";
const DEFAULT_IMG = `${SITE}/LogoKavela.png`;

export default function SEO({
  title,
  description,
  path = "/",
  image,
  type = "website",
  article,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE}${path}`;
  const img = image || DEFAULT_IMG;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* Structured data for articles */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            image: article.image,
            datePublished: article.date,
            author: {
              "@type": "Organization",
              name: "Kavela",
              url: SITE,
            },
            publisher: {
              "@type": "Organization",
              name: "Kavela",
              url: SITE,
              logo: { "@type": "ImageObject", url: DEFAULT_IMG },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          })}
        </script>
      )}
    </Helmet>
  );
}
