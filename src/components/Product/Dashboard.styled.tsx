import { FC } from "react"
import styled from "styled-components"
import { shimmerAnimation } from "../sharedstyles"
import { Circles } from "./Circles.styled"
import { Rectangle } from "./Rectangle.styled"

const rectangles = [
  { width: 123 },
  { width: 230 },
  { width: 183 },
  { width: 47 },
  { width: 83 },
]

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-gray-color);
  height: 640px;
  width: 310px;
  border-radius: 12px 0 0 12px;
  box-shadow: 1px 0px 0px rgba(27, 27, 26, 0.12);
`
const Rectangles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  margin-left: 40px;
  margin-right: 40px;
  > div:not(:last-child) {
    margin-bottom: 36px;
  }
  ${shimmerAnimation}
`

const Square = styled.div`
  margin-left: 40px;
  margin-top: 188px;
`

export const Dashboard: FC = () => (
  <Container>
    <Circles />
    <Rectangles>
      {rectangles.map((rectangle, idx) => (
        <Rectangle
          key={idx}
          width={rectangle.width}
          height={24}
          color="var(--gray-background)"
        />
      ))}
    </Rectangles>
    <Square>
      <Rectangle width={64} height={64} color="var(--gray-background)" />
    </Square>
  </Container>
)
