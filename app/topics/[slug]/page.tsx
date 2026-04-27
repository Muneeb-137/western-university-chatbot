import Link from "next/link";
import { notFound } from "next/navigation";
import { topics } from "@/lib/topics";

type TopicPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;

  const topic = topics.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
        <Link href="/#topics" className="text-sm font-semibold text-purple-700">
          ← Back to services
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          {topic.title}
        </h1>

        <p className="mt-3 text-slate-600">{topic.description}</p>

        <div className="mt-8 rounded-xl bg-purple-50 p-5">
          <h2 className="text-lg font-bold text-purple-950">
            Need help with this topic?
          </h2>

          <p className="mt-2 text-sm text-purple-900">
            Ask the chatbot about {topic.title} or submit a help request.
          </p>

          <div className="mt-4 flex gap-3">
            <Link
              href="/"
              className="rounded-lg bg-purple-800 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-900"
            >
              Ask Chatbot
            </Link>

            <Link
              href="/help"
              className="rounded-lg border border-purple-800 px-4 py-2 text-sm font-semibold text-purple-800 hover:bg-purple-100"
            >
              Help Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}