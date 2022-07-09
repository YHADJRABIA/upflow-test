import { FC } from "react"
import styled from "styled-components"

interface PropTypes {
  text: string
  color?: string
  align?: "left" | "center" | "right"
}

const Text = styled.h3<PropTypes>`
  font-family: var(--secondary-font);
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  max-width: 455px;
  color: ${({ color }) => color ?? "var(--primary-black-color)"};
  text-align: ${({ align }) => align ?? "center"};
  z-index: 2;
`

export const Title: FC<PropTypes> = ({ ...props }) => (
  <Text color={props.color} align={props.align} text={props.text}>
    {props.text}
  </Text>
)
