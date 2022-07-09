import { FC } from "react"
import styled from "styled-components"
import Image from "next/image"
import Google from "@/assets/google.svg"
import Apple from "@/assets/apple.svg"
import Facebook from "@/assets/facebook.svg"
import Spotify from "@/assets/spotify.svg"
import Dropbox from "@/assets/dropbox.svg"
import Github from "@/assets/github.svg"
import Netflix from "@/assets/netflix.svg"
import { preventSelection } from "../sharedstyles"

interface PropTypes {
  text: string
}

const brands = [
  { svg: Google, name: "Google" },
  { svg: Apple, name: "Apple" },
  { svg: Facebook, name: "Facebook" },
  { svg: Spotify, name: "Spotify" },
  { svg: Dropbox, name: "Dropbox" },
  { svg: Github, name: "Github" },
  { svg: Netflix, name: "Netflix" },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 104px;
  a {
    margin-right: 24px;
  }
  width: 100%;
`

const Text = styled.p`
  font-family: var(--regular-font);
  opacity: 0.5;
  font-weight: 400;
`

const Logos = styled.div`
  width: 100%;
  color: var(--primary-black-color);
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & > span {
    cursor: pointer;
    ${preventSelection}
    opacity: 0.5 !important;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8 !important;
    }
    &:not(:last-child) {
      margin-right: 48px !important;
    }
  }
`

export const Brands: FC<PropTypes> = ({ text }) => (
  <Container>
    <Text>{text}</Text>
    <Logos>
      {brands.map((brand, idx) => (
        <Image key={idx} src={brand.svg} alt={brand.name} title={brand.name} />
      ))}
    </Logos>
  </Container>
)
