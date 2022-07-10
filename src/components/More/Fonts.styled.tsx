import { Tickmark } from "@/assets/Tickmark"
import { FC } from "react"
import styled from "styled-components"

interface PropTypes {
  name: "Helvetica" | "Roboto" | "PT Serif" | "Avenir"
  selected: boolean
}

const fonts: PropTypes[] = [
  { name: "Helvetica", selected: false },
  { name: "Roboto", selected: true },
  { name: "PT Serif", selected: false },
  { name: "Avenir", selected: false },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  padding: 8px;
  height: 160px;
  border-radius: 12px;
  background-color: var(--primary-white-color);
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px rgba(27, 27, 26, 0.12);
`

const Font = styled.p<PropTypes>`
  display: flex;
  justify-content: ${({ selected }) =>
    selected ? "space-between" : "flex-start"};
  align-items: center;
  padding-left: 8px;
  padding-right: 12.5px;
  font-family: ${({ name }) => `${name}, Nunito`};
  font-size: 16px;
  color: ${({ selected }) =>
    selected ? "var(--primary-white-color)" : "var(--primary-black-color)"};
  background-color: ${({ selected }) =>
    selected ? "var(--primary-red-color)" : ""};
  border-radius: 8px;
  line-height: 36px;

  &:nth-child(odd) {
    font-weight: 700;
  }
  &:nth-child(even) {
    font-weight: 500;
  }
`

export const Fonts: FC = () => (
  <Container>
    {fonts.map((font, idx) => (
      <Font name={font.name} selected={font.selected} key={idx}>
        {font.name}
        {font.selected && (
          <Tickmark color="var(--primary-white-color)" strokeWidth={4} />
        )}
      </Font>
    ))}
  </Container>
)
