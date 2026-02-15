import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#2D333B] bg-[#080C12]">
      {/* Top accent line */}
      <div className="copper-line" />

      <div className="mx-auto max-w-7xl px-5 pt-12 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-12 md:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3">
            <div className="mb-8 flex items-center select-none">
              <div className="flex h-14 w-14 items-center justify-center rounded-sm">
                <Image
                  src="/assets/logo/ferrolink-logo.png"
                  alt="FerroLink"
                  width={56}
                  height={56}
                  className="h-full w-auto rounded-sm object-contain"
                />
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
          </div>

          {/* Product Lines */}
          <div className="md:col-span-2">
            <h5 className="tracking-luxury mb-6 text-[10px] font-semibold text-[#E8530E] uppercase">
              Products
            </h5>
            <ul className="space-y-3">
              {[
                { label: "Hammers", href: "/category/hammers" },
                { label: "Axes", href: "/category/axes" },
                { label: "Garden Gear", href: "/category/gardening-tools" },
                { label: "Handles", href: "/category/handles" },
                { label: "Other Tools", href: "/category/other-tools" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#656D76] transition-colors select-none hover:text-[#E6EDF3]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h5 className="tracking-luxury mb-6 text-[10px] font-semibold text-[#E8530E] uppercase">
              Resources
            </h5>
            <ul className="space-y-3">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Product Catalog", href: "/products" },
                { label: "Technical Support", href: "/contact" },
                { label: "Warranty", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#656D76] transition-colors select-none hover:text-[#E6EDF3]"
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
                    className="text-sm text-[#656D76] transition-colors select-none hover:text-[#E6EDF3]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
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
            &copy; {new Date().getFullYear()} FerroLink Tools. All rights
            reserved.
          </p>
          <p className="text-xs text-[#444C56]">
            Forged with precision in Taiwan
          </p>
        </div>
      </div>
    </footer>
  );
}
