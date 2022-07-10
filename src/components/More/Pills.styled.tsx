import { FC } from "react"
import styled from "styled-components"
import { FloatingPill } from "../UI/FloatingPill.styled"

const pills = [
  {
    name: "Lily",
    color: "var(--secondary-blue-color)",
    top: 380,
    left: 135,
    zoom: 5.65,
    zIndex: 2,
  },
  {
    name: "Bouba",
    color: "var(--primary-black-color)",
    top: 210,
    right: 85,
    zoom: 3.5,
  },
  {
    name: "Alexandre",
    color: "var(--primary-yellow-color)",
    top: 110,
    left: 118,
    zoom: 4.5,
    zIndex: 2,
  },
  {
    name: "Charlotte",
    color: "var(--primary-red-color)",
    top: 380,
    right: 10,
    zoom: 3,
  },
]

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  width: 100%;

  > div {
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
`

export const Pills: FC = () => (
  <Container>
    {pills.map((tag, idx) => (
      <FloatingPill
        key={idx}
        color={tag.color}
        top={tag.top}
        right={tag.right ?? undefined}
        left={tag.left ?? undefined}
        zoom={tag.zoom}
        zIndex={tag.zIndex}
      >
        {tag.name}
      </FloatingPill>
    ))}
  </Container>
)
