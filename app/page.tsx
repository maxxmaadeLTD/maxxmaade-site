


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, MouseEvent } from "react";

type FilterId = "all" | "mixed" | "acrylic" | "spray" | "2025" | "2024" | "2023";

type Artwork = {
  title: string;
  medium: string;
  year: string;
  image: string;
  alt: string;
  mediumKey: "mixed" | "acrylic" | "spray";
};

const artworks: Artwork[] = [
  {
    title: "frequent (ly)",
    medium: "mixed media on canvas",
    year: "2025",
    image: "frequent.JPG",
    alt: "abstract mixed media chaos, harnessed.",
    mediumKey: "mixed",
  },
  {
    title: "up in flames",
    medium: "acrylic x spray paint x epoxys.",
    year: "2024",
    image: "/art/flames.JPG",
    alt: "acrylic and spray paint piece with fiery, layered textures.",
    mediumKey: "acrylic",
  },
  {
    title: "voyeure",
    medium: "acrylic x spraypaint",
    year: "2023",
    image: "/art/voy.JPG", // make sure this matches the real filename
    alt: "fragmented portrait exploring clarity and distortion.",
    mediumKey: "spray",
  },
  {
    title: "harrow",
    medium: "mixed media",
    year: "2025",
    image: "/art/harrow.png",
    alt: "a striking image of the viewers discretion.  surreal mixed media artwork depicting true strength.",
    mediumKey: "mixed",
  },
  {
    title: "a lesson in manifestation",
    medium: "mixed media",
    year: "2025",
    image: "/art/manifest.png",
    alt:"cosmic scenery sets this original piece off featuring deep to light value blues to create a sense of calm",
    mediumKey: "mixed",
  },
];


const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "all work" },
  { id: "mixed", label: "mixed media" },
  { id: "acrylic", label: "acrylic" },
  { id: "spray", label: "spray + epoxy" },
  { id: "2025", label: "2025" },
  { id: "2024", label: "2024" },
  { id: "2023", label: "2023" },
];

