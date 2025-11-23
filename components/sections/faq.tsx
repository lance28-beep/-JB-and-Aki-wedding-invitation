"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/section";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "When and where is the wedding?",
    answer:
      "The wedding ceremony will be held on Saturday, January 24, 2026, at 9:30 AM at the Diocesan Shrine & Parish of Our Lady of the Abandoned, #3 Mt. Kennedy St., Mountainview Village, San Roque, Marikina City.\n\nThe reception will follow at 11:00 AM at The Grand Cobo Events Place, #3 Mt. Kennedy St., Mountainview Village, San Roque, Marikina City.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Guest Attire:\n• Ladies: Long gowns in earth tones (no prints, please)\n• Gentlemen: Barong Tagalog & black slacks or formal wear\n\nPrincipal Sponsors:\n• Ninangs: Champagne or Gold long gowns\n• Ninongs: Barong Tagalog & Black Slacks\n\nPlease adhere to the dress code to maintain the elegance of our celebration. We recommend earth tones and natural colors that match our wedding theme.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "Please confirm your attendance as soon as possible. We have reserved seats for you, and we look forward to celebrating with you! Your response helps us finalize our guest list and seating arrangements.\n\n[RSVP_LINK]Click here to RSVP[/RSVP_LINK]",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation. Thank you for your understanding and cooperation!",
  },
  {
    question: "Are children allowed?",
    answer:
      "We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event. Children in our family and the entourage are the exception. We appreciate your understanding!",
  },
  {
    question: "What is your gift policy?",
    answer:
      "We kindly ask for no boxed gifts. Monetary gifts are welcome but never expected. Your presence at our wedding is the most precious gift we could ask for! If you wish to send a monetary gift, you can scan the GCash QR code in our Gift Registry section.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We'd love for everyone to be fully present. Please avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories. We want everyone to be in the moment with us!",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please mention any dietary restrictions, allergies, or special meal requirements in the message field when you submit your RSVP, or contact Jay-R & Jen directly. We want to ensure everyone is comfortable and well-fed!",
  },
  {
    question: "How do I get to the venue?",
    answer:
      "You can use the 'Get Directions' button in the Event Details section to open Google Maps for easy navigation to both the ceremony (Diocesan Shrine & Parish of Our Lady of the Abandoned) and reception (The Grand Cobo Events Place) venues. Both venues are located at #3 Mt. Kennedy St., Mountainview Village, San Roque, Marikina City.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes! Both the ceremony and reception venues have parking facilities. We recommend arriving 15-20 minutes early to secure a spot and get settled comfortably. For the ceremony, guests should arrive by 9:00 AM.",
  },
  {
    question: "What should I do if I need to cancel or update my RSVP?",
    answer:
      "Please contact Jay-R & Jen as soon as possible if your plans change. You can also update your RSVP by searching for your name in the RSVP section and submitting a new response. We appreciate your timely communication!",
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
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#688277]/40 to-white/60 backdrop-blur-sm pointer-events-none" />
      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-normal text-white mb-4 sm:mb-6 uppercase tracking-[0.12em] sm:tracking-[0.15em]"
          style={{
            textShadow:
              "0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Frequently Asked Questions
        </h2>

        <p
          className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-white font-light max-w-xl mx-auto leading-relaxed tracking-wide px-4"
          style={{
            textShadow:
              "0 0 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Everything you need to know
        </p>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Main card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#0A3629]/20 to-[#126555]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative bg-white backdrop-blur-sm border-2 border-[#0A3629]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#0A3629]/50 overflow-hidden">
            {/* FAQ items */}
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const contentId = `faq-item-${index}`;
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#0A3629]/20 bg-white hover:bg-[#F9F8F4]/10 transition-all duration-300 hover:shadow-md hover:border-[#0A3629]/40 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#0A3629]/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className="font-[family-name:var(--font-crimson)] font-semibold text-[#0A3629] pr-3 sm:pr-4 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-[#126555] transition-colors duration-200">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#0A3629] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#126555]`}
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
                        <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-[#F9F8F4]/20 border-t border-[#0A3629]/20">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className="text-[#0A3629]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a
                                href="#guest-list"
                                className="text-[#0A3629] underline font-semibold hover:text-[#126555] transition-colors inline-flex items-center gap-1"
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
                            <p className="text-[#0A3629]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
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
    </Section>
  );
}
