/** @format */

import {Hero} from "@/components/hero"
import {FeaturedApartments} from "@/components/featured-apartments"
import {About} from "@/components/about"
import {Contact} from "@/components/contact"
import FAQSection from "../components/FAQ"
import {CTASection} from "@/components/CTASection"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedApartments />
      <About />
      <Contact />
      <FAQSection />
      <CTASection />
    </main>
  )
}
