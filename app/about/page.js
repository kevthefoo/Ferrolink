import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About FerroLink Tools - 25+ Years of Tool Manufacturing Excellence",
  description:
    "Learn about FerroLink Tools' heritage in manufacturing premium industrial hand tools, CNC equipment, and precision instruments. 25+ years serving professionals worldwide with quality and innovation.",
  keywords:
    "FerroLink history, tool manufacturer, industrial tools company, CNC tools Taiwan, hand tools manufacturer, professional tools company",
  openGraph: {
    title: "About FerroLink Tools - 25+ Years of Tool Manufacturing Excellence",
    description:
      "Learn about FerroLink Tools' heritage in manufacturing premium industrial hand tools, CNC equipment, and precision instruments.",
    url: "https://ferrolink.io/about",
    siteName: "FerroLink Tools",
    images: [
      {
        url: "/assets/about/ferrolink-factory.jpg",
        width: 1200,
        height: 630,
        alt: "FerroLink Tools Manufacturing Facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FerroLink Tools - 25+ Years of Tool Manufacturing Excellence",
    description:
      "Learn about FerroLink Tools' heritage in manufacturing premium industrial hand tools and CNC equipment.",
    images: ["/assets/about/ferrolink-factory.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ferrolink.io/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B0F14] pt-32 pb-24">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-[#E8530E] opacity-[0.03] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="tracking-luxury mb-6 text-[10px] font-semibold uppercase text-[#E8530E]">
              Our Heritage
            </p>
            <h1 className="font-display mb-6 text-5xl uppercase text-[#E6EDF3] md:text-7xl">
              About FerroLink Tools
            </h1>
            <div className="copper-line mx-auto mb-8 w-24" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#9BA4AE]">
              For over 25 years, we have been forging premium industrial tools
              that professionals trust for their most demanding projects.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative bg-[#111820] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            {/* Story Text */}
            <div>
              <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
                Est. 1999
              </p>
              <h2 className="font-display mb-8 text-4xl uppercase text-[#E6EDF3]">
                Our Story
              </h2>
              <div className="copper-line-left mb-8 w-16" />
              <p className="mb-6 leading-relaxed text-[#9BA4AE]">
                Founded in 1999 by master toolmaker David Hsu, FerroLink Tools
                began as a small workshop focused on creating precision CNC
                tools for local machine shops. What started as a passion project
                quickly grew into a mission to provide the highest quality hand
                tools to professionals worldwide.
              </p>
              <p className="mb-6 leading-relaxed text-[#9BA4AE]">
                Our commitment to excellence and innovation has led us to expand
                our product line to include professional-grade hammers,
                heavy-duty axes, and commercial garden tools. Each product
                category maintains our founding principles: precision,
                durability, and reliability.
              </p>
              <p className="leading-relaxed text-[#9BA4AE]">
                Today, FerroLink Tools serves customers in over 50 countries,
                from small workshops to major industrial operations, all united
                by their need for tools that perform when it matters most.
              </p>
            </div>

            {/* Company Milestones */}
            <div className="card-dark rounded-sm border border-[#2D333B] p-8">
              <p className="tracking-luxury mb-2 text-[10px] font-semibold uppercase text-[#E8530E]">
                Timeline
              </p>
              <h3 className="font-display mb-8 text-2xl uppercase text-[#E6EDF3]">
                Company Milestones
              </h3>
              <div className="space-y-6">
                {[
                  {
                    year: "1999",
                    event: "Company founded by David Hsu in Taichung, Taiwan",
                  },
                  {
                    year: "2005",
                    event: "Expanded into hammer and striking tool lines",
                  },
                  {
                    year: "2012",
                    event: "Launched professional-grade axe division",
                  },
                  {
                    year: "2018",
                    event: "Added commercial garden tools division",
                  },
                  {
                    year: "2025",
                    event: "Serving 50+ countries worldwide",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="group flex items-start gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border-2 border-[#E8530E] bg-[#0B0F14] transition-colors group-hover:bg-[#E8530E]" />
                      {index < 4 && (
                        <div className="h-10 w-px bg-[#2D333B]" />
                      )}
                    </div>
                    <div className="-mt-1">
                      <span className="font-display text-lg text-[#E8530E]">
                        {milestone.year}
                      </span>
                      <p className="mt-1 text-sm text-[#9BA4AE]">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative bg-[#0B0F14] py-24">
        <div className="absolute inset-0 crosshatch opacity-[0.02]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
              What Drives Us
            </p>
            <h2 className="font-display mb-6 text-4xl uppercase text-[#E6EDF3]">
              Core Values
            </h2>
            <div className="copper-line mx-auto w-24" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Precision */}
            <div className="card-dark group rounded-sm border border-[#2D333B] p-8 text-center transition-all duration-500 hover:border-[#E8530E]/30">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#2D333B] transition-colors group-hover:border-[#E8530E]/50">
                <svg
                  className="h-7 w-7 text-[#E8530E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.49-8.49l2.83-2.83"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-display mb-4 text-xl uppercase text-[#E6EDF3]">
                Precision
              </h3>
              <p className="text-sm leading-relaxed text-[#656D76]">
                Every tool is manufactured to exacting standards, ensuring
                consistent performance and reliability in professional
                applications.
              </p>
            </div>

            {/* Durability */}
            <div className="card-dark group rounded-sm border border-[#2D333B] p-8 text-center transition-all duration-500 hover:border-[#E8530E]/30">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#2D333B] transition-colors group-hover:border-[#E8530E]/50">
                <svg
                  className="h-7 w-7 text-[#E8530E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="font-display mb-4 text-xl uppercase text-[#E6EDF3]">
                Durability
              </h3>
              <p className="text-sm leading-relaxed text-[#656D76]">
                We use only the highest quality materials and time-tested
                manufacturing processes to create tools that last for decades.
              </p>
            </div>

            {/* Innovation */}
            <div className="card-dark group rounded-sm border border-[#2D333B] p-8 text-center transition-all duration-500 hover:border-[#E8530E]/30">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#2D333B] transition-colors group-hover:border-[#E8530E]/50">
                <svg
                  className="h-7 w-7 text-[#E8530E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="font-display mb-4 text-xl uppercase text-[#E6EDF3]">
                Innovation
              </h3>
              <p className="text-sm leading-relaxed text-[#656D76]">
                We continuously improve our designs and processes, incorporating
                the latest technology while respecting traditional
                craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-[#111820] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
              The People Behind the Tools
            </p>
            <h2 className="font-display mb-6 text-4xl uppercase text-[#E6EDF3]">
              Leadership Team
            </h2>
            <div className="copper-line mx-auto w-24" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "David Hsu",
                role: "Founder & CEO",
                bio: "Master toolmaker with 30+ years experience in precision manufacturing and tool design.",
                initials: "DH",
              },
              {
                name: "Arthur Yu",
                role: "VP of Engineering",
                bio: "Mechanical engineer specializing in tool design and manufacturing process optimization.",
                initials: "AY",
              },
              {
                name: "Jenny Hsu",
                role: "Head of Quality",
                bio: "Quality control expert ensuring every tool meets our rigorous standards before shipment.",
                initials: "JH",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="card-dark group rounded-sm border border-[#2D333B] p-8 text-center transition-all duration-500 hover:border-[#E8530E]/30"
              >
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#2D333B] bg-[#161D26] transition-colors group-hover:border-[#E8530E]/40">
                  <span className="font-display text-xl tracking-wider text-[#656D76] transition-colors group-hover:text-[#E8530E]">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display mb-2 text-xl uppercase text-[#E6EDF3]">
                  {member.name}
                </h3>
                <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-[#656D76]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="relative bg-[#0B0F14] py-24">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
                World-Class Facility
              </p>
              <h2 className="font-display mb-8 text-4xl uppercase text-[#E6EDF3]">
                State-of-the-Art Manufacturing
              </h2>
              <div className="copper-line-left mb-8 w-16" />
              <p className="mb-8 leading-relaxed text-[#9BA4AE]">
                Our 150,000 square foot facility houses the latest in precision
                manufacturing equipment, including advanced CNC machines, heat
                treatment facilities, and quality control laboratories.
              </p>
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Certified Quality Management",
                  "Advanced Metallurgy Laboratory",
                  "Automated Quality Testing Systems",
                  "Environmental Sustainability Programs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-[#E8530E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-[#9BA4AE]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="card-dark rounded-sm border border-[#2D333B] p-8">
              <p className="tracking-luxury mb-2 text-[10px] font-semibold uppercase text-[#E8530E]">
                By the Numbers
              </p>
              <h3 className="font-display mb-8 text-2xl uppercase text-[#E6EDF3]">
                Manufacturing Stats
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "500K+", label: "Tools Manufactured Annually" },
                  { value: "99.8%", label: "Quality Pass Rate" },
                  { value: "48hr", label: "Average Production Time" },
                  { value: "24/7", label: "Quality Monitoring" },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="font-display mb-2 text-3xl text-[#E8530E]">
                      {stat.value}
                    </div>
                    <div className="text-xs leading-relaxed text-[#656D76]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-[#111820] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
              Industry Standards
            </p>
            <h2 className="font-display mb-6 text-4xl uppercase text-[#E6EDF3]">
              Certifications & Standards
            </h2>
            <div className="copper-line mx-auto w-24" />
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                code: "ISO",
                title: "ISO 9001:2015",
                desc: "Quality Management",
                icon: (
                  <svg
                    className="h-6 w-6 text-[#E8530E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                ),
              },
              {
                code: "CE",
                title: "CE Marking",
                desc: "European Conformity",
                icon: (
                  <svg
                    className="h-6 w-6 text-[#E8530E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                ),
              },
              {
                code: "ANSI",
                title: "ANSI Standards",
                desc: "American National Standards",
                icon: (
                  <svg
                    className="h-6 w-6 text-[#E8530E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    />
                  </svg>
                ),
              },
              {
                code: "RoHS",
                title: "RoHS Compliant",
                desc: "Environmental Standards",
                icon: (
                  <svg
                    className="h-6 w-6 text-[#E8530E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864a4.5 4.5 0 010 6.636.855.855 0 00-.405.864v.568m0-8.5A11.952 11.952 0 003.161 8.94m9.589-5.91a11.952 11.952 0 019.589 5.91m-9.589-5.91v.568c0 .334-.148.65-.405.864a4.5 4.5 0 000 6.636.855.855 0 01.405.864v.568m0 0a11.952 11.952 0 01-9.589 5.91m9.589-5.91a11.952 11.952 0 009.589-5.91M3.161 8.94a11.952 11.952 0 000 6.12m17.678-6.12a11.952 11.952 0 010 6.12"
                    />
                  </svg>
                ),
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="card-dark group rounded-sm border border-[#2D333B] p-6 text-center transition-all duration-500 hover:border-[#E8530E]/30"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#2D333B] transition-colors group-hover:border-[#E8530E]/50">
                  {cert.icon}
                </div>
                <h3 className="font-display mb-1 text-sm uppercase text-[#E6EDF3]">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#656D76]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
