import { Hero } from "@/components/hero"
import { FeaturedApartments } from "@/components/featured-apartments"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedApartments />
      <About />
      <Contact />
    </main>
  )
}
