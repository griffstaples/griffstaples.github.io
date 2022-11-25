import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Colours } from "styles/Colours";

const Container = styled.div`
  display: flex;
  justify-content: left;
`;

const BlinkAnimation = keyframes`
  0%{
    opacity:1;
  }
  30%{
    opacity:0;
  }
  100%{
    opacity:1;
  }

`;

const Block = styled.div<{ isBlinking: boolean }>`
  display: inline-block;
  width: 50px;
  height: 65px;
  background-color: ${Colours.TextRegular};
  animation: ${(props) => (props.isBlinking ? BlinkAnimation : null)};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

interface Props {
  message: string;
}

export const TypingLetters: React.FC<Props> = ({ message }) => {
  const [letters, setLetters] = useState<string>("");
  const [letterIndex, setLetterIndex] = useState(0);

  const setLettersSlowly = useCallback(() => {
    const currentChar = message.charAt(letterIndex);
    setLetters(letters + currentChar);
    setLetterIndex(letterIndex + 1);
  }, [letters, letterIndex, setLetters, setLetterIndex, message]);

  useEffect(() => {
    if (letterIndex == letters.length) {
      if (letterIndex == 0) {
        setTimeout(() => setLettersSlowly(), 500);
      } else {
        setTimeout(() => setLettersSlowly(), Math.random() * 50 + 50);
      }
    }
  }, [setLettersSlowly, letters, letterIndex]);

  return (
    <Container>
      {letters}
      <Block isBlinking={letters.length === message.length} />
    </Container>
  );
};
