import { Container } from "@/components/sharedstyles"
import { Nav } from "@/components/Navigation/Nav.styled"
import { Hero } from "@/components/Hero/Hero.styled"
import { BottomTrial } from "@/components/BottomTrial/BottomTrial.styled"
import { More } from "@/components/More/More.styled"
import { MiddleTrial } from "@/components/MiddleTrial/MiddleTrial.styled"
import { Features } from "@/components/Features/Features.styled"
import { Product } from "@/components/Product/Product.styled"
import SEO from "@/components/SEO/SEO"

export default function Home() {
  return (
    <Container>
      <SEO
        title="Upflow test"
        description="Technical assessment made with TypeScripted Next.js and Styled Components."
        keywords="Yacine Hadj Rabia, Upflow, NextJS, ReactJS, TypeScript, JavaScript, Styled Components."
      >
        <link rel="icon" href="/favicon.ico" />
      </SEO>
      <Nav />
      <Hero />
      <Product />
      <Features />
      <MiddleTrial />
      <More />
      <BottomTrial />
    </Container>
  )
}
