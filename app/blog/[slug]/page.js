import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/data/blog-posts";
import { getProductById } from "@/data/realProducts";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found - FerroLink Tools Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | FerroLink Tools Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://ferrolink.io/blog/${post.slug}`,
      siteName: "FerroLink Tools",
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : [],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modifiedDate || post.date,
      authors: ["FerroLink Tools"],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `https://ferrolink.io/blog/${post.slug}` },
  };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display mb-4 text-5xl text-[#E6EDF3]">
            POST NOT FOUND
          </h1>
          <p className="mb-8 text-[#656D76]">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="btn-copper rounded-sm px-8 py-3 text-[11px] tracking-[0.15em] uppercase"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://ferrolink.io" },
    { name: "Blog", url: "https://ferrolink.io/blog" },
    { name: post.title, url: `https://ferrolink.io/blog/${post.slug}` },
  ]);

  const relatedProducts = (post.relatedProducts || [])
    .map((ref) => getProductById(ref.category, ref.id))
    .filter(Boolean);

  const otherPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />

      <article className="mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-xs text-[#656D76]">
          <Link href="/" className="transition-colors hover:text-[#E8530E]">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-[#E8530E]">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#E8530E] line-clamp-1">{post.title}</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="tracking-luxury rounded-sm border border-[#2D333B] bg-[#1C2430] px-2.5 py-1 text-[9px] font-semibold text-[#E8530E] uppercase">
              {post.category}
            </span>
            <span className="text-[10px] text-[#656D76]">{post.readTime}</span>
          </div>

          <h1 className="font-display mb-6 text-4xl text-[#E6EDF3] md:text-5xl">
            {post.title.toUpperCase()}
          </h1>
          <div className="copper-line-left mb-6 w-20" />

          <div className="flex items-center gap-4 text-xs text-[#656D76]">
            <span>By {post.author}</span>
            <span>|</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 overflow-hidden rounded-sm border border-[#2D333B]">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={500}
              sizes="(max-width: 896px) 100vw, 896px"
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="mb-16 space-y-6">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              const Tag = `h${block.level}`;
              return (
                <Tag
                  key={index}
                  className={`font-display text-[#E6EDF3] ${
                    block.level === 2
                      ? "mt-10 mb-4 text-2xl md:text-3xl"
                      : "mt-8 mb-3 text-xl md:text-2xl"
                  }`}
                >
                  {block.text.toUpperCase()}
                </Tag>
              );
            }
            return (
              <p
                key={index}
                className="text-sm leading-relaxed text-[#9BA4AE] md:text-base"
              >
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <div className="copper-line mb-8" />
            <h2 className="font-display mb-6 text-2xl text-[#E6EDF3]">
              RELATED PRODUCTS
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.category}/${product.id}`}
                  className="card-dark group overflow-hidden rounded-sm border border-[#2D333B] transition-all duration-500 hover:border-[#E8530E]/30"
                >
                  {product.mainImage && (
                    <div className="relative h-32 w-full overflow-hidden bg-[#161D26]">
                      <Image
                        src={product.mainImage}
                        alt={`${product.name} - Professional tool by FerroLink`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-display mb-1 line-clamp-1 text-sm text-[#E6EDF3] transition-colors group-hover:text-[#E8530E]">
                      {product.name}
                    </h3>
                    <span className="text-[10px] font-semibold tracking-wider text-[#E8530E] uppercase">
                      View Product &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other Blog Posts */}
        {otherPosts.length > 0 && (
          <section>
            <div className="copper-line mb-8" />
            <h2 className="font-display mb-6 text-2xl text-[#E6EDF3]">
              MORE ARTICLES
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherPosts.map((otherPost) => (
                <Link
                  key={otherPost.slug}
                  href={`/blog/${otherPost.slug}`}
                  className="card-dark group rounded-sm border border-[#2D333B] p-6 transition-all duration-500 hover:border-[#E8530E]/30"
                >
                  <span className="tracking-luxury mb-2 block text-[9px] font-semibold text-[#E8530E] uppercase">
                    {otherPost.category}
                  </span>
                  <h3 className="font-display mb-2 text-lg text-[#E6EDF3] transition-colors group-hover:text-[#E8530E]">
                    {otherPost.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-[#656D76]">
                    {otherPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  );
}
