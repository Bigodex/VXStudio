import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { UniquePages } from "@/components/unique-pages"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Examples } from "@/components/examples"
import { Steps } from "@/components/steps"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UniquePages />
        <Services />
        <Benefits />
        <Examples />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
