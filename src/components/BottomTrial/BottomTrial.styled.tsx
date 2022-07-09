import { FC } from "react"
import styled from "styled-components"
import { Button } from "../UI/Button.styled"
import { Prompt } from "../UI/Prompt.styled"
import { Title } from "../UI/Title.styled"
import { TickedFeatures } from "../UI/TickedFeatures.styled"

const Container = styled.div`
  margin: 104px 418px 1004px 418px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  ${Button} {
    margin-top: 40px;
    margin-bottom: 32px;
  }
  h3 {
    margin-top: 12px;
  }
`

export const BottomTrial: FC = () => (
  <Container>
    <Prompt
      color="var(--primary-blue-color)"
      align="center"
      text="What are you waiting for?"
    />
    <Title text="Start your free Homerun trial today" />
    <Button variant="secondary">Get started — It’s free!</Button>
    <TickedFeatures />
  </Container>
)
