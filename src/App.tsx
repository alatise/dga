import logo from "./assets/logo.png";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <img
          src={logo}
          alt="Digital Governance Africa"
          className="mx-auto h-28 w-auto sm:h-40"
        />

        <div className="mx-auto mt-10 h-px w-16 bg-navy/20" />

        <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-navy/60 uppercase">
          Digital Governance Africa
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Our website is under construction
        </h1>

        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          We&apos;re building a new home for executive education, advisory, and
          research dedicated to advancing digital governance across Africa.
          Thank you for your patience — we&apos;ll be here soon.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-navy/70">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-navy" />
          <span className="tracking-wide">Launching soon</span>
        </div>

        <p className="mt-16 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Digital Governance Africa. All
          rights reserved.
        </p>
      </div>
    </main>
  );
}

export default App;
