import { FC } from "react"
import styled from "styled-components"

interface PropTypes {
  title: string
  subtitle: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`
const Headline = styled.h1`
  color: var(--primary-black-color);
  font-family: var(--secondary-font);
  line-height: 70px;
  font-weight: 800;
  font-size: 64px;
  max-width: 517px;
`
const Subtitle = styled.h2`
  color: var(--primary-black-color);
  font-family: var(--primary-font);
  opacity: 0.8;
  line-height: 30px;
  font-size: 20px;
  max-width: 412px;
  font-weight: 400;
  margin-top: 32px;
`

export const Title: FC<PropTypes> = ({ title, subtitle }) => (
  <Container>
    <Headline>{title}</Headline>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
)
