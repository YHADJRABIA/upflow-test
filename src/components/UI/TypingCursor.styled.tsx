import styled from "styled-components"
import { blinkAnimation } from "../sharedstyles"

export const TypingCursor = styled.span`
  ${blinkAnimation}
  &:after {
    content: "";
    color: var(--primary-blue-color);
    font-size: 16px;
    margin-left: 2px;
    border-right: solid 2px;
    vertical-align: middle;
  }
`
