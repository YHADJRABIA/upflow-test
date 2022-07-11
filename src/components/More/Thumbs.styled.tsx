import { ThumbsUp } from "@/assets/ThumbsUp"
import { FC } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 345px;
`
const Circle = styled.div`
  background-color: var(--primary-white-color);
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px rgba(27, 27, 26, 0.12);
  border-radius: 50%;
  padding: 35px;
  margin-top: 92px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:first-child {
    margin-top: 124px;
    transform: rotate(180deg);
  }
  &:hover {
    opacity: 0.75;
  }
`

export const Thumbs: FC = () => (
  <Container>
    <Circle>
      <ThumbsUp color="var(--primary-red-color)" />
    </Circle>
    <Circle>
      <ThumbsUp color="var(--primary-green-color)" />
    </Circle>
  </Container>
)
