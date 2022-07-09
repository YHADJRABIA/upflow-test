import { FC } from "react"
import styled from "styled-components"
import { Prompt } from "../UI/Prompt.styled"
import { Subtitle } from "../UI/Subtitle.styled"
import { Title } from "../UI/Title.styled"

interface PropTypes {
  color: string
  action: string
  title: string
  content: string
}

const Container = styled.div`
  margin-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 380px;
  h3 {
    margin-top: 12px;
    margin-bottom: 24px;
  }
`

export const Text: FC<PropTypes> = ({ ...props }) => (
  <Container>
    <Prompt color={props.color} text={props.action} />
    <Title align="left" text={props.title} />
    <Subtitle text={props.content} opacity={0.8} />
  </Container>
)
