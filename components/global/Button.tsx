import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const StyledButton = styled.button`
  padding: 11px 24px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colours.GunMetalBlue};
  background-color: transparent;
  color: white;
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 13px;
  letter-spacing: 0.03em;

  &:hover {
    border-color: ${Colours.NeonBlue};
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
