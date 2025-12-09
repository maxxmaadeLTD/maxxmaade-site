import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP BAR */}
      <header className="w-full border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← back to work
        </Link>
        <span className="text-xs tracking-[0.3em] uppercase text-gray-500">
          contact
        </span>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Let&apos;s talk about what you&apos;re seeing.
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
          You don&apos;t need the perfect pitch or the perfect words. If
          something in the work is sticking to your brain — a feeling, a color,
          an idea for your space — that&apos;s enough to start a conversation.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          I read everything myself. If I&apos;m slow to respond, it just means
          I&apos;m in the studio or covered in paint.
        </p>
      </section>

      {/* CONTACT CARD + DETAILS */}
      <section className="max-w-4xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8">
          {/* contact card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-x-10 -top-[1px] h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0" />

            <div className="relative p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-semibold">Direct contact</h2>
              <p className="text-sm text-gray-300">
                For commissions, existing work, collaborations, or just
                responding to something you saw in the gallery.
              </p>

              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-1">
                    email
                  </p>
                  <a
                    href="mailto:maxx@maxxmadeartworks.com"
                    className="text-emerald-300 hover:text-emerald-200 transition"
                  >
                    maxx@maxxmadeartworks.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-1">
                    instagram
                  </p>
                  <a
                    href="https://instagram.com/maxxmaade"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-emerald-300 transition"
                  >
                    @maxxmaade 
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 pt-2">
                if you&apos;re more of a &quot;see the process&quot; person, instagram
                is where you&apos;ll catch works in progress and studio chaos.
              </p>

              <div className="pt-3">
                <Link
                  href="/commissions"
                  className="inline-flex items-center gap-2 text-xs text-emerald-300 hover:text-emerald-200 transition"
                >
                  commissions page →
                </Link>
              </div>
            </div>
          </div>

          {/* small form */}
          <div className="rounded-3xl border border-white/10 bg-gray-900/40 p-6 sm:p-7 text-sm">
            <h2 className="text-base font-semibold mb-3">
              Or send a quick note
            </h2>
            <p className="text-xs text-gray-400 mb-4">
              Whatever it is that's on your mind, let me know by sending me a quick message.  I'd love to hear from you.
            </p>

            <form className="space-y-3">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                             placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                  placeholder="what should I call you?"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                             placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                  placeholder="where should I reply?"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full min-h-[120px] rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                             placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                  placeholder="what&apos;s on your mind?"
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-2xl border border-gray-600 px-5 py-2 text-xs text-gray-300
                           hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-10 px-6 py-8 text-xs text-gray-400">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-300 text-sm">
            thanks for even considering reaching out.
          </p>
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} maxxmade.
          </p>
        </div>
      </footer>
    </main>
  );
}
