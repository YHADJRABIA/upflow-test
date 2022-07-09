import { FC } from "react"
import styled from "styled-components"
import { Button } from "../UI/Button.styled"
import { CustomLink } from "../UI/Link.styled"

const Container = styled.div`
  display: flex;
  align-items: center;
  > a {
    margin-right: 24px;
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
