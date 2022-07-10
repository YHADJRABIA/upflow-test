import { FC, ReactNode } from "react"
import styled from "styled-components"

interface TextProps {
  textColor?: string
  opacity?: number
}

interface PropTypes {
  children: ReactNode
  heading: string
  description: string
  color: string
}

const Container = styled.div<PropTypes>`
  display: flex;
  width: 384px;
  min-height: 384px;
  overflow: hidden;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: ${({ color }) => color};
  padding: 40px;
  margin-top: auto;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px ${({ color }) => color};

  &:not(:last-child) {
    margin-right: 24px;
  }
`

const Text = styled.div``

const Title = styled.h4<TextProps>`
  font-family: var(--secondary-font);
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  color: ${({ textColor }) => textColor ?? "var(--primary-white-color)"};
  margin-bottom: 10px;
`

const Description = styled.p<TextProps>`
  font-family: var(--regular-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-width: 304px;
  color: ${({ textColor }) => textColor ?? "var(--primary-white-color)"};
  opacity: ${({ opacity }) => opacity ?? 0.9};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`

export const Block: FC<PropTypes & TextProps> = ({ ...props }) => (
  <Container {...props}>
    <Content>{props.children}</Content>
    <Text>
      <Title textColor={props.textColor}>{props.heading}</Title>
      <Description textColor={props.textColor} opacity={props.opacity}>
        {props.description}
      </Description>
    </Text>
  </Container>
)
