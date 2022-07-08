import { FC } from "react"
import styled from "styled-components"
import Image, { ImageProps } from "next/image"
import Link, { LinkProps } from "next/link"

interface PropTypes extends ImageProps {
  title?: string
}

const Container = styled.div`
  margin: 7px 0;
`

export const Logo: FC<PropTypes & LinkProps> = ({ href, src, title }) => (
  <Container>
    <Link href={href} passHref>
      <a>
        <Image src={src} alt="logo" title={title} />
      </a>
    </Link>
  </Container>
)