import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  categories,
  getFeaturedProducts,
  getProductsByCategory,
} from "../../data/realProducts";

export const metadata = {
  title: "Professional Hand Tools & CNC Equipment - FerroLink Products Catalog",
  description:
    "Browse our extensive collection of professional-grade hand tools, CNC equipment, hammers, axes, garden tools, and precision instruments. Featured products from industry-leading manufacturer.",
  keywords:
    "professional hand tools, CNC tools catalog, industrial hammers, precision axes, garden tools, tool handles, professional tools catalog, FerroLink products",
  openGraph: {
    title:
      "Professional Hand Tools & CNC Equipment - FerroLink Products Catalog",
    description:
      "Browse our extensive collection of professional-grade hand tools, CNC equipment, and precision instruments.",
    url: "https://ferrolink.io/products",
    siteName: "FerroLink Tools",
    images: [
      {
        url: "/assets/products/featured-tools-collection.jpg",
        width: 1200,
        height: 630,
        alt: "FerroLink Featured Tools Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Hand Tools & CNC Equipment - FerroLink Products",
    description:
      "Browse our extensive collection of professional-grade hand tools and CNC equipment.",
    images: ["/assets/products/featured-tools-collection.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ferrolink.io/products",
  },
};

export default function Products() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Header currentPage="products" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background pattern */}
        <div className="grid-pattern absolute inset-0 opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#E8530E]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="tracking-luxury mb-4 text-[10px] font-semibold text-[#E8530E] uppercase">
              Forged for Professionals
            </p>
            <h1 className="font-display mb-6 text-5xl text-[#E6EDF3] sm:text-6xl lg:text-7xl">
              FEATURED PROFESSIONAL TOOLS
            </h1>
            <div className="copper-line mx-auto mb-8 w-24" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#9BA4AE]">
              Discover our most popular and award-winning professional tools.
              These industry-leading products represent the pinnacle of
              engineering excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="relative py-20">
        <div className="crosshatch absolute inset-0 opacity-[0.02]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="tracking-luxury mb-3 text-[10px] font-semibold text-[#E8530E] uppercase">
              Product Lines
            </p>
            <h2 className="font-display mb-4 text-3xl text-[#E6EDF3] sm:text-4xl">
              BROWSE BY CATEGORY
            </h2>
            <p className="mx-auto max-w-2xl text-[#656D76]">
              Explore our complete product lines organized by application and
              tool type
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {Object.entries(categories).map(([categoryId, category]) => {
              const categoryProducts = getProductsByCategory(categoryId);
              const productCount = Object.keys(categoryProducts).length;

              return (
                <Link
                  key={categoryId}
                  href={`/category/${categoryId}`}
                  className="card-dark group rounded-sm border border-[#2D333B] p-6 text-center transition-all duration-500 hover:border-[#E8530E]/40"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-sm border border-[#2D333B] bg-[#161D26] transition-all duration-500 group-hover:border-[#E8530E]/30 group-hover:shadow-[0_0_20px_rgba(200,121,65,0.1)]">
                    <span className="text-2xl transition-transform duration-500 group-hover:scale-110">
                      {category.emoji}
                    </span>
                  </div>
                  <h3 className="font-display mb-2 text-lg text-[#E6EDF3] transition-colors duration-300 group-hover:text-[#E8530E]">
                    {category.name}
                  </h3>
                  <p className="tracking-luxury mb-4 text-[10px] font-semibold text-[#656D76] uppercase">
                    {productCount} Products
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-[#E8530E] uppercase transition-all duration-300 group-hover:gap-2">
                    View All
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2D333B] to-transparent" />
      </div>

      {/* Featured Products Grid */}
      <section className="relative py-20">
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="tracking-luxury mb-3 text-[10px] font-semibold text-[#E8530E] uppercase">
              Bestsellers
            </p>
            <h2 className="font-display mb-4 text-3xl text-[#E6EDF3] sm:text-4xl">
              OUR MOST POPULAR TOOLS
            </h2>
            <p className="mx-auto max-w-2xl text-[#656D76]">
              Top-rated tools chosen by professionals worldwide for their
              exceptional performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={`${product.category}-${product.id}`}
                href={`/products/${product.category}/${product.id}`}
                className="card-dark group relative rounded-sm border border-[#2D333B] transition-all duration-500 hover:border-[#E8530E]/30"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="tracking-luxury rounded-sm bg-[#E8530E] px-2.5 py-1 text-[9px] font-bold text-[#0B0F14] uppercase">
                    Featured
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative h-52 w-full overflow-hidden bg-[#161D26]">
                  {product.mainImage ? (
                    <Image
                      src={product.mainImage}
                      alt={`${product.name} - Professional ${product.categoryName?.toLowerCase() || "tool"} by FerroLink`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg
                        className="h-12 w-12 text-[#2D333B]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="tracking-luxury rounded-sm border border-[#2D333B] bg-[#1C2430] px-2.5 py-1 text-[9px] font-semibold text-[#E8530E] uppercase">
                      {product.categoryName}
                    </span>
                  </div>

                  <h3 className="font-display mb-2 line-clamp-2 min-h-[3.2rem] text-lg text-[#E6EDF3] transition-colors duration-300 group-hover:text-[#E8530E]">
                    {product.name}
                  </h3>

                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#656D76]">
                    {product.shortDescription}
                  </p>

                  {/* View link */}
                  <div className="flex items-center border-t border-[#2D333B] pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#E8530E] uppercase transition-all duration-300 group-hover:gap-3">
                      View Details
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2D333B] to-transparent" />
      </div>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[#111820]" />
        <div className="crosshatch absolute inset-0 opacity-[0.03]" />
        <div className="forge-glow absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="tracking-luxury mb-4 text-[10px] font-semibold text-[#E8530E] uppercase">
            Custom Engineering
          </p>
          <h2 className="font-display mb-6 text-3xl text-[#E6EDF3] sm:text-4xl lg:text-5xl">
            NEED A CUSTOM SOLUTION?
          </h2>
          <div className="copper-line mx-auto mb-8 w-16" />
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#9BA4AE]">
            Can&apos;t find exactly what you&apos;re looking for? Our
            engineering team specializes in creating custom industrial tools
            tailored to your specific requirements and applications.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-copper rounded-sm px-8 py-3.5 text-sm font-semibold tracking-wider uppercase"
            >
              Request Custom Quote
            </Link>
            <button className="btn-outline cursor-pointer rounded-sm px-8 py-3.5 text-sm font-semibold tracking-wider uppercase">
              Download Catalog
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
