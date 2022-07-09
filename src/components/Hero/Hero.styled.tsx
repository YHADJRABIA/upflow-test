import React, { FC } from "react"
import styled from "styled-components"
import { Button } from "../UI/Button.styled"
import { FloatingPill } from "../UI/FloatingPill.styled"
import { Brands } from "./Brands.styled"
import { Title } from "./Title.styled"

const tags = [
  { name: "Alexandre", color: "#FFB423", top: 70, right: 230 },
  { name: "Lily", color: "var(--secondary-blue-color)", top: 85, left: 205 },
  { name: "Bouba", color: "var(--primary-green-color)", top: 175, right: 270 },
  { name: "Charlotte", color: "var(--primary-red-color)", top: 185, left: 290 },
]

const Container = styled.div`
  position: relative;
  margin-top: 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Hero: FC = () => (
  <Container>
    {tags.map((tag, idx) => (
      <FloatingPill
        key={idx}
        color={tag.color}
        top={tag.top}
        right={tag.right ?? undefined}
        left={tag.left ?? undefined}
      >
        {tag.name}
      </FloatingPill>
    ))}
    <Title
      title="Where hiring comes together."
      subtitle="Everything you need to organise your hiring and make a great impression."
    />
    <Button variant="secondary">Get started — It’s free!</Button>
    <Brands text="Join thousands of teams hiring with Homerun" />
  </Container>
)
