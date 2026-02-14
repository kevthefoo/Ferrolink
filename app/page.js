import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import NewsletterForm from "@/components/NewsletterForm";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import FloatingSparks from "@/components/FloatingSparks";
import { categories, getProductsByCategory } from "@/data/realProducts";
import { manufacturerSchema } from "@/lib/structured-data";

export const metadata = {
  title: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
  description:
    "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools. Engineering excellence for industrial applications. Quality tools for professionals worldwide.",
  keywords:
    "industrial tools, CNC tools, hand tools, hammers, axes, garden tools, professional tools, tool manufacturer, FerroLink, precision tools",
  openGraph: {
    title: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
    description:
      "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools.",
    url: "https://ferrolink.io",
    siteName: "FerroLink Tools",
    images: [
      {
        url: "/assets/materials/logo.png",
        width: 1200,
        height: 630,
        alt: "FerroLink Industrial Tools Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
    description:
      "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools.",
    images: ["/assets/materials/logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ferrolink.io" },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(manufacturerSchema),
        }}
      />
      <Header currentPage="home" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/materials/stainlessbanner.png"
            alt="FerroLink industrial tools manufacturing - professional hand tools and CNC equipment"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/95 via-[#0B0F14]/80 to-[#0B0F14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-[#0B0F14]/60" />
        </div>

        {/* Floating sparks */}
        <FloatingSparks />

        {/* Accent stripe at top */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#E8530E] via-[#FF7A33] to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Text content */}
              <div>
                {/* Industrial badge */}
                <div className="mb-8 animate-fade-in-up opacity-0">
                  <span className="inline-flex items-center gap-3 border-l-4 border-[#E8530E] bg-[#E8530E]/10 px-5 py-2.5 text-[11px] font-bold tracking-[0.2em] text-[#E8530E] uppercase backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[#E8530E] animate-pulse" />
                    Precision Engineered Since 1999
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="animate-fade-in-up mb-6 opacity-0 delay-100">
                  <span className="sr-only">FerroLink Industrial Grade Tools - Professional Hand Tools & CNC Equipment Manufacturer in Taiwan</span>
                  <span className="font-display block text-[clamp(3rem,7vw,6.5rem)] leading-[0.85] text-white" aria-hidden="true">
                    INDUSTRIAL
                  </span>
                  <span className="font-display block text-[clamp(3rem,7vw,6.5rem)] leading-[0.85] text-white" aria-hidden="true">
                    GRADE
                  </span>
                  <span className="font-display accent-text block text-[clamp(3rem,7vw,6.5rem)] leading-[0.85]" aria-hidden="true">
                    TOOLS
                  </span>
                </h1>

                {/* Accent bar */}
                <div className="mb-8 flex items-center gap-4 animate-fade-in-up opacity-0 delay-200">
                  <div className="h-[3px] w-20 bg-[#E8530E] animate-expand-width" />
                  <div className="h-[3px] w-8 bg-[#E8530E]/40" />
                  <div className="h-[3px] w-4 bg-[#E8530E]/20" />
                </div>

                {/* Subtext */}
                <p className="mb-10 max-w-lg animate-fade-in-up text-lg leading-relaxed text-[#9BA4AE] opacity-0 delay-300">
                  From CNC cutting tools to heavy-duty hammers and axes.
                  Built for professionals who demand uncompromising performance
                  and reliability on every job site.
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-4 animate-fade-in-up opacity-0 delay-400 sm:flex-row">
                  <Link
                    href="/products"
                    className="btn-copper rounded-sm px-10 py-4 text-center text-[12px] tracking-[0.15em] uppercase"
                  >
                    Explore Catalog
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-outline rounded-sm px-10 py-4 text-center text-[12px] tracking-[0.15em] uppercase backdrop-blur-sm"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

              {/* Right side - Featured image showcase */}
              <div className="relative hidden lg:flex items-center justify-center animate-fade-in-up opacity-0 delay-300">
                <div className="relative">
                  {/* Decorative border frame */}
                  <div className="absolute -inset-4 rounded-sm border border-[#E8530E]/20" />
                  <div className="absolute -inset-8 rounded-sm border border-[#E8530E]/10" />

                  {/* Corner accents */}
                  <div className="absolute -top-8 -left-8 h-6 w-6 border-t-2 border-l-2 border-[#E8530E]" />
                  <div className="absolute -top-8 -right-8 h-6 w-6 border-t-2 border-r-2 border-[#E8530E]" />
                  <div className="absolute -bottom-8 -left-8 h-6 w-6 border-b-2 border-l-2 border-[#E8530E]" />
                  <div className="absolute -bottom-8 -right-8 h-6 w-6 border-b-2 border-r-2 border-[#E8530E]" />

                  {/* Main image */}
                  <div className="relative h-[450px] w-[450px] overflow-hidden rounded-sm">
                    <Image
                      src="/assets/materials/cnc2.png"
                      alt="FerroLink CNC precision cutting tools - industrial manufacturing equipment"
                      fill
                      sizes="(max-width: 1024px) 0px, 450px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/60 via-transparent to-transparent" />
                  </div>

                  {/* Floating accent badge */}
                  <div className="absolute -bottom-6 -left-6 rounded-sm border border-[#2D333B] bg-[#161D26]/95 px-5 py-3 backdrop-blur-sm">
                    <div className="text-[10px] font-semibold tracking-wider text-[#E8530E] uppercase">Trusted by</div>
                    <div className="font-display text-2xl text-white">
                      <AnimatedCounter value="50" suffix="+" /> Countries
                    </div>
                  </div>

                  {/* Floating accent badge top-right */}
                  <div className="absolute -top-6 -right-6 rounded-sm border border-[#2D333B] bg-[#161D26]/95 px-5 py-3 backdrop-blur-sm">
                    <div className="text-[10px] font-semibold tracking-wider text-[#E8530E] uppercase">Since</div>
                    <div className="font-display text-2xl text-white">1999</div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -inset-12 -z-10 bg-[#E8530E]/5 blur-3xl rounded-full" />
                </div>
              </div>
            </div>

            {/* Stats row - full width below both columns */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-0 animate-fade-in-up opacity-0 delay-500 rounded-sm border border-[#2D333B] bg-[#0B0F14]/80 backdrop-blur-md overflow-hidden">
              {[
                { value: "25", suffix: "+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { value: "1000", suffix: "+", label: "Products", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                { value: "50", suffix: "+", label: "Countries", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((stat, i) => (
                <div key={stat.label} className={`flex items-center gap-4 px-8 py-6 ${i < 2 ? "sm:border-r border-b sm:border-b-0 border-[#2D333B]" : ""}`}>
                  <svg className="h-6 w-6 flex-shrink-0 text-[#E8530E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                  <div>
                    <div className="font-display text-3xl text-white">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] text-[#656D76] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-[9px] tracking-[0.3em] text-[#656D76] uppercase">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-[#E8530E] to-transparent" />
        </div>
      </section>

      {/* ═══ PRODUCT CATEGORIES ═══ */}
      <section className="relative border-t border-[#2D333B] bg-[#111820] py-28">
        <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#E8530E] via-transparent to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="mb-16 max-w-xl">
              <span className="tracking-luxury mb-4 block text-[10px] font-semibold text-[#E8530E] uppercase">
                Product Lines
              </span>
              <h2 className="font-display mb-4 text-4xl text-[#E6EDF3] md:text-5xl">
                INDUSTRIAL CATALOG
              </h2>
              <div className="copper-line-left mb-6 w-16" />
              <p className="text-sm leading-relaxed text-[#656D76]">
                Professional-grade tools engineered for durability, precision, and
                performance in demanding environments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {Object.entries(categories).map(([categoryId, category], index) => {
              const categoryProducts = getProductsByCategory(categoryId);
              const sampleProduct = Object.values(categoryProducts)[0];

              return (
                <ScrollReveal
                  key={categoryId}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Link
                    href={
                      sampleProduct
                        ? `/products/${sampleProduct.category}/${sampleProduct.id}`
                        : "#"
                    }
                    className="card-dark group relative block overflow-hidden rounded-sm p-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8530E]/0 to-[#E8530E]/0 transition-all duration-500 group-hover:from-[#E8530E]/5 group-hover:to-transparent" />

                    <div className="relative z-10">
                      <div className="mb-5 flex h-36 w-full items-center justify-center overflow-hidden rounded-sm bg-[#0B0F14]">
                        {sampleProduct && sampleProduct.mainImage ? (
                          <Image
                            src={sampleProduct.mainImage}
                            alt={`${sampleProduct.name} - Professional ${category.name.toLowerCase()} tool by FerroLink`}
                            width={140}
                            height={140}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <span className="text-3xl opacity-30">
                            {category.emoji}
                          </span>
                        )}
                      </div>

                      <h4 className="font-display mb-2 text-xl text-[#E6EDF3] transition-colors group-hover:text-[#E8530E]">
                        {category.name.toUpperCase()}
                      </h4>
                      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-[#656D76]">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#444C56]">
                          {Object.keys(categoryProducts).length} products
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wider text-[#E8530E] uppercase transition-all group-hover:text-[#FF7A33] group-hover:gap-2">
                          Explore
                          <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CNC MACHINE SHOWCASE ═══ */}
      <section className="relative overflow-hidden py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <ScrollReveal animation="fade-right" className="relative h-[500px] lg:h-auto">
            <Image
              src="/assets/materials/cnc.png"
              alt="FerroLink CNC manufacturing equipment - precision engineering facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0F14]/80 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B0F14]" />
          </ScrollReveal>

          {/* Content side */}
          <div className="flex items-center bg-[#0B0F14] py-20 px-8 lg:px-16">
            <div>
              <ScrollReveal animation="fade-left">
                <span className="tracking-luxury mb-4 block text-[10px] font-semibold text-[#E8530E] uppercase">
                  Why FerroLink
                </span>
                <h2 className="font-display mb-4 text-4xl text-[#E6EDF3] md:text-5xl">
                  ENGINEERED FOR<br />EXCELLENCE
                </h2>
                <div className="copper-line-left mb-8 w-16" />
                <p className="mb-10 text-sm leading-relaxed text-[#9BA4AE]">
                  We combine traditional craftsmanship with cutting-edge CNC
                  technology to deliver tools that exceed the highest industry
                  standards.
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  {
                    title: "PRECISION MANUFACTURING",
                    desc: "State-of-the-art CNC equipment ensures every tool meets exacting tolerances.",
                    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                  },
                  {
                    title: "PREMIUM MATERIALS",
                    desc: "High-grade steel alloys and composites for maximum durability and performance.",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  },
                  {
                    title: "GLOBAL DISTRIBUTION",
                    desc: "Trusted by professionals in over 50 countries across 6 continents.",
                    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                ].map((feature, index) => (
                  <ScrollReveal key={feature.title} animation="fade-left" delay={index * 150}>
                    <div className="group flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-[#2D333B] bg-[#161D26] text-[#E8530E] transition-all duration-300 group-hover:border-[#E8530E]/50 group-hover:bg-[#E8530E]/10 group-hover:shadow-[0_0_20px_rgba(232,83,14,0.15)]">
                        <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display mb-1 text-lg text-[#E6EDF3] transition-colors duration-300 group-hover:text-[#E8530E]">
                          {feature.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-[#656D76]">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT SNAPSHOT ═══ */}
      <section className="relative border-t border-[#2D333B] bg-[#111820] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="tracking-luxury mb-4 block text-[10px] font-semibold text-[#E8530E] uppercase">
                  Our Heritage
                </span>
                <h2 className="font-display mb-4 text-4xl text-[#E6EDF3] md:text-5xl">
                  ABOUT FERROLINK
                </h2>
                <div className="copper-line-left mb-8 w-16" />
                <p className="mb-6 text-sm leading-relaxed text-[#9BA4AE]">
                  Founded on the principle that quality tools are essential for
                  quality work, FerroLink Tools has become a trusted name in the
                  hand tools industry. We specialize in CNC tools and traditional
                  hand tools including hammers, axes, and garden implements.
                </p>
                <p className="mb-8 text-sm leading-relaxed text-[#656D76]">
                  Our commitment to excellence drives us to continuously innovate
                  while maintaining the craftsmanship traditions that have made our
                  tools the choice of professionals worldwide.
                </p>
                <Link
                  href="/about"
                  className="btn-outline inline-block rounded-sm px-8 py-3 text-[11px] tracking-[0.15em] uppercase"
                >
                  Our Story
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="rounded-sm border border-[#2D333B] bg-[#161D26] p-8">
                <h4 className="font-display mb-6 text-xl text-[#E6EDF3]">
                  OUR SPECIALTIES
                </h4>
                <ul className="space-y-4">
                  {[
                    "CNC Tool Manufacturing & Distribution",
                    "Professional Grade Hammers & Striking Tools",
                    "Heavy-Duty Axes & Cutting Tools",
                    "Commercial Garden & Landscaping Tools",
                    "Custom Tool Solutions",
                  ].map((item, index) => (
                    <li key={item} className="group flex items-center gap-3 text-sm text-[#9BA4AE] transition-colors duration-300 hover:text-[#E6EDF3]">
                      <span className="h-2 w-2 rounded-full bg-[#E8530E] transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(232,83,14,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT + QUOTE ═══ */}
      <section className="relative py-28">
        <div className="crosshatch absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="mb-16 text-center">
              <span className="tracking-luxury mb-4 block text-[10px] font-semibold text-[#E8530E] uppercase">
                Get Started
              </span>
              <h2 className="font-display mb-4 text-4xl text-[#E6EDF3] md:text-5xl">
                GET IN TOUCH
              </h2>
              <div className="copper-line mx-auto mb-6 w-16" />
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#656D76]">
                Ready to upgrade your toolkit? Contact us for product information,
                custom solutions, or bulk orders.
              </p>
            </div>
          </ScrollReveal>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                label: "Email",
                value: "support@ferrolink.io",
                icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
              },
              {
                label: "Phone",
                value: "+886 47766093",
                icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
              },
              {
                label: "Location",
                value: "Changhua County, Taiwan",
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
              },
            ].map((contact, index) => (
              <ScrollReveal key={contact.label} animation="fade-up" delay={index * 100}>
                <div className="card-dark group flex items-center gap-4 rounded-sm p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm border border-[#2D333B] text-[#E8530E] transition-all duration-300 group-hover:border-[#E8530E]/50 group-hover:bg-[#E8530E]/10 group-hover:shadow-[0_0_15px_rgba(232,83,14,0.15)]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={contact.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#656D76] uppercase tracking-wider">
                      {contact.label}
                    </div>
                    <div className="text-sm text-[#E6EDF3]">{contact.value}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="mx-auto max-w-2xl">
              <QuoteForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal animation="fade-up">
        <NewsletterForm />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
