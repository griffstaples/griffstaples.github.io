import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { Colours } from "styles/Colours";

const DOTSIZE = 5;
const LARGEDOTSIZE = 20;
const CIRCLESIZE = 30;

const CursorContainer = styled.div<{ hasMouseMoved: boolean }>`
  display: none;

  @media (min-width: ${Breakpoints.small}) {
    display: ${(props) => (props.hasMouseMoved ? "block" : "none")};
  }
`;

const CustomCursorCircle = styled.div`
  position: absolute;
  height: ${CIRCLESIZE}px;
  width: ${CIRCLESIZE}px;
  border-radius: ${CIRCLESIZE}px;
  background-color: transparent;
  border: 1px solid ${Colours.NeonBlue};
`;

const CustomCursorDot = styled.div`
  position: absolute;
  height: ${DOTSIZE}px;
  width: ${DOTSIZE}px;
  border-radius: ${DOTSIZE / 2}px;
  background-color: ${Colours.NeonBlue};
  opacity: 1;
`;

export const useCustomCursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [dotSize, setDotSize] = useState(DOTSIZE);
  const [opacity, setOpacity] = useState(1);

  const mouseYRef = useRef({ mouseX, mouseY });
  const circleRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);

      // style needs to be set here otherwise it's very laggy on firefox
      if (circleRef?.current) {
        circleRef.current.style.transform = `translate(${
          e.pageX - CIRCLESIZE / 2 - 1
        }px, ${e.pageY - CIRCLESIZE / 2 - 1}px)`;
      }
      mouseYRef.current = { mouseX: e.clientX, mouseY: e.clientY };

      let ele = window.document.querySelector(
        "a:hover, input:hover, button:hover, textarea:hover, .hoverMouse:hover"
      );

      if (ele !== null) {
        setDotSize(LARGEDOTSIZE);
        setOpacity(0.7);
      } else {
        setDotSize(DOTSIZE);
        setOpacity(1);
      }
    };

    const handleScroll = () => {
      setMouseY(mouseYRef?.current?.mouseY + scrollY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [circleRef]);

  return (
    <CursorContainer hasMouseMoved={!(mouseY === 0 && mouseX === 0)}>
      <CustomCursorCircle
        //@ts-ignore
        ref={circleRef}
        style={{
          transition: "transform 0.1s linear",
          pointerEvents: "none",
        }}
      />
      <CustomCursorDot
        style={{
          top: mouseY - dotSize / 2,
          left: mouseX - dotSize / 2,
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize,
          opacity: opacity,
          pointerEvents: "none",
        }}
      />
    </CursorContainer>
  );
};
