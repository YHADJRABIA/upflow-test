import { FC } from "react"
import styled from "styled-components"

interface PropTypes {
  text: string
  color: string
  align?: "left" | "center" | "right"
}

const Text = styled.p<PropTypes>`
  color: ${({ color }) => color ?? "var(--secondary-blue-color)"};
  text-align: ${({ align }) => align ?? "left"};
  font-family: var(--secondary-font);
  font-weight: 800;
  font-size: 16px;
`

export const Prompt: FC<PropTypes> = ({ ...props }) => (
  <Text align={props.align} text={props.text} color={props.color}>
    {props.text}
  </Text>
)
