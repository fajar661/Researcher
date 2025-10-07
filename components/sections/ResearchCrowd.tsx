"use client"

import { motion } from "framer-motion"

export default function ResearchCrowd() {
  const scholars = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `/scholars/scholar-${i + 1}.jpg`,
  }))

  return (
    <section className="relative py-16 px-8 bg-gradient-to-br from-red-600 to-red-700 overflow-hidden border-y-2 border-red-100">
      {/* Polka dot background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, white 3px, transparent 3px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-white text-center mb-12"
        >
          Our Research Crowd
        </motion.h2>

        {/* Responsive grid:
            - Mobile: 4 columns × 5 rows
            - Large screens: 10 columns × 2 rows
        */}
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6 justify-items-center">
          {scholars.map((scholar, index) => (
            <motion.div
              key={scholar.id}
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg border-2 border-white/50"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <img
                src={scholar.image || "/placeholder.svg"}
                alt={`Scholar ${scholar.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
