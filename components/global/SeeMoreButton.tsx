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
    border-color: ${Colours.TextRegular};
    box-shadow: 0px 0px 5px 5px ${Colours.NeonBlue};
    transition: ease-in 0.15s;
    color: ${Colours.NeonBlue};
  }
`;

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const SeeMoreButton: React.FC<Props> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default SeeMoreButton;
