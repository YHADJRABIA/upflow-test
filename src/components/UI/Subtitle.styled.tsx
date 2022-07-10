import { FC } from "react"
import styled from "styled-components"

interface PropTypes {
  text: string
  align?: "left" | "center" | "right"
  opacity?: number
}

const Text = styled.h4<PropTypes>`
  font-family: var(--regular-font);
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: ${({ align }) => align ?? "left"};
  opacity: ${({ opacity }) => opacity ?? 1};
`

export const Subtitle: FC<PropTypes> = ({ text, align, opacity }) => (
  <Text align={align} text={text} opacity={opacity}>
    {text}
  </Text>
)