function GalleryCard({ art }: { art: Artwork }) {
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg) scale(1)"
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * 12;
    const rotateY = -((x - rect.width / 2) / rect.width) * 12;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`);
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div
      className="relative"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <article
        className="group relative rounded-xl bg-gray-900 border border-white/10 overflow-hidden
                   transition-transform duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
        style={{ transform }}
      >
        <div className="relative aspect-square overflow-hidden">
          {/* background image */}
          <Image
            src={art.image}
            alt={art.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />

          {/* title mask overlay */}
          <div
            className="absolute inset-0 bg-black flex items-center justify-center 
                        transition-opacity duration-500 group-hover:opacity-0"
          >
            <span
              className="text-5xl font-extrabold uppercase tracking-tight text-transparent bg-clip-text text-center px-6
                         drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]"
              style={{
                backgroundImage: `url(${art.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {art.title}
            </span>
          </div>
        </div>

        {/* info strip */}
        <div className="p-3 border-t border-white/10 flex justify-between items-center text-[11px] text-gray-400">
          <span>{art.medium}</span>
          <span className="text-gray-500">{art.year}</span>
        </div>
      </article>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredArtworks = artworks.filter((art) => {
    let matchesFilter = false;

    if (activeFilter === "all") {
      matchesFilter = true;
    } else if (
      activeFilter === "mixed" ||
      activeFilter === "acrylic" ||
      activeFilter === "spray"
    ) {
      matchesFilter = art.mediumKey === activeFilter;
    } else {
      matchesFilter = art.year === activeFilter;
    }

    const matchesSearch =
      !normalizedSearch ||
      art.title.toLowerCase().includes(normalizedSearch) ||
      art.medium.toLowerCase().includes(normalizedSearch) ||
      art.year.includes(normalizedSearch);

    return matchesFilter && matchesSearch;
  });

  const resultCount = filteredArtworks.length;
  const activeFilterLabel =
    filters.find((f) => f.id === activeFilter)?.label ?? "all work";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="w-full border-b border-white/10 px-6 py-4 flex justify-between items-center">
  <div className="text-lg font-bold">MaxxMade</div>
  <nav className="flex gap-6 text-sm text-gray-300">
    <a href="#work" className="hover:text-white transition">
      Work
    </a>
    <Link href="/commissions" className="hover:text-white transition">
      Commissions
    </Link>
    <a href="#about" className="hover:text-white transition">
      About
    </a>
    <Link href="/contact" className="hover:text-white transition">
      Contact
    </Link>
  </nav>
</header>



      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          you're right where you're supposed to be.
        </h1>
        <p className="text-gray-300 max-w-xl">
          This space exists for any and everyone who needs, wants, or craves it.
        </p>
      </section>

      {/* ABOUT SECTION */}
<section id="about" className="mt-32 px-6 max-w-5xl mx-auto">
 {/* ABOUT BANNER */}
<div className="mb-10">
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black group">
    <div className="relative h-40 sm:h-56 md:h-64">
      {/* base background (solid black) */}
      <div className="absolute inset-0 bg-black" />

      {/* full image, revealed on hover */}
      <Image
        src="/about/maxx-portrait.PNG" // make sure this matches your actual filename
        alt="Maxx in the studio"
        fill
        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-60"
        sizes="(min-width: 1024px) 800px, 100vw"
        style={{
          objectPosition: "center 20%", // move the visible area UP (tweak this if needed)
        }}
      />

      {/* ABOUT text with masked image inside the letters */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text uppercase text-center px-6
                     drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]"
          style={{
            backgroundImage: "url(/about/maxx-portrait.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 20%", // same framing as the hover image
          }}
        >
          ABOUT
        </span>
      </div>
    </div>
  </div>
</div>


  {/* ABOUT CONTENT GRID */}
  <div className="grid grid-cols-1 md:grid-cols-[1.2fr_minmax(0,1fr)] gap-10 items-start">
    <div>
      <p className="uppercase tracking-[0.25em] text-[10px] text-emerald-400 mb-3">
        about the artist
      </p>
      <h2 className="text-3xl font-semibold mb-4">
        emotional alchemy disguised as paintings.
      </h2>
      <p className="text-sm text-gray-300 leading-relaxed mb-3">
        I&apos;m Maxx Slater — the brain, hands, and probably the nervous
        system behind these pieces. A lot of my work lives in that space
        between overwhelm and clarity; the moment where everything feels
        like too much, but something true still pushes through.
      </p>
      <p className="text-sm text-gray-300 leading-relaxed mb-3">
        I work mostly in mixed media, acrylic, and whatever else a painting
        demands from me — plaster, spray paint, epoxy, flame, ink. Texture
        and layering are how I think. If it looks a little chaotic, that&apos;s
        because it is. But it&apos;s controlled chaos. Honest chaos.
      </p>
      <p className="text-sm text-gray-300 leading-relaxed">
        If you see yourself in any of this — the mess, the tenderness, the
        &quot;I don&apos;t have the words for it yet&quot; — then this space is
        for you. Look around. Stay a while. Come back different.
      </p>
    </div>

    <div className="space-y-4 text-xs text-gray-400">
      <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">
          mediums
        </p>
        <p>
          mixed media, acrylic, spray paint, epoxy, venetian plaster, and
          whatever else the piece asks for.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">
          themes
        </p>
        <p>
          time, memory, emotional overload, stillness after chaos, and the
          parts of yourself you don&apos;t show strangers.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">
          currently
        </p>
        <p>
          painting, building this site, and overthinking everything from
          color palettes to what it means to be &quot;seen&quot;.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* WORK SECTION */}
      <section id="work" className="mt-40 px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-2">
          the inner workings of my brain and creativity, yours to consume
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          filter, search, wander. take all the time you need.  Come back often.
        </p>

        {/* FILTER BAR: custom dropdown + search + count */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* custom dropdown */}
          <div className="relative text-xs">
            <button
              type="button"
              onClick={() => setFilterMenuOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-black px-3 py-1
                         text-gray-100 hover:border-emerald-400 hover:text-emerald-300 transition"
            >
              <span className="text-gray-400">filter:</span>
              <span>{activeFilterLabel}</span>
              <span className="text-gray-500 text-[10px]">
                {filterMenuOpen ? "▲" : "▼"}
              </span>
            </button>

            {filterMenuOpen && (
              <div className="absolute mt-2 w-40 rounded-xl border border-gray-700 bg-black/90 shadow-lg z-20">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => {
                      setActiveFilter(filter.id);
                      setFilterMenuOpen(false);
                    }}
                    className={
                      "w-full text-left px-3 py-2 text-xs hover:bg-emerald-500/10 hover:text-emerald-300 " +
                      (activeFilter === filter.id
                        ? "text-emerald-400"
                        : "text-gray-200")
                    }
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* search */}
          <div className="flex flex-col gap-1 sm:items-end sm:text-right text-xs">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search by title, medium, or year..."
              className="w-full sm:w-64 bg-black border border-gray-600 text-xs text-gray-100 rounded-full px-3 py-1
                         placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
            />
            <span className="text-[11px] text-gray-500">
              {resultCount === 0
                ? "no pieces match… try loosening the net."
                : resultCount === 1
                ? "1 piece found."
                : `${resultCount} pieces found.`}
            </span>
          </div>
        </div>

        {/* GRID with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((art, index) => (
            <div
              key={`${art.title}-${index}-${activeFilter}-${searchTerm}`}
              className="grid-item-animate"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <GalleryCard art={art} />
            </div>
          ))}
        </div>
            </section>
              {/* CONTACT CARD */}
      <section
        id="contact"
        className="mt-10 px-6 pb-16 max-w-5xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* subtle glow bar */}
          <div className="absolute inset-x-10 -top-[1px] h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0" />

          <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr_minmax(0,1fr)] gap-8 p-6 sm:p-8">
            <div>
              <p className="uppercase tracking-[0.25em] text-[10px] text-emerald-400 mb-2">
                contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                something here hit you?
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                whether you&apos;re thinking about a commission, have a space that
                needs a piece, or just want to say &quot;this made me feel
                something&quot; — I actually like hearing that.
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                <a
                  href="mailto:your-email@example.com"
                  className="rounded-full border border-emerald-400/70 bg-emerald-400/10 px-4 py-1.5 text-emerald-300 hover:bg-emerald-400/20 transition"
                >
                  email me
                </a>
                <a
                  href="https://instagram.com/maxxmade.artworks"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-600 px-4 py-1.5 text-gray-300 hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  dm on instagram
                </a>
                <Link
                  href="/commissions"
                  className="rounded-full border border-gray-600 px-4 py-1.5 text-gray-300 hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  commission info
                </Link>
              </div>
            </div>

            <div className="text-xs text-gray-400 space-y-2 md:text-right">
              <p className="text-gray-300">
                based in columbus, ohio<br />
                shipping available on select pieces.
              </p>
              <p>
                best for: people who feel a little too much and want their walls
                to admit it.
              </p>
              <p className="text-[11px] text-gray-500">
                you&apos;re not bothering me. if you&apos;re unsure, reach out anyway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-20 px-6 py-10 text-xs text-gray-400">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="uppercase tracking-[0.2em] text-[10px] text-gray-500">
              maxx slater
            </p>
            <p className="text-gray-300 text-sm">
              emotional alchemy, mixed media, and controlled chaos.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1">
            <div className="flex gap-4">
              <a
                href="mailto:maxx@maxxmadeartworks.com"
                className="hover:text-emerald-300 transition"
              >
                email
              </a>
              <a
                href="https://instagram.com/maxxmaade"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300 transition"
              >
                instagram
              </a>
              <a
                href="/commissions"
                className="hover:text-emerald-300 transition"
              >
                commissions
              </a>
            </div>
            <p className="text-[10px] text-gray-500">
              © {new Date().getFullYear()} maxxmaade. all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
