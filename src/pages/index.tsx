import Head from "next/head"
import { Container } from "@/components/sharedstyles"
import { Nav } from "@/components/Navigation/Nav.styled"
import { Hero } from "@/components/Hero/Hero.styled"
import { BottomTrial } from "@/components/BottomTrial/BottomTrial.styled"
import { More } from "@/components/More/More.styled"
import { MiddleTrial } from "@/components/MiddleTrial/MiddleTrial.styled"
import { Features } from "@/components/Features/Features.styled"
import { Product } from "@/components/Product/Product.styled"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Upflow test</title>
        <meta
          name="description"
          content="Technical assessment made with TypeScripted Next.js & Styled Components."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
