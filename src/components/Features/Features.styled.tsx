import { FC } from "react"
import styled from "styled-components"
import { Text } from "./Text.styled"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 104px;
`

const Row = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  &:not(:last-child) {
    margin-bottom: 80px;
  }
`

const Frame = styled.div`
  width: 740px;
  height: 380px;
  border-radius: 12px;
  background-color: var(--primary-gray-color);
  &:nth-child(n) {
    margin-right: 80px;
  }
`

export const Features: FC = () => (
  <Container>
    <Row>
      <Text
        color="var(--primary-green-color)"
        action="Organize"
        title="Organize your hiring"
        content="A hiring flow you can wrap your head around."
      />
      <Frame />
    </Row>
    <Row>
      <Text
        color="var(--primary-red-color)"
        action="Collaborate"
        title="Collaborate with your team"
        content="It’s easy for your whole team to join in on hiring."
      />
      <Frame />
    </Row>
    <Row>
      <Text
        color="var(--secondary-blue-color)"
        action="Connect"
        title="Connect with candidates"
        content="Stand out and show candidates who you are."
      />
      <Frame />
    </Row>
  </Container>
)
