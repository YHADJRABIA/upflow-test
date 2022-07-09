import { FC } from "react"
import styled from "styled-components"

const Container = styled.section`
  display: flex;
  height: 640px;
  width: 100%;
  margin-top: 104px;
  border-radius: 12px;
  box-shadow: 0px 48px 64px rgba(27, 27, 26, 0.02),
    0px 40px 40px rgba(27, 27, 26, 0.02), 0px 24px 24px rgba(27, 27, 26, 0.06),
    0px 4px 6px rgba(27, 27, 26, 0.08), 0px 2px 2px -1px rgba(27, 27, 26, 0.06),
    0px 12px 14px -8px rgba(27, 27, 26, 0.04),
    0px 0px 0px 1px rgba(27, 27, 26, 0.12);
`

export const Product: FC = () => <Container></Container>
