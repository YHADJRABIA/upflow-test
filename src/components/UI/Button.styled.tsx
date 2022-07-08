import { Variant } from "@/types/UI"
import { ReactNode } from "react"
import styled from "styled-components"

interface PropTypes extends Variant {
  children: ReactNode
}

export const Button = styled.a<PropTypes>`
  font-family: var(--regular-font);
  cursor: pointer;
  padding: ${({ variant }) =>
    variant === "primary" ? "0 16px" : "13px 25px 13px 23px"};
  height: ${({ variant }) => (variant === "primary" ? "40px" : "57px")};
  font-size: ${({ variant }) => (variant === "primary" ? "16px" : "18px")};
  font-weight: 500;
  display: flex;
  align-items: center;
  width: fit-content;
  border: solid 1px ${({ color }) => color ?? "var(--primary-blue-color)"};
  border-radius: 8px;
  color: var(--primary-white-color);
  background-color: ${({ color }) => color ?? "var(--primary-blue-color)"};
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12),
    0px 0px 0px 1px ${({ color }) => color ?? "var(--primary-blue-color)"};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: var(--secondary-blue-color);
  }
`

Button.defaultProps = {
  variant: "primary",
}
