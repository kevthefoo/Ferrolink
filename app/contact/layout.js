import { metadata as contactMetadata } from "./metadata";
import { localBusinessSchema, generateFAQSchema } from "@/lib/structured-data";
import { contactFAQs } from "./faq-data";

export const metadata = contactMetadata;

export default function ContactLayout({ children }) {
  const faqSchema = generateFAQSchema(contactFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
