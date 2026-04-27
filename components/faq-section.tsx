"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I register for courses at Western?",
    answer:
      "You can register for courses through the Student Center on the Western portal. Registration opens based on your current academic year and program. Make sure to check your enrollment appointment time and have your course selections ready in advance.",
  },
  {
    question: "When is the deadline to apply for OSAP?",
    answer:
      "The OSAP application typically opens in early spring for the following academic year. It is recommended to apply as early as possible — ideally by June — to ensure your funding is processed before the fall semester begins.",
  },
  {
    question: "How do I request an official transcript?",
    answer:
      "Official transcripts can be requested through the Office of the Registrar via the Western Student Services portal. There is a fee per transcript copy, and processing times vary depending on the time of year.",
  },
  {
    question: "What do I do if I want to change my program or major?",
    answer:
      "To change your program or major, you will need to submit a request through your faculty's academic counselling office. Some programs may have specific entry requirements or grade thresholds, so it is best to speak with an academic counsellor first.",
  },
  {
    question: "How do I apply for graduation/convocation?",
    answer:
      "You must apply to graduate through the Student Center before the posted deadline for your intended convocation term. Visit the Registrar's Office website for specific dates and instructions for your faculty.",
  },
  {
    question: "Where can I find information about tuition fees and payment deadlines?",
    answer:
      "Tuition fees and payment deadlines are posted each year on the Registrar's Office website. Fees vary by program and year of study. You can view your specific charges and due dates through the Student Center.",
  },
  {
    question: "What bursaries or financial aid options are available to me?",
    answer:
      "Western offers a range of bursaries, work-study positions, and emergency financial assistance programs. You can explore available opportunities through the financial aid section of the Student Services website or speak with a financial aid counsellor.",
  },
  {
    question: "How do I contact my academic counsellor?",
    answer:
      "Academic counsellors are available through your home faculty's student services office. You can book appointments online or visit in person during drop-in hours. Contact information for each faculty is listed on the Western website.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-western-purple md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-gray-500 md:text-lg">
            Quick answers to common student questions. Don&apos;t see yours? Ask the chatbot below.
          </p>
        </div>

        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-western-purple focus-visible:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-semibold text-gray-900 md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-western-purple transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 pt-1 text-sm leading-relaxed text-gray-600 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
