import { FC } from "react"
import styled from "styled-components"

interface PropTypes {
  width: number
  height: number
  color?: string
}

const Element = styled.div<PropTypes>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 8px;
  background-color: ${({ color }) => color ?? "var(--primary-gray-color)"};
`

export const Rectangle: FC<PropTypes> = ({ width, height, color }) => (
  <Element color={color} width={width} height={height} />
)
