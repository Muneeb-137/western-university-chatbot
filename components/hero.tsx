import { MessageCircle, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-western-purple py-24 text-white lg:py-32 border-b-0">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.04)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
          <MessageCircle className="h-8 w-8" />
        </div>
        <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          UWO CHATBOT
          <br />
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
          Your virtual assistant for course registration, financial aid,
          transcripts, and more. Get quick answers to your questions about
          student services at Western.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#topics"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-western-purple transition-colors hover:bg-white/90"
          >
            Explore Topics
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#faculties"
            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Browse Faculties
          </a>
        </div>
      </div>
    </section>
  )
}
