import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { Colours } from "styles/Colours";
import { archivoNarrow } from "styles/Fonts";

const Container = styled.div`
  display: flex;
  justify-content: left;
  font-family: ${archivoNarrow.style.fontFamily};
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
  width: 22px;
  height: 32.5px;
  background-color: ${Colours.TextRegular};
  animation: ${(props) => (props.isBlinking ? BlinkAnimation : null)};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @media (min-width: ${Breakpoints.small}) {
    width: 50px;
    height: 65px;
  }
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
