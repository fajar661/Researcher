"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Sparkles, BookOpen } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const words = ["Ethical", "Effortless", "Exciting"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayedText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1)
        } else {
          return currentWord.substring(0, prev.length + 1)
        }
      })
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-white px-8 py-12 md:py-12">
      {/* 🔹 Light pink mesh background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,182,193,0.95) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,182,193,0.95) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px", // medium-sized mesh
        }}
      />

      {/* Floating soft red shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-red-100/40 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Research Assistant
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Transform Your Research Flow with AI —{" "}
              <span className="inline-block relative h-[1.2em] w-[190px] align-bottom overflow-visible">
                <span className="absolute inset-0 text-red-600 text-[0.95em]">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore, summarize, and ideate with real-time academic insights powered by AI — without crossing ethical
              boundaries.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white rounded-2xl px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Try the Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 rounded-2xl px-8 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right side - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-12 md:mt-0 mb-0 md:mb-12"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div className="absolute inset-0" style={{ width: "100%", height: "100%" }}>
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="3"
                    strokeDasharray="1130"
                    strokeDashoffset="1130"
                    animate={{ strokeDashoffset: [1130, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </svg>
              </motion.div>

              {/* Central brain icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-48 h-48 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-24 h-24 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <BookOpen className="w-10 h-10 text-red-600" />
              </motion.div>

              <motion.div
                className="absolute bottom-2 right-1/2 translate-x-1/2 w-24 h-24 bg-red-100 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Sparkles className="w-12 h-12 text-red-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
