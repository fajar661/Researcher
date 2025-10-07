"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-red-700 to-red-800 text-white">
      <div className="container mx-auto max-w-7xl px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Researcher</h3>
            <p className="text-red-100 leading-relaxed">
              Empowering researchers with ethical AI tools to accelerate discovery and maintain academic integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100 hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="mailto:hello@Researcher.com"
                className="flex items-center gap-2 text-red-100 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@Researcher.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-red-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-red-100 text-sm">© 2025 Researcher — Empowering Ethical Intelligence</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-red-100 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-red-100 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-red-100 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
