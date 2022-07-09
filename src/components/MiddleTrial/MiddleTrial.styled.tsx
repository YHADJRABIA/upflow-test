import { FC } from "react"
import styled from "styled-components"
import { preventSelection } from "../sharedstyles"
import { Button } from "../UI/Button.styled"
import { Title } from "../UI/Title.styled"
import { TickedFeatures } from "../UI/TickedFeatures.styled"

const Container = styled.section`
  position: relative;
  margin-top: 104px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 72px;
  padding-right: 64px;
  border-radius: 12px;
  background-color: var(--primary-blue-color);
  min-height: 240px;
  width: 100%;
  text-align: center;
  ${Button} {
    margin-left: 32px;
  }
`

const BackgroundText = styled.span`
  font-family: var(--secondary-font);
  font-weight: 800;
  line-height: 128px;
  font-size: 168px;
  color: var(--primary-white-color);
  max-width: 611px;
  text-align: left;
  opacity: 0.08;
  position: absolute;
  top: 25px;
  left: -26px;
  ${preventSelection}
  z-index: 1;
`

export const MiddleTrial: FC = () => (
  <Container>
    <BackgroundText>Get started</BackgroundText>
    <Title
      color="var(--primary-white-color)"
      align="left"
      text="Start your free Homerun trial today"
    />
    <TickedFeatures color="var(--primary-white-color)" />
    <Button color="var(--primary-black-color)" variant="secondary">
      Get started — It’s free!
    </Button>
  </Container>
)
