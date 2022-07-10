import { FC, ReactNode } from "react"
import styled from "styled-components"

interface PropTypes {
  bgColor?: string
  color?: string
  children: ReactNode
}

const Container = styled.div<PropTypes>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 12px;
  width: fit-content;
  border-radius: 12px;
  color: ${({ color }) => color ?? "var(--secondary-blue-color)"};
  background-color: ${({ bgColor }) => bgColor ?? "var(--primary-white-color)"};
  font-family: var(--regular-font);
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  font-size: 22px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`

export const Tag: FC<PropTypes> = ({ ...props }) => (
  <Container {...props}>{props.children}</Container>
)
