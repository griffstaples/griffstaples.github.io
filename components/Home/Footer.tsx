import { Spaceship } from "components/global/Attributions";
import React from "react";
import styled from "styled-components";
import { Attribution } from "types/Attribution";

const FooterContainer = styled.div`
  margin-top: 32px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const DividingLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: white;
  opacity: 0.1;
  margin: 16px 0;
`;

const AttributionsContainer = styled.div`
  opacity: 1;
  color: white;
  opacity: 0.5;
  font-size: 8px;
  text-align: center;
`;
interface Props {
  children: React.ReactNode;
}

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <FooterContainer>
      <DividingLine />
      <AttributionsContainer>
        <Spaceship />
        {children}
      </AttributionsContainer>
    </FooterContainer>
  );
};

export default Footer;
