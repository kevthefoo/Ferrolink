import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#2D333B] bg-[#080C12]">
      {/* Top accent line */}
      <div className="copper-line" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-8 flex items-center gap-3">
              <div className="copper-gradient flex h-10 w-10 items-center justify-center rounded-sm">
                <span className="font-display text-2xl text-white">F</span>
              </div>
              <div>
                <span className="font-display text-2xl text-[#E6EDF3]">
                  FERROLINK
                </span>
                <div className="tracking-luxury text-[9px] font-medium text-[#656D76]">
                  INDUSTRIAL TOOLS
                </div>
              </div>
            </div>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-[#656D76]">
              Engineering precision tools for professionals who demand
              uncompromising quality. Crafted in Taiwan since 1999.
            </p>
            <div className="flex gap-5">
              {[
                {
                  href: "https://www.facebook.com/",
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  href: "https://www.x.com/",
                  label: "X",
                  path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                },
                {
                  href: "https://www.linkedin.com/",
                  label: "LinkedIn",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-[#444C56] transition-colors hover:text-[#E8530E]"
                >
                  <span className="sr-only">{social.label}</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Lines */}
          <div className="md:col-span-2">
            <h5 className="tracking-luxury mb-6 text-[10px] font-semibold text-[#E8530E] uppercase">
              Products
            </h5>
            <ul className="space-y-3">
              {["Hammers", "Axes", "Garden Gear", "Handles", "Other Tools"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="text-sm text-[#656D76] transition-colors hover:text-[#E6EDF3]"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h5 className="tracking-luxury mb-6 text-[10px] font-semibold text-[#E8530E] uppercase">
              Support
            </h5>
            <ul className="space-y-3">
              {[
                { label: "Product Catalog", href: "/products" },
                { label: "Technical Support", href: "/contact" },
                { label: "Warranty", href: "/contact" },
                { label: "Returns", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#656D76] transition-colors hover:text-[#E6EDF3]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h5 className="tracking-luxury mb-6 text-[10px] font-semibold text-[#E8530E] uppercase">
              Company
            </h5>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Quality Standards", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#656D76] transition-colors hover:text-[#E6EDF3]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h5 className="tracking-luxury mb-6 text-[10px] font-semibold text-[#E8530E] uppercase">
              Contact
            </h5>
            <div className="space-y-3 text-sm text-[#656D76]">
              <p>+886 47766093</p>
              <p>support@ferrolink.io</p>
              <p className="leading-relaxed">
                No. 38, Sec. 4, Fu 3rd Rd.,
                <br />
                Fuxing Township,
                <br />
                Changhua County, Taiwan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2D333B] pt-8 md:flex-row">
          <p className="text-xs text-[#444C56]">
            &copy; {new Date().getFullYear()} FerroLink Tools. All rights reserved.
          </p>
          <p className="text-xs text-[#444C56]">
            Forged with precision in Taiwan
          </p>
        </div>
      </div>
    </footer>
  );
}
