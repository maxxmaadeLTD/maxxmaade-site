"use client";
import Link from "next/link";
export default function CommissionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP BAR / SIMPLE NAV BACK */}
      <header className="w-full border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← back to work
        </Link>
        <span className="text-xs tracking-[0.3em] uppercase text-gray-500">
          commissions
        </span>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-semibold mb-4">
          Commissions & custom work
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
          Whether you&apos;re looking for a piece that holds a specific memory,
          a portrait that actually feels like you, or something wild for your
          walls that doesn&apos;t exist yet — this is where we start building it.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          No pressure, no fake urgency. Just tell me what you&apos;re thinking,
          and we&apos;ll see if it fits.
        </p>
      </section>

      {/* WHAT I OFFER */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-semibold mb-4">What I take on</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">Emotional portraits</h3>
            <p className="text-gray-400 text-xs">
              Mixed media or acrylic portraits that lean into feeling over
              photo-accuracy — great for people, couples, or even pets.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">Abstract statements</h3>
            <p className="text-gray-400 text-xs">
              Large or medium-scale abstract work for homes, studios, or
              businesses that want something bold, textured, and alive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">Concept-driven pieces</h3>
            <p className="text-gray-400 text-xs">
              Time, memory, consciousness, grief, growth — if you have a
              concept you can&apos;t shake, we can build a piece around it.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
  <h2 className="text-xl font-semibold mb-4">How it works</h2>

  <div className="space-y-4 text-sm">
    {/* STEP 01 */}
    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/60 group">
      {/* river background */}
      <div className="absolute inset-0 river-gradient opacity-80" />
      {/* dark overlay to keep it moody */}
      <div className="absolute inset-0 bg-black/80" />

      {/* default view: big masked step number */}
      <div className="relative z-10 flex min-h-[120px] sm:min-h-[140px] items-center px-6 py-6 
                      transition-opacity duration-500 group-hover:opacity-0">
        <span className="river-text text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text">
          .01 HOW THE PROCESS STARTS
        </span>
      </div>

      {/* hover view: text content */}
      <div className="absolute inset-0 z-20 flex items-center px-6 py-6 opacity-0 
                      transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <h3 className="text-sm font-semibold mb-1">You tell me the vibe</h3>
          <p className="text-xs text-gray-200 leading-relaxed">
            You share the story, feelings, colors, or references that matter to you.
            You don&apos;t have to speak &quot;art language&quot; — just be honest.
          </p>
        </div>
      </div>
    </div>

    {/* STEP 02 */}
    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/60 group">
      <div className="absolute inset-0 river-gradient opacity-80" />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 flex min-h-[120px] sm:min-h-[140px] items-center px-6 py-6 
                      transition-opacity duration-500 group-hover:opacity-0">
        <span className="river-text text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text">
         .02 THIS IS YOUR NEXT STEP
        </span>
      </div>

      <div className="absolute inset-0 z-20 flex items-center px-6 py-6 opacity-0 
                      transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <h3 className="text-sm font-semibold mb-1">
            We define size, budget, and timeline
          </h3>
          <p className="text-xs text-gray-200 leading-relaxed">
            Together we pick a size, medium, and general direction that fits your space
            and budget. I&apos;ll give you a clear estimate before anything starts.
          </p>
        </div>
      </div>
    </div>

    {/* STEP 03 */}
    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/60 group">
      <div className="absolute inset-0 river-gradient opacity-80" />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 flex min-h-[120px] sm:min-h-[140px] items-center px-6 py-6 
                      transition-opacity duration-500 group-hover:opacity-0">
        <span className="river-text text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text">
          .03 THE NEXT TO LAST
        </span>
      </div>

      <div className="absolute inset-0 z-20 flex items-center px-6 py-6 opacity-0 
                      transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <h3 className="text-sm font-semibold mb-1">
            I sketch + send a loose concept
          </h3>
          <p className="text-xs text-gray-200 leading-relaxed">
            You&apos;ll get a rough sketch or mockup to confirm the direction.
            This is where we adjust anything that doesn&apos;t feel right yet.
          </p>
        </div>
      </div>
    </div>

    {/* STEP 04 */}
    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/60 group">
      <div className="absolute inset-0 river-gradient opacity-80" />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 flex min-h-[120px] sm:min-h-[140px] items-center px-6 py-6 
                      transition-opacity duration-500 group-hover:opacity-0">
        <span className="river-text text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text">
          .04 YOUR COMMISSION IS IN THE WORKS
        </span>
      </div>

      <div className="absolute inset-0 z-20 flex items-center px-6 py-6 opacity-0 
                      transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <h3 className="text-sm font-semibold mb-1">
            Then I disappear into the studio
          </h3>
          <p className="text-xs text-gray-200 leading-relaxed">
            I handle the messy, emotional part. You&apos;ll get a final reveal,
            and we handle delivery or pickup from there.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* COMMISSION FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold mb-4">Commission request</h2>
        <p className="text-gray-400 text-sm mb-6">
          Fill this out with as much or as little detail as you have right now.
          I&apos;ll get back to you with questions, pricing, and next steps.
        </p>

        <form className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              What are you looking for?
            </label>
            <select
              className="w-full rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                         focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
            >
              <option>emotional portrait</option>
              <option>abstract piece for my space</option>
              <option>concept-driven / story-based work</option>
              <option>not sure yet, help me decide</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Approximate size / scale
              </label>
              <input
                type="text"
                className="w-full rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                           placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                placeholder="ex: 24x36, large wall, small piece, etc."
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Budget range (USD)
              </label>
              <input
                type="text"
                className="w-full rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                           placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                placeholder="rough range is totally fine"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Timeline / deadline
            </label>
            <input
              type="text"
              className="w-full rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                         placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
              placeholder="specific date, rough month, or 'whenever it&apos;s ready'"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Tell me about the piece you&apos;re imagining
            </label>
            <textarea
              className="w-full min-h-[140px] rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                         placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
              placeholder="feelings, colors, references, who/what it&apos;s for, where it will live..."
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              How did you find my work?
            </label>
            <input
              type="text"
              className="w-full rounded-xl bg-black border border-gray-700 px-3 py-2 text-sm text-gray-100
                         placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
              placeholder="@maxxmaaade, friend, gallery, etc."
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-emerald-400 bg-emerald-400 
                       px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:bg-emerald-300
                       transition"
          >
            Send request
          </button>

          <p className="mt-3 text-[11px] text-gray-500">
            This form doesn&apos;t lock you into anything. It just starts the
            conversation.
          </p>
        </form>
            </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-10 px-6 py-8 text-xs text-gray-400">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-300 text-sm">
            ready when you are. no rush, no pressure.
          </p>
          <div className="flex flex-col sm:items-end gap-1">
            <a
              href="mailto:maxx@maxxmadeartworks.com"
              className="hover:text-emerald-300 transition"
            >
              or email me directly
            </a>
            <p className="text-[10px] text-gray-500">
              © {new Date().getFullYear()} maxxmaade.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

    

