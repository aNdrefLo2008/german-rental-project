/** @format */

import {Hero} from "@/components/hero"
import {FeaturedApartments} from "@/components/featured-apartments"
import {About} from "@/components/about"
import {Contact} from "@/components/contact"
import FAQSection from "../components/FAQ"
import {CTASection} from "@/components/CTASection"
import ExplanationBoxes from "@/components/ExplanationBoxes"
import AboutUs from "@/components/AboutUs"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ExplanationBoxes />
      <FeaturedApartments />
      <AboutUs />
      <About />
      <FAQSection />
      <Contact />
      <CTASection />
    </main>
  )
}
