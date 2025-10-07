"use client"

import { motion } from "framer-motion"

const journals = [
  { name: "IEEE", logo: "IEEE" },
  { name: "Springer", logo: "Springer" },
  { name: "Elsevier", logo: "Elsevier" },
  { name: "ACM", logo: "ACM" },
  { name: "arXiv", logo: "arXiv" },
  { name: "Nature", logo: "Nature" },
  { name: "Science", logo: "Science" },
  { name: "PLOS", logo: "PLOS" },
]

export default function JournalSlider() {
  return (
    <section className="py-16 px-8 bg-gray-50 border-y-2 border-red-100">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-muted-foreground mb-2">Trusted Data Sources</h2>
          <p className="text-muted-foreground">Powered by leading academic publishers and repositories</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...journals, ...journals, ...journals].map((journal, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all grayscale hover:grayscale-0 group"
              >
                <span className="text-2xl font-bold text-gray-400 group-hover:text-red-600 transition-colors">
                  {journal.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
