"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Shield, FolderOpen } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Search,
    title: "Smart Literature Search",
    description:
      "Scan and summarize academic papers in seconds. Our AI understands context and extracts key insights from thousands of sources.",
  },
  {
    icon: Lightbulb,
    title: "Research Gap Detection",
    description:
      "Identify underexplored areas in your domain. Discover opportunities for novel contributions and innovative research directions.",
  },
  {
    icon: Shield,
    title: "Ethical Writing Support",
    description:
      "Structure and refine content without plagiarism. Maintain academic integrity while improving clarity and impact.",
  },
  {
    icon: FolderOpen,
    title: "Reference Manager",
    description:
      "Manage citations and sources seamlessly. Automatic formatting in APA, MLA, Chicago, and more citation styles.",
  },
]

export default function Services() {
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
            Powerful Features for <span className="text-red-600">Modern Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your research workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 rounded-3xl border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all h-full group">
                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
