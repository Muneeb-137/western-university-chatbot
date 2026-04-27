import Link from "next/link";
import { topics } from "@/lib/topics";

export function TopicsSection() {
  return (
    <section id="topics" className="bg-background py-20 border-b-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            How Can We Help You?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            Select a topic below to view details or ask our chatbot for personalized assistance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-xl transition-all hover:shadow-lg hover:shadow-western-purple/10"
              style={{
                backgroundImage: `url(${topic.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-western-purple/60 transition-colors group-hover:bg-western-purple/50" />

              <div className="relative z-10 flex flex-col items-center gap-1.5 px-2 pb-3 text-center">
                <span className="text-xs font-semibold leading-tight text-white">
                  {topic.title}
                </span>
                <span className="text-[10px] font-medium text-white/80">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}