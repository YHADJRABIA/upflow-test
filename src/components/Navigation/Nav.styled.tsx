import React, { FC } from "react"
import styled from "styled-components"
import logo from "~/logo.svg"
import { CTA } from "./CTA.styled"
import { Menu } from "./Menu.styled"
import { Logo } from "./Logo.styled"

const links = [
  { name: "Product", href: "/", dropdown: true },
  { name: "Pricing", href: "/", dropdown: false },
  { name: "Customers", href: "/", dropdown: false },
  { name: "Learn", href: "/", dropdown: true },
]

const Container = styled.nav`
  margin-top: 40px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Nav: FC = () => (
  <Container>
    <Logo href="/" src={logo} title="Logo" />
    <Menu links={links} />
    <CTA />
  </Container>
)
