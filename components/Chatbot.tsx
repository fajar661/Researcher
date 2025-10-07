"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

const dummyMessages = [
  { id: 1, text: "Hello! I'm Researcher Assistant. How can I help you today?", sender: "bot" },
  { id: 2, text: "I can help you with research queries, citation formatting, and more!", sender: "bot" },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [messages, setMessages] = useState(dummyMessages)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    // Show notification popup after 3 seconds
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Hide notification after 5 seconds
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user" as const,
      }
      setMessages([...messages, userMessage])
      setInputValue("")

      // Simulate bot response after 1 second
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: "Thanks for your message! This is a demo response. AI logic will be added later.",
          sender: "bot" as const,
        }
        setMessages((prev) => [...prev, botMessage])
      }, 1000)
    }
  }

  return (
    <>
      {/* Notification Popup */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 bg-white rounded-lg shadow-xl p-4 max-w-xs"
          >
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="bg-red-100 rounded-full p-2">
                <MessageCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Need help with research?</p>
                <p className="text-gray-600 text-xs mt-1">Chat with our AI assistant!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 bg-white rounded-lg shadow-2xl w-96 h-[500px] flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <h3 className="font-semibold">Researcher Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-red-800 rounded p-1 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen)
          setShowNotification(false)
        }}
        className="fixed bottom-8 right-8 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
