import { FC } from "react"
import styled from "styled-components"
import { Tag } from "../UI/Tag.styled"

const tags = [
  "management",
  "english",
  "culture",
  "remote",
  "fun",
  "communicator",
  "spanish",
  "french",
  "recruiter",
]

const Container = styled.div`
  margin-top: 140px;
  margin-bottom: 203px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 256px;
  align-items: center;
`

const List = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  > div:not(:last-child) {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  margin-bottom: 32px;
  text-transform: capitalize;
`

export const Tags: FC = () => (
  <Container>
    <List>
      {tags.map((tag, idx) => (
        <Tag key={idx}>{tag}</Tag>
      ))}
    </List>
    <Tag
      color="var(--primary-white-color)"
      bgColor="var(--primary-black-color)"
    >
      Add tags...
    </Tag>
  </Container>
)
