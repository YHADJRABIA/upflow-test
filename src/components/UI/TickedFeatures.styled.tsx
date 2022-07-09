import { FC } from "react"
import styled from "styled-components"
import { Tickmark } from "@/assets/Tickmark"
import { preventSelection } from "../sharedstyles"

interface PropTypes {
  color?: string
}

const sellingPoints = ["Totally free for 15 days", "No credit card needed"]

const SellingPoint = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  & span {
    ${preventSelection}
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  ${SellingPoint}:not(:first-child) {
    margin-left: 28px;
  }
  z-index: 1;
`

const Text = styled.p<PropTypes>`
  font-family: var(--regular-font);
  color: ${({ color }) => color ?? "var(--primary-black-color)"};
  font-weight: 400;
  font-size: 16px;
  margin-left: 12px;
  opacity: 0.8;
`

export const TickedFeatures: FC<PropTypes> = ({ color }) => (
  <Container>
    {sellingPoints.map((item, idx) => (
      <SellingPoint key={idx}>
        <Tickmark color={color} />
        <Text color={color}>{item}</Text>
      </SellingPoint>
    ))}
  </Container>
)
