"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Does this tool write research papers for me?",
    answer:
      "No. Researcher is designed to assist and enhance your research process, not replace it. We provide summaries, insights, and writing suggestions, but the original thinking, analysis, and authorship remain entirely yours. Our goal is to accelerate your workflow while maintaining academic integrity.",
  },
  {
    question: "Is the data used from ethical, open sources?",
    answer:
      "Absolutely. We only source data from reputable academic publishers, open-access repositories, and licensed databases. All content is properly attributed, and we never use copyrighted material without permission. Our commitment to ethical AI means transparency in every aspect of our data sourcing.",
  },
  {
    question: "Can I integrate this with Zotero or Notion?",
    answer:
      "Yes! Researcher offers seamless integrations with popular research tools including Zotero, Mendeley, Notion, and more. You can export citations, sync your research notes, and maintain your existing workflow while benefiting from AI-powered insights.",
  },
  {
    question: "How does it ensure plagiarism-free support?",
    answer:
      "Our AI is trained to provide suggestions and improvements without copying existing work. We use advanced paraphrasing detection and originality checks to ensure all suggestions maintain your unique voice and perspective. Additionally, we provide proper citation recommendations for any referenced ideas.",
  },
  {
    question: "What makes Researcher different from ChatGPT?",
    answer:
      "Unlike general-purpose AI, Researcher is specifically trained on academic literature and research methodologies. We understand citation formats, research gaps, academic writing conventions, and ethical guidelines. Our tools are purpose-built for researchers, not general conversation.",
  },
  {
    question: "Is my research data secure and private?",
    answer:
      "Yes. We take data security seriously. All your research data is encrypted, never shared with third parties, and you maintain full ownership. We comply with GDPR and other data protection regulations. You can delete your data at any time.",
  },
]

export default function FAQ() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about Researcher</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-red-100 rounded-2xl px-6 data-[state=open]:border-red-300 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
