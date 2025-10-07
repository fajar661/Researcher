"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Lightbulb, PenTool, BookMarked, Search, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    id: "summarizer",
    title: "Paper Summarizer",
    icon: FileText,
    content: {
      title: "Instant Paper Summaries",
      description: "Get comprehensive summaries of academic papers in seconds",
      example:
        '"This paper explores the application of transformer models in natural language processing, demonstrating a 23% improvement in accuracy over previous LSTM-based approaches. Key findings include enhanced contextual understanding and reduced training time."',
    },
  },
  {
    id: "gap-finder",
    title: "Gap Finder",
    icon: Lightbulb,
    content: {
      title: "Research Gap Detection",
      description: "Identify unexplored areas in your research domain",
      example:
        '🔍 Potential unexplored research area detected: "Limited studies on the intersection of quantum computing and machine learning optimization in healthcare diagnostics."',
    },
  },
  {
    id: "writing-mentor",
    title: "Writing Mentor",
    icon: PenTool,
    content: {
      title: "Ethical Writing Support",
      description: "Refine your academic writing while maintaining originality",
      example:
        'Original: "The results were good and showed improvement."\n\nSuggestion: "The experimental results demonstrated a statistically significant improvement (p < 0.05), with a 34% increase in efficiency compared to baseline measurements."',
    },
  },
  {
    id: "citation-tracker",
    title: "Citation Tracker",
    icon: BookMarked,
    content: {
      title: "Smart Citation Management",
      description: "Organize and format citations effortlessly",
      example:
        '[1] Smith, J., & Johnson, A. (2024). "Advances in Neural Networks." Journal of AI Research, 45(2), 123-145.\n\n[2] Chen, L. et al. (2023). "Deep Learning Applications." IEEE Transactions, 12(4), 567-589.',
    },
  },
  {
    id: "literature-review",
    title: "Literature Review",
    icon: Search,
    content: {
      title: "Automated Literature Analysis",
      description: "Synthesize findings from multiple research papers",
      example:
        "Analysis of 47 papers on climate change modeling:\n\n• 68% focus on temperature prediction models\n• 23% explore ocean acidification impacts\n• Emerging trend: Integration of satellite data with ML models\n• Common methodology: Ensemble learning approaches",
    },
  },
  {
    id: "trend-analysis",
    title: "Trend Analysis",
    icon: TrendingUp,
    content: {
      title: "Research Trend Insights",
      description: "Track emerging topics and citation patterns in your field",
      example:
        "📈 Trending in Computer Science (Last 6 months):\n\n1. Large Language Models (+156% citations)\n2. Quantum Machine Learning (+89% publications)\n3. Federated Learning (+67% interest)\n4. Explainable AI (+54% research output)",
    },
  },
]

export default function ProductDemo() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getReorderedFeatures = () => {
    const active = features[activeFeature]
    const others = features.filter((_, index) => index !== activeFeature)
    return [active, ...others]
  }

  return (
    <section className="py-24 px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            See <span className="text-red-600">Researcher</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI assistant transforms your research workflow
          </p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Left - Feature buttons */}
          <div className="space-y-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all ${
                    activeFeature === index
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold">{feature.title}</span>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right - Content display */}
          <Card className="p-8 rounded-3xl shadow-xl border-2 border-red-100 min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-3 text-red-600">{features[activeFeature].content.title}</h3>
                  <p className="text-lg text-muted-foreground">{features[activeFeature].content.description}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {features[activeFeature].content.example}
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </Card>
        </div>

        <div className="lg:hidden space-y-4">
          {getReorderedFeatures().map((feature, reorderedIndex) => {
            const originalIndex = features.findIndex((f) => f.id === feature.id)
            const Icon = feature.icon
            const isActive = originalIndex === activeFeature

            return (
              <div key={feature.id}>
                {/* Button */}
                <motion.button
                  onClick={() => setActiveFeature(originalIndex)}
                  className={`w-full text-left p-4 rounded-2xl transition-all ${
                    isActive ? "bg-red-600 text-white shadow-lg" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold">{feature.title}</span>
                  </div>
                </motion.button>

                {/* Content display - only show for active feature */}
                {isActive && (
                  <Card className="mt-4 p-6 rounded-3xl shadow-xl border-2 border-red-100">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold mb-2 text-red-600">{feature.content.title}</h3>
                          <p className="text-base text-muted-foreground">{feature.content.description}</p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
                          <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {feature.content.example}
                          </pre>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </Card>
                )}
              </div>
            )
          })}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`h-2 rounded-full transition-all ${
                activeFeature === index ? "w-8 bg-red-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
