import { FC } from "react"
import styled from "styled-components"

const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  border-radius: 12px;
  border: 6px solid var(--primary-white-color);
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: var(--primary-white-color);
  }
`

const Desktop = styled(Container)`
  width: 284px;
  height: 180px;
  padding: 10px 10px 10px 69px; // Figma's padding - border width
  border-color: rgba(255, 255, 255, 0.2);
`

const Tablet = styled(Container)`
  width: 100%;
  padding: 22px 10px 10px 117px; // Border width needs to be substracted to Figma's nominal padding to get correct dimensions
  border-color: rgba(255, 255, 255, 0.4);
`

const Mobile = styled(Container)`
  height: 100%;
  width: 100%;
  border-color: rgba(255, 255, 255, 0.7);
`

export const Responsive: FC = () => (
  <Desktop>
    <Tablet>
      <Mobile />
    </Tablet>
  </Desktop>
)
