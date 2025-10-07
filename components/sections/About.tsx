"use client"

import { motion } from "framer-motion"
import { Users, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Built by Researchers, for Researchers
            </h2>

            <p className="text-lg leading-relaxed text-red-50">
              Born from the struggle of researchers drowning in endless PDFs, Researcher was built to simplify
              literature review, summarize insights, and maintain ethical writing standards.
            </p>

            <p className="text-lg leading-relaxed text-red-50">
              We believe AI should <strong className="text-white">accelerate human understanding</strong>, not replace
              it. Our mission is to empower researchers with tools that enhance creativity while preserving academic
              integrity.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-red-100">Researchers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-red-100">Papers Analyzed</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-red-100">Ethical</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="/researcher-workspace-with-books-and-laptop-abstrac.jpg" alt="Research workspace" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
