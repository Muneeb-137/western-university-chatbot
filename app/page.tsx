import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TopicsSection } from "@/components/topics-section"
import { FacultySection } from "@/components/faculty-section"
import { FAQSection } from "@/components/faq-section"
import { ChatWidget } from "@/components/chat-widget"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TopicsSection />
        <FacultySection />
        <FAQSection />
        <ChatWidget />
      </main>
      <Footer />
    </div>
  )
}
