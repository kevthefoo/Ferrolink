import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Blog - Industrial Tool Guides & Industry Insights | FerroLink Tools",
  description:
    "Expert guides on industrial hand tools, CNC equipment, tool selection, and maintenance. Professional insights from FerroLink Tools, Taiwan's leading tool manufacturer.",
  keywords:
    "industrial tool guides, CNC tool guides, hammer buying guide, tool maintenance tips, professional tools blog, FerroLink blog",
  openGraph: {
    title: "Blog - Industrial Tool Guides & Industry Insights",
    description:
      "Expert guides on industrial hand tools, CNC equipment, tool selection, and maintenance from FerroLink Tools.",
    url: "https://ferrolink.io/blog",
    siteName: "FerroLink Tools",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ferrolink.io/blog" },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="grid-pattern absolute inset-0 opacity-[0.03]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="tracking-luxury mb-4 text-[10px] font-semibold text-[#E8530E] uppercase">
              Knowledge Base
            </p>
            <h1 className="font-display mb-6 text-5xl text-[#E6EDF3] sm:text-6xl lg:text-7xl">
              BLOG & RESOURCES
            </h1>
            <div className="copper-line mx-auto mb-8 w-24" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#9BA4AE]">
              Expert guides, industry insights, and professional tips from our
              team of tool engineers and manufacturing specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
