import { FC } from "react"
import styled from "styled-components"
import { blinkAnimation } from "../sharedstyles"

const Container = styled.span`
  ${blinkAnimation}
  &:after {
    content: "";
    color: var(--primary-blue-color);
    font-size: 16px;
    margin-left: 2px;
    border-right: solid 2px;
  }
`

export const TypingCursor: FC = () => <Container />
