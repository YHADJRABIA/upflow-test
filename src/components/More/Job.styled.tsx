import { FC } from "react"
import styled from "styled-components"
import { TypingCursor } from "../UI/TypingCursor.styled"

const Container = styled.div`
  display: flex;
  width: 100%;
`

const Text = styled.h3`
  font-size: 52px;
  line-height: 52px;
  font-family: var(--secondary-font);
  margin-right: -50px;
  font-weight: 800;
  margin-top: 102px;
  margin-bottom: 78px;
  ${TypingCursor} {
    &:after {
      margin-left: 0;
      font-size: 56px;
      border-width: 4px;
    }
  }
`

export const Job: FC = () => (
  <Container>
    <Text>
      Head of S<TypingCursor />
      ales
    </Text>
  </Container>
)
