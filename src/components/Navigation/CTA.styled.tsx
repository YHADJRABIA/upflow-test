import { FC } from "react"
import styled from "styled-components"
import { Button } from "../UI/Button.styled"
import { CustomLink } from "../UI/Link.styled"

const Container = styled.div`
  display: flex;
  align-items: center;

  a {
    transition: transform 0.2s ease-in-out;
    margin-right: 24px;
    &:hover {
      transform: scale(1.05);
    }
  }
`

export const CTA: FC = () => (
  <Container>
    <CustomLink href="/" variant="primary">
      Log in
    </CustomLink>
    <Button href="/">Start 14-day trial</Button>
  </Container>
)
