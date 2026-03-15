import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LexAiSection from './components/LexAiSection'
import ProductsSection from './components/ProductsSection'
import FeaturesGrid from './components/FeaturesGrid'
import PrivacySection from './components/PrivacySection'
import SystemSlider from './components/SystemSlider'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-datalynx-primary selection:text-white">
      <Navbar />
      <Hero />
      <SystemSlider />
      <ProductsSection />
      <LexAiSection />
      <FeaturesGrid />
      <PrivacySection />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}