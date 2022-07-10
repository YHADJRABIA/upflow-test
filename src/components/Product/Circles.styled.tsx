import { FC } from "react"
import styled from "styled-components"

interface PropTypes {
  color: string
}

const circles = [
  "var(--secondary-red-color)",
  "var(--secondary-yellow-color)",
  "var(--secondary-green-color)",
]

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  margin-top: 16px;
`

const Circle = styled.div<PropTypes>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`

export const Circles: FC = () => (
  <Container>
    {circles.map((color, idx) => (
      <Circle key={idx} color={color} />
    ))}
  </Container>
)
