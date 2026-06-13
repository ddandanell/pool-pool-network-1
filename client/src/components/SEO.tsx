import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SITE_URL = "https://poolcleaningbali.online";
const DEFAULT_TITLE = "EcoPool Bali | Premium Eco-Friendly Pool Maintenance";
const DEFAULT_DESC =
  "Bali's premier low-chlorine, eco-responsible pool maintenance service. Specialized in saltwater and mineral systems for villas, resorts, and private estates across Canggu, Seminyak, Uluwati & Ubud.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EcoPool Bali",
  image: `${SITE_URL}/opengraph.jpg`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+6282323011656",
  email: "hello@ecopoolbali.com",
  description:
    "Premium eco-friendly pool cleaning and maintenance service in Bali. Low-chlorine enzyme treatments, saltwater specialists, and villa pool care.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bali",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.6500,
    longitude: 115.2167,
  },
  sameAs: [
    "https://www.instagram.com/ecopoolbali/",
  ],
  areaServed: [
    { "@type": "City", name: "Canggu" },
    { "@type": "City", name: "Seminyak" },
    { "@type": "City", name: "Uluwatu" },
    { "@type": "City", name: "Jimbaran" },
    { "@type": "City", name: "Ubud" },
    { "@type": "City", name: "Sanur" },
    { "@type": "City", name: "Nusa Dua" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
};

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | EcoPool Bali`
    : DEFAULT_TITLE;

  const pageDesc = description ?? DEFAULT_DESC;
  const pageUrl = canonical ?? SITE_URL;
  const image = ogImage ?? `${SITE_URL}/opengraph.jpg`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={pageUrl} />

      {/* OpenGraph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_ID" />
      <meta property="og:site_name" content="EcoPool Bali" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
