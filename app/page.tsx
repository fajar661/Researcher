import Hero from "@/components/sections/Hero"
import ProductDemo from "@/components/sections/ProductDemo"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import JournalSlider from "@/components/sections/JournalSlider"
import ResearchCrowd from "@/components/sections/ResearchCrowd"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/sections/Footer"
import BackToTop from "@/components/BackToTop"
import Chatbot from "@/components/Chatbot"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductDemo />
      <About />
      <Services />
      <JournalSlider />
      <ResearchCrowd />
      <FAQ />
      <Footer />
      <BackToTop />
      <Chatbot />
    </main>
  )
}
