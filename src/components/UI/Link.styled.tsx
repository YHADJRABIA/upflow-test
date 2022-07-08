import { Variant } from "@/types/UI"
import Link, { LinkProps } from "next/link"
import { FC } from "react"
import styled from "styled-components"

interface PropTypes extends Variant {
  children: string
}

const StyledLink = styled.a<Variant>`
  font-family: var(--regular-font);
  font-size: 16px;
  font-weight: 500;
  color: ${({ variant }) =>
    variant === "primary"
      ? "var(--primary-blue-color)"
      : "var(--primary-black-color)"};
`

export const CustomLink: FC<LinkProps & PropTypes> = ({
  href,
  children,
  variant,
}) => (
  <Link href={href} passHref>
    <StyledLink variant={variant}>{children}</StyledLink>
  </Link>
)

StyledLink.defaultProps = {
  variant: "secondary",
}
