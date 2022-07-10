import { Triangle } from "@/assets/Triangle"
import { FC, ReactNode } from "react"
import styled from "styled-components"

interface PropTypes {
  children: ReactNode
  color: string
  top?: number
  left?: number
  right?: number
  bottom?: number
  zoom?: number
  zIndex?: number
}

const Container = styled.div<PropTypes>`
  position: relative;
  cursor: pointer;
  z-index: ${({ zIndex }) => zIndex ?? 1};
  top: ${({ top }) => (top ? `${top}px` : "")};
  left: ${({ left }) => (left ? `${left}px` : "")};
  right: ${({ right }) => (right ? `${right}px` : "")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : "")};
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(27, 27, 26, 0.02),
    0px 2px 8px rgba(27, 27, 26, 0.04);
  background-color: ${({ color }) => color};
  float: left;
  clear: left;
  transform: ${({ zoom }) => (zoom ? `scale(${zoom})` : "")};

  svg {
    transform: translate(-60%, -50%);
    position: absolute;
    float: left;
  }
`

const Text = styled.p`
  line-height: 26px;
  padding: 0 8px;
  font-family: var(--regular-font);
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-white-color);
`

export const FloatingPill: FC<PropTypes> = ({
  children,
  color,
  top,
  right,
  bottom,
  left,
  zoom,
  zIndex,
}) => (
  <Container
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    color={color}
    zoom={zoom}
    zIndex={zIndex}
  >
    <Triangle color={color} />
    <Text>{children}</Text>
  </Container>
)
