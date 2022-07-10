import { FC } from "react"
import styled from "styled-components"
import { Text } from "./Text.styled"
import Feature1 from "@/assets/feature-1.svg"
import Feature2 from "@/assets/feature-2.svg"
import Feature3 from "@/assets/feature-3.svg"
import Image from "next/image"

const content = [
  {
    color: "var(--primary-green-color)",
    action: "Organize",
    title: "Organize your hiring",
    content: "A hiring flow you can wrap your head around.",
    image: Feature1,
  },
  {
    color: "var(--primary-red-color)",
    action: "Collaborate",
    title: "Collaborate with your team",
    content: "It’s easy for your whole team to join in on hiring.",
    image: Feature2,
  },
  {
    color: "var(--secondary-blue-color)",
    action: "Connect",
    title: "Connect with candidates",
    content: "Stand out and show candidates who you are.",
    image: Feature3,
  },
]

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  width: 100%;
`
const Row = styled.article`
  padding: 0 120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  span {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  &:nth-child(odd) {
    span {
      margin-left: 80px !important;
    }
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
    span {
      margin-right: 80px !important;
    }
  }
  &:not(:last-child) {
    margin-bottom: 80px;
  }
`

export const Features: FC = () => (
  <Container>
    {content.map((item, idx) => (
      <Row key={idx}>
        <Text
          color={item.color}
          action={item.action}
          title={item.title}
          content={item.content}
        />
        <Image src={item.image} />
      </Row>
    ))}
  </Container>
)
