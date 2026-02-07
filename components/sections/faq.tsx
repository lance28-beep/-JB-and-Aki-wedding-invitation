"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/section";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What time do I have to be at the church?",
    answer:
      "Ceremony starts at 1:30pm, kindly arrive at least 15 minutes before the ceremony.",
  },
  {
    question: "Can I bring a +1?",
    answer:
      "Due to limited capacity, we kindly ask that only guests whose names are listed on the invitation attend. If your invitation includes a plus one, it will be clearly indicated. We truly appreciate your understanding and cooperation.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, parking will be available at the church and the venue. Additional details will be provided closer to the date.",
  },
  {
    question: "Will the ceremony and reception be held at the same venue?",
    answer:
      "No, the ceremony and reception will be held at separate venues.",
  },
  {
    question: "How do I confirm my attendance?",
    answer:
      `Please confirm your attendance through the RSVP section on this website on or before ${siteConfig.details.rsvp.deadline}.\n\n[RSVP_LINK]Go to RSVP[/RSVP_LINK]`,
  },
  {
    question: "Can I take a picture during ceremony?",
    answer:
      "Yes, you may take photos or videos, as long as you do not obstruct the hired photographers and videographers, or interfere with other guests.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-[#EFCA93] backdrop-blur-sm pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-bold text-[#9AAB89] mb-3 sm:mb-4 md:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] elegant-text-shadow">
          Frequently Asked Questions
        </h2>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
        <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#800A06]/80 font-light max-w-xl mx-auto leading-relaxed tracking-wide px-2 sm:px-4">
          Everything you need to know
        </p>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Main card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#9F8650]/20 to-[#800A06]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative elegant-card rounded-xl sm:rounded-2xl overflow-hidden border-4 border-[#9AAB89] premium-shadow hover:border-[#9AAB89]/80 transition-all duration-300">
            {/* Card content */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
              {/* FAQ items */}
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  const contentId = `faq-item-${index}`;
                  return (
                    <div
                      key={index}
                      className="rounded-lg sm:rounded-xl border border-[#800A06]/20 bg-white hover:bg-[#EFCA93]/10 transition-all duration-300 hover:shadow-md hover:border-[#800A06]/40 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="group w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#800A06]/50 focus-visible:ring-offset-2 transition-colors"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                      >
                        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[#800A06] pr-3 sm:pr-4 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-[#800A06]/80 transition-colors duration-200">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-[#800A06] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#800A06]/80`}
                          aria-hidden
                        />
                      </button>

                      <div
                        id={contentId}
                        role="region"
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-[#EFCA93]/20 border-t border-[#800A06]/20">
                            {item.answer.includes("[RSVP_LINK]") ? (
                              <p className="text-[#800A06]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
                                {item.answer.split("[RSVP_LINK]")[0]}
                                <a
                                  href="#guest-list"
                                  className="text-[#800A06] underline font-semibold hover:text-[#800A06]/80 transition-colors inline-flex items-center gap-1"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    document
                                      .getElementById("guest-list")
                                      ?.scrollIntoView({ behavior: "smooth" });
                                  }}
                                >
                                  {
                                    item.answer.match(
                                      /\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/,
                                    )?.[1]
                                  }
                                </a>
                                {item.answer.split("[/RSVP_LINK]")[1]}
                              </p>
                            ) : (
                              <p className="text-[#800A06]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
                                {item.answer}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
