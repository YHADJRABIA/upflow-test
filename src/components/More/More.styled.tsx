import { FC } from "react"
import styled from "styled-components"
import { Subtitle } from "../UI/Subtitle.styled"
import { Title } from "../UI/Title.styled"

const Container = styled.section`
  margin-top: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-gray-color);
  border-radius: 12px;
  padding: 104px 64px 64px;
  width: 100%;
  min-height: 1708px;
  h3 {
    margin-bottom: 24px;
  }
`

export const More: FC = () => (
  <Container>
    <Title text="But wait. There is more" />
    <Subtitle
      text="Leverage winning strategies to best promote jobs. Find the ideal candidate
      faster."
      align="center"
      opacity={0.8}
    />
  </Container>
)
