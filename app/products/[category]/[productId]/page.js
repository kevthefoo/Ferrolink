import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, categories, productsData } from "@/data/realProducts";
import {
  generateProductSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

export async function generateMetadata({ params }) {
  const { category, productId } = await params;
  const product = getProductById(category, productId);
  const categoryInfo = categories[category];

  if (!product) {
    return {
      title: "Product Not Found - FerroLink Tools",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${categoryInfo?.name || "Professional Tools"} | FerroLink Tools`,
    description: `${product.shortDescription} ${product.description.substring(0, 100)}... Professional-grade ${categoryInfo?.name?.toLowerCase() || "tools"} from FerroLink Tools.`,
    keywords: `${product.name}, ${categoryInfo?.name}, ${category}, professional tools, industrial tools, FerroLink`,
    openGraph: {
      title: `${product.name} - Professional ${categoryInfo?.name || "Tools"}`,
      description: product.shortDescription,
      url: `https://ferrolink.io/products/${category}/${productId}`,
      siteName: "FerroLink Tools",
      images: product.mainImage
        ? [{ url: product.mainImage, width: 800, height: 600, alt: product.name }]
        : [],
      locale: "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://ferrolink.io/products/${category}/${productId}`,
    },
  };
}

export async function generateStaticParams() {
  const paths = [];
  Object.keys(productsData).forEach((categoryId) => {
    Object.keys(productsData[categoryId]).forEach((productId) => {
      paths.push({ category: categoryId, productId });
    });
  });
  return paths;
}

export default async function ProductDetail({ params }) {
  const { category, productId } = await params;
  const product = getProductById(category, productId);
  const categoryInfo = categories[category];

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display mb-4 text-5xl text-[#E6EDF3]">
            PRODUCT NOT FOUND
          </h1>
          <p className="mb-8 text-[#656D76]">
            The product you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
          <Link
            href="/products"
            className="btn-copper rounded-sm px-8 py-3 text-[11px] tracking-[0.15em] uppercase"
          >
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const productSchema = generateProductSchema(
    product,
    categoryInfo,
    category,
    productId,
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://ferrolink.io" },
    { name: "Products", url: "https://ferrolink.io/products" },
    {
      name: categoryInfo?.name || category,
      url: `https://ferrolink.io/category/${category}`,
    },
    {
      name: product.name,
      url: `https://ferrolink.io/products/${category}/${productId}`,
    },
  ]);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header currentPage="products" />

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-10 flex flex-wrap items-center gap-1.5 text-xs text-[#656D76] sm:gap-2">
          <Link href="/" className="transition-colors hover:text-[#E8530E]">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="transition-colors hover:text-[#E8530E]">
            Products
          </Link>
          <span>/</span>
          <Link
            href={`/category/${category}`}
            className="transition-colors hover:text-[#E8530E]"
          >
            {categoryInfo?.name || category}
          </Link>
          <span>/</span>
          <span className="text-[#E8530E]">{product.name}</span>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Image + Specs */}
          <div className="space-y-6">
            {/* Main Product Image */}
            {product.mainImage && (
              <div className="overflow-hidden rounded-sm border border-[#2D333B] bg-[#161D26] p-4">
                <Image
                  src={product.mainImage}
                  alt={`${product.name} - Professional ${categoryInfo?.name?.toLowerCase() || "tool"} by FerroLink`}
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-64 w-full rounded-sm object-cover sm:h-72 md:h-80"
                  priority
                />
              </div>
            )}

            {/* Technical Specifications */}
            <div className="rounded-sm border border-[#2D333B] bg-[#161D26] p-6">
              <h3 className="font-display mb-1 text-xl text-[#E6EDF3]">
                TECHNICAL SPECIFICATIONS
              </h3>
              <div className="copper-line-left mb-6 w-10" />
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col gap-1 border-b border-[#2D333B] pb-3 sm:flex-row sm:justify-between"
                  >
                    <span className="text-xs text-[#656D76]">{key}</span>
                    <span className="text-sm font-medium text-[#E6EDF3] sm:text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <span className="tracking-luxury mb-3 block text-[10px] font-semibold text-[#E8530E] uppercase">
                {product.categoryName}
              </span>
              <h1 className="font-display mb-2 text-3xl text-[#E6EDF3] sm:text-4xl md:text-5xl">
                {product.name.toUpperCase()}
              </h1>
              <div className="copper-line-left mb-6 w-16" />
              <p className="text-sm leading-relaxed text-[#9BA4AE]">
                {product.shortDescription}
              </p>
            </div>

            {/* Description */}
            <div className="rounded-sm border border-[#2D333B] bg-[#161D26] p-6">
              <h3 className="font-display mb-1 text-lg text-[#E6EDF3]">
                DESCRIPTION
              </h3>
              <div className="copper-line-left mb-4 w-8" />
              <p className="text-sm leading-relaxed text-[#656D76]">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="rounded-sm border border-[#2D333B] bg-[#161D26] p-6">
              <h3 className="font-display mb-1 text-lg text-[#E6EDF3]">
                KEY FEATURES
              </h3>
              <div className="copper-line-left mb-4 w-8" />
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#9BA4AE]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E8530E]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="rounded-sm border border-[#2D333B] bg-[#161D26] p-6">
              <h3 className="font-display mb-1 text-lg text-[#E6EDF3]">
                APPLICATIONS
              </h3>
              <div className="copper-line-left mb-4 w-8" />
              <ul className="space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#9BA4AE]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#656D76]" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-copper block rounded-sm py-4 text-center text-[12px] tracking-[0.15em] uppercase"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* Related Products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <section className="mb-16">
            <div className="copper-line mb-12" />
            <h3 className="font-display mb-8 text-center text-2xl text-[#E6EDF3]">
              RELATED PRODUCTS
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {product.relatedProducts.slice(0, 3).map((relatedId) => {
                const relatedProduct = getProductById(category, relatedId);
                if (!relatedProduct) return null;

                return (
                  <Link
                    key={relatedId}
                    href={`/products/${category}/${relatedId}`}
                    className="card-dark group overflow-hidden rounded-sm"
                  >
                    {relatedProduct.mainImage && (
                      <div className="h-48 w-full overflow-hidden bg-[#161D26]">
                        <Image
                          src={relatedProduct.mainImage}
                          alt={`${relatedProduct.name} - Related professional tool by FerroLink`}
                          width={200}
                          height={128}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h4 className="font-display mb-2 line-clamp-2 text-lg text-[#E6EDF3] transition-colors group-hover:text-[#E8530E]">
                        {relatedProduct.name.toUpperCase()}
                      </h4>
                      <p className="line-clamp-2 text-xs leading-relaxed text-[#656D76]">
                        {relatedProduct.shortDescription}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
