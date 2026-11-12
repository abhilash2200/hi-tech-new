
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock3,
  Film,
  User,
  BookOpen,
  Newspaper,
  Send,
} from "lucide-react";

import { broadsheetArticles } from "../blogData";

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return broadsheetArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;

  const article = broadsheetArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | The Animation Chronicle",
    };
  }

  return {
    title: `${article.headline} | The Animation Chronicle`,
    description: article.subheadline,
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;

  const article = broadsheetArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const relatedArticles = broadsheetArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  const recentPosts = [...broadsheetArticles]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
    .slice(0, 5);

  const readingTime = Math.max(
    1,
    Math.ceil(
      article.paragraphs.join(" ").split(/\s+/).length / 200
    )
  );

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#e8e3d5] text-[#2c2824] font-serif">

      {/* ================= NEWSPAPER HEADER ================= */}

      <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-8 lg:px-12">

        <header className="border-b-2 border-[#2c2824] pb-4">

          <div className="flex flex-wrap justify-between gap-2 border-b border-[#2c2824]/30 pb-2 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[#615a52] sm:text-[10px]">
            <span>Vol. XXIV No. 108</span>
            <span>The Global Animation Broadsheet</span>
            <span>Special Edition</span>
          </div>

          <div className="py-5 text-center">

            <Link href="/blog" className="inline-block">

              <span className="mb-2 block text-[9px] font-sans font-extrabold uppercase tracking-[0.4em] text-[#b73526]">
                Official Journal of Motion & 3D Production
              </span>

              <h1 className="text-3xl font-black uppercase tracking-tighter sm:text-5xl lg:text-6xl">
                The Animation{" "}
                <span className="font-normal italic lowercase text-[#b73526]">
                  Chronicle
                </span>
              </h1>

            </Link>

          </div>

          <div className="flex flex-wrap justify-between gap-2 border-t border-[#2c2824]/30 pt-2 text-[9px] font-sans uppercase tracking-widest text-[#615a52] sm:text-[10px]">
            <span>Monday, May 18, 2026</span>
            <span>Established 2000</span>
            <span>Article Archive</span>
          </div>

        </header>

        {/* ================= BACK TO BLOG ================= */}

        <div className="flex items-center justify-between border-b border-[#2c2824]/30 py-4">

          <Link
            href="/blog"
            className="group flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-[#615a52] transition-colors hover:text-[#b73526]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Chronicle
          </Link>

          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#b73526]">
            Article / {article.category}
          </span>

        </div>

        {/* ================= THREE COLUMN LAYOUT ================= */}

        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-8 py-8 sm:py-12 xl:grid-cols-[210px_minmax(0,1fr)_280px] xl:gap-8">

          {/* ================= LEFT SIDEBAR ================= */}

          <aside className="hidden xl:block">

            <div className="sticky top-8 space-y-6">

              {/* TABLE OF CONTENTS */}

              <div className="border-b-2 border-[#2c2824] pb-4">

                <div className="flex items-center gap-2 text-[#b73526]">
                  <BookOpen size={15} />

                  <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em]">
                    Navigation
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-black uppercase tracking-tight">
                  Contents
                </h2>

                <p className="mt-2 text-[11px] leading-relaxed text-[#615a52]">
                  Navigate through this article.
                </p>

              </div>

              <nav className="space-y-1">

                <a
                  href="#article-heading"
                  className="group flex items-start gap-3 border-l-2 border-[#b73526] py-3 pl-3 text-xs font-bold transition-colors hover:text-[#b73526]"
                >
                  <span className="font-sans text-[9px] text-[#b73526]">
                    01
                  </span>

                  <span>Article Overview</span>
                </a>

                <a
                  href="#inside-story"
                  className="group flex items-start gap-3 border-l-2 border-[#2c2824]/20 py-3 pl-3 text-xs text-[#615a52] transition-colors hover:border-[#b73526] hover:text-[#b73526]"
                >
                  <span className="font-sans text-[9px]">
                    02
                  </span>

                  <span>Inside the Story</span>
                </a>

                {article.paragraphs.map((_, index) => (
                  <a
                    key={index}
                    href={`#story-section-${index + 1}`}
                    className="group flex items-start gap-3 border-l-2 border-[#2c2824]/20 py-2.5 pl-3 text-xs text-[#615a52] transition-colors hover:border-[#b73526] hover:text-[#b73526]"
                  >
                    <span className="font-sans text-[9px]">
                      {String(index + 3).padStart(2, "0")}
                    </span>

                    <span>Part {String(index + 1).padStart(2, "0")}</span>
                  </a>
                ))}

                <a
                  href="#related-stories"
                  className="group flex items-start gap-3 border-l-2 border-[#2c2824]/20 py-3 pl-3 text-xs text-[#615a52] transition-colors hover:border-[#b73526] hover:text-[#b73526]"
                >
                  <span className="font-sans text-[9px]">
                    06
                  </span>

                  <span>Related Stories</span>
                </a>

              </nav>

              {/* LEFT EDITORIAL BOX */}

              <div className="border-t border-[#2c2824]/30 pt-5">

                <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em] text-[#b73526]">
                  The Chronicle
                </span>

                <p className="mt-3 text-sm italic leading-relaxed text-[#615a52]">
                  Stories, insights and ideas from the evolving world of animation and digital creativity.
                </p>

                <div className="mt-4 h-1 w-12 bg-[#b73526]" />

              </div>

            </div>

          </aside>

          {/* ================= CENTER ARTICLE ================= */}

          <div className="min-w-0">

            <article>

              {/* ARTICLE CATEGORY */}

              <div className="mb-5 flex flex-wrap items-center gap-3">

                <span className="bg-[#b73526] px-3 py-1.5 text-[9px] font-sans font-black uppercase tracking-[0.18em] text-[#f4f0e6]">
                  {article.category}
                </span>

                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#615a52]">
                  Featured Dispatch
                </span>

              </div>

              {/* HEADLINE */}

              <h1
                id="article-heading"
                className="scroll-mt-8 text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              >
                {article.headline}
              </h1>

              {/* SUBHEADLINE */}

              <p className="mt-5 max-w-3xl text-base italic leading-relaxed text-[#615a52] sm:text-xl">
                {article.subheadline}
              </p>

              {/* ARTICLE META */}

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-[#2c2824]/30 py-4 text-[9px] font-sans font-bold uppercase tracking-wider text-[#615a52] sm:text-[10px]">

                <span className="flex items-center gap-2">
                  <User size={14} className="text-[#b73526]" />
                  {article.author}
                </span>

                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#b73526]" />
                  {article.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={14} className="text-[#b73526]" />
                  {readingTime} Min Read
                </span>

              </div>

              {/* FEATURED IMAGE */}

              {article.image && (
                <figure className="mt-8">

                  <div className="relative aspect-[16/9] overflow-hidden border border-[#2c2824]/20 bg-[#dfd9cb]">

                    <img
                      src={article.image}
                      alt={article.headline}
                      className="h-full w-full object-cover"
                    />

                  </div>

                  <figcaption className="mt-2 flex justify-between gap-3 text-[9px] font-sans uppercase tracking-wider text-[#615a52]">
                    <span>The Animation Chronicle — Visual Report</span>
                    <span>{article.category}</span>
                  </figcaption>

                </figure>
              )}

              {/* ARTICLE BODY */}

              <div className="mt-10">

                <div
                  id="inside-story"
                  className="mb-6 flex scroll-mt-8 items-center gap-3 border-b border-[#2c2824]/30 pb-3"
                >
                  <Film size={17} className="text-[#b73526]" />

                  <span className="text-[10px] font-sans font-black uppercase tracking-[0.2em]">
                    Inside the Story
                  </span>
                </div>

                <div className="space-y-7 text-[15px] leading-[1.95] text-[#3a3530] sm:text-base">

                  {article.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      id={`story-section-${index + 1}`}
                      className={`scroll-mt-8 ${
                        index === 0
                          ? "first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85] first-letter:text-[#b73526]"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                </div>

              </div>

              {/* ARTICLE END */}

              <div className="mt-10 border-y-2 border-[#2c2824] py-5">

                <p className="text-center text-[10px] font-sans font-black uppercase tracking-[0.25em] text-[#b73526]">
                  End of Dispatch
                </p>

                <p className="mt-2 text-center text-xs italic text-[#615a52]">
                  Published by The Animation Chronicle
                </p>

              </div>

            </article>

            {/* ================= RELATED STORIES ================= */}

            {relatedArticles.length > 0 && (

              <section
                id="related-stories"
                className="scroll-mt-8 border-t-2 border-[#2c2824] py-10"
              >

                <div className="mb-7 flex flex-wrap items-end justify-between gap-3">

                  <div>

                    <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-[#b73526]">
                      Continue Reading
                    </span>

                    <h2 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                      Related Dispatches
                    </h2>

                  </div>

                  <Link
                    href="/blog"
                    className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#b73526] hover:underline"
                  >
                    View All Stories →
                  </Link>

                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {relatedArticles.map((related) => (

                    <Link
                      key={related.id}
                      href={`/blog/${related.slug}`}
                      className="group border border-[#2c2824]/25 bg-[#eae4d5] p-3 transition-colors hover:border-[#b73526]"
                    >

                      {related.image && (
                        <div className="aspect-[16/9] overflow-hidden bg-[#dfd9cb]">

                          <img
                            src={related.image}
                            alt={related.headline}
                            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                          />

                        </div>
                      )}

                      <div className="pt-4">

                        <span className="text-[8px] font-sans font-black uppercase tracking-widest text-[#b73526]">
                          {related.category}
                        </span>

                        <h3 className="mt-2 text-lg font-bold leading-snug transition-colors group-hover:text-[#b73526]">
                          {related.headline}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#615a52]">
                          {related.subheadline}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t border-[#2c2824]/20 pt-3 text-[8px] font-sans font-bold uppercase tracking-wider text-[#615a52]">

                          <span>{related.author}</span>

                          <span className="flex items-center gap-1 text-[#b73526]">
                            Read Story <ArrowUpRight size={12} />
                          </span>

                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

              </section>

            )}

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}

          <aside className="hidden xl:block">

            <div className="sticky top-8 space-y-7">

              {/* ENQUIRY FORM */}

              <div className="border border-[#2c2824]/30 bg-[#eae4d5] p-5">

                <div className="flex items-center gap-2 text-[#b73526]">

                  <Send size={14} />

                  <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em]">
                    Stay Connected
                  </span>

                </div>

                <h2 className="mt-3 text-2xl font-black uppercase leading-tight">
                  Have a Question?
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-[#615a52]">
                  Interested in animation and creative courses? Leave your details and our team will get in touch.
                </p>

                <form className="mt-5 space-y-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full border-b border-[#2c2824]/30 bg-transparent py-2.5 text-xs outline-none placeholder:text-[#81796e] focus:border-[#b73526]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full border-b border-[#2c2824]/30 bg-transparent py-2.5 text-xs outline-none placeholder:text-[#81796e] focus:border-[#b73526]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full border-b border-[#2c2824]/30 bg-transparent py-2.5 text-xs outline-none placeholder:text-[#81796e] focus:border-[#b73526]"
                  />

                  <select
                    name="course"
                    defaultValue=""
                    required
                    className="w-full border-b border-[#2c2824]/30 bg-transparent py-2.5 text-xs text-[#615a52] outline-none focus:border-[#b73526]"
                  >
                    <option value="" disabled>
                      Select Course
                    </option>

                    <option value="3D Animation">3D Animation</option>
                    <option value="VFX">Visual Effects (VFX)</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="UI UX">UI / UX Design</option>
                    <option value="Motion Graphics">Motion Graphics</option>
                    <option value="Game Design">Game Design</option>
                  </select>

                  <button
                    type="button"
                    className="group flex w-full items-center justify-center gap-2 bg-[#b73526] px-4 py-3.5 text-[9px] font-sans font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#2c2824]"
                  >
                    Request a Callback

                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                </form>

                <p className="mt-3 text-center text-[9px] italic text-[#81796e]">
                  Your information stays private.
                </p>

              </div>

              {/* RECENT POSTS */}

              <div className="border-t-2 border-[#2c2824] pt-5">

                <div className="flex items-center gap-2 text-[#b73526]">

                  <Newspaper size={15} />

                  <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em]">
                    From the Newsroom
                  </span>

                </div>

                <h2 className="mt-2 text-2xl font-black uppercase tracking-tight">
                  Recent Posts
                </h2>

                <p className="mt-2 text-[11px] leading-relaxed text-[#615a52]">
                  Latest stories from The Animation Chronicle.
                </p>

                <div className="mt-5 space-y-5">

                  {recentPosts.map((post, index) => (

                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-3 border-b border-[#2c2824]/20 pb-5"
                    >

                      {/* POST IMAGE */}

                      <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden bg-[#dfd9cb]">

                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.headline}
                            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <Film size={22} className="text-[#b73526]" />
                          </div>
                        )}

                      </div>

                      {/* POST DETAILS */}

                      <div className="min-w-0 flex-1">

                        <span className="text-[8px] font-sans font-black uppercase tracking-wider text-[#b73526]">
                          {post.category}
                        </span>

                        <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-snug transition-colors group-hover:text-[#b73526]">
                          {post.headline}
                        </h3>

                        <div className="mt-2 flex items-center gap-1.5 text-[8px] font-sans uppercase tracking-wider text-[#81796e]">

                          <Calendar size={10} />

                          <span>{post.date}</span>

                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

                <Link
                  href="/blog"
                  className="mt-5 flex items-center justify-between border border-[#2c2824] px-4 py-3 text-[9px] font-sans font-black uppercase tracking-widest transition-colors hover:border-[#b73526] hover:bg-[#b73526] hover:text-white"
                >
                  View All Articles

                  <ArrowUpRight size={14} />
                </Link>

              </div>

            </div>

          </aside>

        </div>

        {/* ================= FOOTER ================= */}

        <footer className="border-t-2 border-[#2c2824] py-5 text-center text-[9px] font-sans uppercase tracking-[0.2em] text-[#615a52]">
          © 2000–2026 The Animation Chronicle · All Rights Reserved
        </footer>

      </div>

    </main>
  );
}
