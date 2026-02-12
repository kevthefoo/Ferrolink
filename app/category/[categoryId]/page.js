import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories, getProductsByCategory } from "@/data/realProducts";

export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const category = categories[categoryId];
  const categoryProducts = getProductsByCategory(categoryId);
  const productCount = Object.keys(categoryProducts).length;

  if (!category) {
    return {
      title: "Category Not Found - FerroLink Tools",
      description: "The requested product category could not be found.",
    };
  }

  return {
    title: `${category.name} - Professional ${category.name} Tools | FerroLink Tools`,
    description: `${category.description} Browse our collection of ${productCount} professional-grade ${category.name.toLowerCase()} from FerroLink Tools.`,
    keywords: `${category.name}, ${categoryId}, professional ${category.name.toLowerCase()}, industrial tools, FerroLink`,
    openGraph: {
      title: `Professional ${category.name} Tools - FerroLink Tools`,
      description: `${category.description}`,
      url: `https://ferrolink.io/category/${categoryId}`,
      siteName: "FerroLink Tools",
      locale: "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `https://ferrolink.io/category/${categoryId}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(categories).map((categoryId) => ({ categoryId }));
}

export default async function CategoryPage({ params }) {
  const { categoryId } = await params;
  const category = categories[categoryId];
  const categoryProducts = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display mb-4 text-5xl text-[#E6EDF3]">
            CATEGORY NOT FOUND
          </h1>
          <p className="mb-8 text-[#656D76]">
            The category you&apos;re looking for doesn&apos;t exist.
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

  const productList = Object.values(categoryProducts);

  return (
    <div className="min-h-screen">
      <Header currentPage="products" />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-xs text-[#656D76]">
          <Link href="/" className="transition-colors hover:text-[#E8530E]">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="transition-colors hover:text-[#E8530E]">
            Products
          </Link>
          <span>/</span>
          <span className="text-[#E8530E]">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="mb-16">
          <span className="tracking-luxury mb-4 block text-[10px] font-semibold text-[#E8530E] uppercase">
            Product Category
          </span>
          <h1 className="font-display mb-4 text-5xl text-[#E6EDF3] md:text-6xl">
            {category.name.toUpperCase()}
          </h1>
          <div className="copper-line-left mb-6 w-20" />
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#656D76]">
            {category.description}
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-center gap-8 rounded-sm border border-[#2D333B] bg-[#161D26] px-8 py-4">
            <div>
              <div className="font-display text-2xl text-[#E8530E]">
                {productList.length}
              </div>
              <div className="text-xs text-[#656D76]">Products</div>
            </div>
            <div className="h-8 w-[1px] bg-[#2D333B]" />
            <div>
              <div className="font-display text-2xl text-[#E8530E]">
                Professional
              </div>
              <div className="text-xs text-[#656D76]">Grade Quality</div>
            </div>
            <div className="h-8 w-[1px] bg-[#2D333B]" />
            <div>
              <div className="font-display text-2xl text-[#E8530E]">
                Industry
              </div>
              <div className="text-xs text-[#656D76]">Leading Tools</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="mb-20">
          {productList.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-display text-2xl text-[#E6EDF3]">
                  ALL {category.name.toUpperCase()} ({productList.length})
                </h2>
                <select className="input-dark rounded-sm px-4 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Sort by: Name (A-Z)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productList.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.category}/${product.id}`}
                    className="card-dark group overflow-hidden rounded-sm"
                  >
                    {/* Product Image */}
                    <div className="flex h-52 w-full items-center justify-center overflow-hidden bg-[#161D26]">
                      {product.mainImage ? (
                        <Image
                          src={product.mainImage}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          unoptimized
                        />
                      ) : (
                        <span className="text-3xl text-[#444C56]">
                          {category.emoji}
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="font-display mb-2 line-clamp-2 text-lg text-[#E6EDF3] transition-colors group-hover:text-[#E8530E]">
                        {product.name.toUpperCase()}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-[#656D76]">
                        {product.shortDescription}
                      </p>

                      {/* Key features */}
                      <div className="mb-4">
                        {product.features.slice(0, 2).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#9BA4AE]">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#E8530E]" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-[#2D333B] pt-4">
                        <span className="text-[10px] font-semibold tracking-wider text-[#E8530E] uppercase">
                          View Details &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="py-20 text-center">
              <h3 className="font-display mb-4 text-3xl text-[#E6EDF3]">
                NO PRODUCTS AVAILABLE
              </h3>
              <p className="mb-8 text-[#656D76]">
                Products in this category are coming soon.
              </p>
              <Link
                href="/products"
                className="btn-copper rounded-sm px-8 py-3 text-[11px] tracking-[0.15em] uppercase"
              >
                Browse Featured Products
              </Link>
            </div>
          )}
        </section>

        {/* Related Categories */}
        <section>
          <h2 className="font-display mb-8 text-center text-2xl text-[#E6EDF3]">
            EXPLORE OTHER CATEGORIES
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Object.entries(categories)
              .filter(([id]) => id !== categoryId)
              .slice(0, 4)
              .map(([id, cat]) => {
                const catProducts = getProductsByCategory(id);
                return (
                  <Link
                    key={id}
                    href={`/category/${id}`}
                    className="card-dark group rounded-sm p-5 text-center"
                  >
                    <div className="mb-3 text-2xl opacity-40 transition-opacity group-hover:opacity-60">
                      {cat.emoji}
                    </div>
                    <h3 className="font-display mb-1 text-sm text-[#E6EDF3] transition-colors group-hover:text-[#E8530E]">
                      {cat.name.toUpperCase()}
                    </h3>
                    <p className="text-xs text-[#656D76]">
                      {Object.keys(catProducts).length} products
                    </p>
                  </Link>
                );
              })}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
