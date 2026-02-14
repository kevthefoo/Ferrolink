// JSON-LD Structured Data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FerroLink Tools",
  url: "https://ferrolink.io",
  logo: "https://ferrolink.io/assets/logo/ferrolink-logo.png",
  description:
    "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 38, Sec. 4, Fu 3rd Rd., Fuxing Township",
    addressLocality: "Changhua County",
    postalCode: "506014",
    addressCountry: "TW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+886-47766093",
    email: "support@ferrolink.io",
    contactType: "sales",
    availableLanguage: ["English", "Chinese"],
  },
  sameAs: [
    "https://www.linkedin.com/company/ferrolink-tools",
    "https://www.facebook.com/ferrolinktools",
  ],
  foundingDate: "1998",
  numberOfEmployees: "50-200",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FerroLink Tools",
  url: "https://ferrolink.io",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://ferrolink.io/products?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const manufacturerSchema = {
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  name: "FerroLink Tools",
  brand: {
    "@type": "Brand",
    name: "FerroLink",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      category: "Hand Tools",
      name: "Professional Hand Tools & CNC Equipment",
    },
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FerroLink Tools",
  image: "https://ferrolink.io/assets/logo/ferrolink-logo.png",
  url: "https://ferrolink.io",
  telephone: "+886-47766093",
  email: "support@ferrolink.io",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 38, Sec. 4, Fu 3rd Rd., Fuxing Township",
    addressLocality: "Changhua County",
    postalCode: "506014",
    addressCountry: "TW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.0333,
    longitude: 120.3279,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.linkedin.com/company/ferrolink-tools",
    "https://www.facebook.com/ferrolinktools",
  ],
};

export function generateProductSchema(
  product,
  category,
  categoryId,
  productId,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "FerroLink",
    },
    manufacturer: {
      "@type": "Organization",
      name: "FerroLink Tools",
    },
    category: category.name,
    url: `https://ferrolink.io/products/${categoryId}/${productId}`,
    image: product.mainImage
      ? [`https://ferrolink.io${product.mainImage}`]
      : [],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "FerroLink Tools",
      },
    },
    additionalProperty: Object.entries(product.specifications).map(
      ([key, value]) => ({
        "@type": "PropertyValue",
        name: key,
        value: value,
      }),
    ),
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image
      ? `https://ferrolink.io${article.image}`
      : undefined,
    datePublished: article.date,
    dateModified: article.modifiedDate || article.date,
    author: {
      "@type": "Organization",
      name: "FerroLink Tools",
      url: "https://ferrolink.io",
    },
    publisher: {
      "@type": "Organization",
      name: "FerroLink Tools",
      logo: {
        "@type": "ImageObject",
        url: "https://ferrolink.io/assets/logo/ferrolink-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ferrolink.io/blog/${article.slug}`,
    },
  };
}
