import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const StyledButton = styled.button`
  padding: 8px 32px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: ${Colours.BackgroundColor};
  color: white;
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 16px;

  &:hover {
    border-color: ${Colours.TextRegular};
    box-shadow: 0px 0px 5px 5px ${Colours.NeonBlue};
    transition: ease-in 0.15s;
    color: ${Colours.NeonBlue};
  }
`;

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit";
}

const Button: React.FC<Props> = ({ onClick, children, className, type }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
