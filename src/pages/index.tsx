import Head from "next/head"
import { Container, Main } from "@/components/sharedstyles"
import { Nav } from "@/components/Navigation/Nav.styled"
import { Hero } from "@/components/Hero/Hero.styled"

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
      <Main></Main>
    </Container>
  )
}
