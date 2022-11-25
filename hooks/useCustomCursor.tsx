import { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";

const DOTSIZE = 5;
const LARGEDOTSIZE = 20;
const CIRCLESIZE = 30;

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
      mouseYRef.current = { mouseX: e.clientX, mouseY: e.clientY };
      let ele = window.document.querySelector(
        "a:hover, input:hover, button:hover, .hoverMouse:hover"
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
  }, []);

  return (
    <>
      <CustomCursorCircle
        style={{
          transform: `translate(${mouseX - CIRCLESIZE / 2 - 0 / 2 - 1}px, ${
            mouseY - CIRCLESIZE / 2 - 0 / 2 - 1
          }px)`,
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
    </>
  );
};
