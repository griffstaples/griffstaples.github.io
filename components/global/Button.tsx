import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const StyledButton = styled.button`
  padding: 11px 24px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 13px;
  letter-spacing: 0.03em;
`;

const StyledPrimaryButton = styled(StyledButton)`
  border: none;
  background-color: ${Colours.NeonBlue};
  color: #06292d;
  font-weight: 700;

  &:hover {
    color: #06292d;
    opacity: 0.9;
  }
`;

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit";
}

export const PrimaryButton: React.FC<Props> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <StyledPrimaryButton
      className={className}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </StyledPrimaryButton>
  );
};
