import Link from "next/link"
import { FC } from "react"
import Image from "next/image"
import styled from "styled-components"
import DownArrow from "@/assets/down-arrow.svg"

interface PropTypes {
  links: {
    name: string
    href: string
    dropdown: boolean
  }[]
}

const Container = styled.ul`
  display: flex;
  align-items: center;
  margin: 8px 32px;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  font-family: var(--regular-font);
  font-weight: 500;
  &:not(:last-child) {
    margin-right: 28px;
  }
  span {
    cursor: pointer;
    margin-left: 10px !important;
  }

  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--primary-blue-color);
  }
`

export const Menu: FC<PropTypes> = ({ links }) => (
  <Container>
    {links.map((link, id) => (
      <Item key={id}>
        <Link href={link.href} passHref>
          <a>{link.name}</a>
        </Link>
        {link.dropdown && <Image src={DownArrow} />}
      </Item>
    ))}
  </Container>
)
