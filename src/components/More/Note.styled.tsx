import { FC } from "react"
import styled from "styled-components"
import { TypingCursor } from "../UI/TypingCursor.styled"

const Container = styled.div`
  background-color: var(--primary-gray-color);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px 31px 76px 20px;
`
const NoteText = styled.p`
  font-family: var(--regular-font);
  color: var(--primary-black-color);
  opacity: 0.6;
  font-size: 14px;
  line-height: 19.6px;
`

export const Note: FC = () => (
  <Container>
    <NoteText>
      Strong Yes! We should move forward with him and see how it goes :) He has
      demonstrated all the soft skills we were looking for
      <TypingCursor />
    </NoteText>
  </Container>
)
