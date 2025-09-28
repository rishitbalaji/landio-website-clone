"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, HelpCircle, ExternalLink, ChevronDown } from "lucide-react";

const faqData = [
  {
    value: "item-1",
    question: "What types of processes can you automate?",
    answer:
      "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.",
  },
  {
    value: "item-2",
    question: "Do I need technical knowledge to use your service?",
    answer:
      "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we’ll automate the rest.",
  },
  {
    value: "item-3",
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack.",
  },
  {
    value: "item-4",
    question: "How long does implementation take?",
    answer:
      "Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows.",
  },
  {
    value: "item-5",
    question: "Is your AI secure and compliant?",
    answer:
      "Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="w-full bg-background py-20 lg:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-border" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-semibold text-foreground mb-4">
            <Star className="h-4 w-4 text-primary" fill="currentColor" />
            FAQ'S
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Frequently Asked{" "}
            <span className="text-accent-italic">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Find quick answers to the most common support questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 bg-card border border-border rounded-xl p-8 flex flex-col items-start gap-6 h-full">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg border border-border bg-background">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground flex-grow">
              Still have questions? Feel free to get in touch with us today!
            </p>
            <a
              href="https://landio.framer.website/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <ExternalLink className="h-5 w-5" />
              Ask A Question
            </a>
          </div>

          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className={index === faqData.length - 1 ? "border-b-0" : ""}
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {item.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base text-muted-foreground pr-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;