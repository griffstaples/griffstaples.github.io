import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const StyledButton = styled.button`
  height: 32px;
  padding: 8px 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: ${Colours.BackgroundColor};
  color: white;
  font-family: ${sourceCodePro.style.fontFamily};

  &:hover {
    border-color: ${Colours.NeonBlue};
    opacity: 0.5;
    cursor: pointer;
    transition: ease-in 0.2s;
  }
`;

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
