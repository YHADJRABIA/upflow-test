import { FC } from "react"
import styled from "styled-components"
import { Block } from "./Block.styled"
import { Fonts } from "./Fonts.styled"
import { Job } from "./Job.styled"
import { Note } from "./Note.styled"
import { Pills } from "./Pills.styled"
import { Responsive } from "./Responsive.styled"
import { Tags } from "./Tags.styled"
import { Thumbs } from "./Thumbs.styled"

const column1 = [
  {
    color: "var(--primary-white-color)",
    textColor: "var(--primary-black-color)",
    opacity: 0.8,
    heading: "Job Editor",
    description:
      "Our easy-to-use editor allows you to create customized job ads within minutes.",
    element: <Job />,
  },
  {
    color: "var(--secondary-blue-color)",
    heading: "Create Custom Tags",
    textColor: undefined,
    opacity: undefined,
    description:
      "Tags help you organize and structure candidates more efficiently.",
    element: <Tags />,
  },
]

const column2 = [
  {
    color: "var(--primary-yellow-color)",
    heading: "Accept & Reject",
    textColor: undefined,
    opacity: undefined,
    description:
      "Automate tasks and save time. With one click you can accept or reject candidates.",
    element: <Thumbs />,
  },
  {
    color: "var(--primary-blue-color)",
    heading: "Responsive",
    textColor: undefined,
    opacity: undefined,
    description: "Flexible ads without being a techie.",
    element: <Responsive />,
  },
  {
    color: "var(--primary-red-color)",
    heading: "Boost Your Employer Branding",
    textColor: undefined,
    opacity: undefined,
    description:
      "Stand out with your branded careers site - including your company’s own custom URL.",
    element: <Fonts />,
  },
]

const column3 = [
  {
    color: "var(--primary-green-color)",
    heading: "Team Collaboration and Communication",
    textColor: undefined,
    opacity: undefined,
    description:
      "Exchange ideas and progress with team members to make the right decisions together.",
    element: <Pills />,
  },
  {
    color: "var(--primary-white-color)",
    textColor: "var(--primary-black-color)",
    opacity: 0.8,
    heading: "Notes",
    description: "Collect your thoughts and share them with colleagues.",
    element: <Note />,
  },
]

const columns = [column1, column2, column3]

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 88px;
`

export const Content: FC = () => (
  <Container>
    {columns.map((column, index) => (
      <Column key={index}>
        {column.map((item, idx) => (
          <Block
            key={idx}
            color={item.color}
            textColor={item.textColor}
            opacity={item.opacity}
            heading={item.heading}
            description={item.description}
          >
            {item.element}
          </Block>
        ))}
      </Column>
    ))}
  </Container>
)
