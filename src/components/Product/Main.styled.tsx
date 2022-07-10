import { FC } from "react"
import styled from "styled-components"
import { shimmerAnimation } from "../sharedstyles"
import { Rectangle } from "./Rectangle.styled"

const columns = [
  {
    fistRectangle: { width: 73, height: 20 },
    number: 5,
  },
  {
    fistRectangle: { width: 108, height: 20 },
    number: 3,
  },
  {
    fistRectangle: { width: 86, height: 20 },
    number: 4,
  },
  {
    fistRectangle: { width: 66, height: 20 },
    number: 5,
  },
]

const Container = styled.section`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 40px;
  margin-left: 40px;
  & > div:first-child {
    margin-bottom: 24px;
  }
  & > div:not(:first-child) {
    margin-bottom: 8px;
  }
  ${shimmerAnimation}
`
const Gradient = styled.div`
  position: absolute;
  width: 871px;
  height: 236px;
  left: 19px;
  top: 404px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  border-radius: 12px;
`

export const Main: FC = () => (
  <Container>
    {columns.map((column, idx) => (
      <Column key={idx}>
        <Rectangle
          key={idx}
          width={column.fistRectangle.width}
          height={column.fistRectangle.height}
        />
        {[...Array(column.number)].map((_, idx) => (
          <Rectangle key={idx} width={200} height={110} />
        ))}
      </Column>
    ))}
    <Gradient />
  </Container>
)
