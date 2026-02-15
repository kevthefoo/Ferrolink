import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-dark group overflow-hidden rounded-sm border border-[#2D333B] transition-all duration-500 hover:border-[#E8530E]/30"
    >
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden bg-[#161D26] sm:h-52">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-3">
          <span className="tracking-luxury rounded-sm border border-[#2D333B] bg-[#1C2430] px-2.5 py-1 text-[9px] font-semibold text-[#E8530E] uppercase">
            {post.category}
          </span>
          <span className="text-[10px] text-[#656D76]">{post.readTime}</span>
        </div>

        <h3 className="font-display mb-3 line-clamp-2 min-h-[3.2rem] text-lg text-[#E6EDF3] transition-colors duration-300 group-hover:text-[#E8530E]">
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[#656D76]">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#2D333B] pt-4">
          <span className="text-[10px] text-[#656D76]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-[#E8530E] uppercase transition-all duration-300 group-hover:gap-2">
            Read More
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
  );
}
