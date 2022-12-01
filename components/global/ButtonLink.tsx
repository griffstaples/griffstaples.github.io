import Link from "next/link";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const LinkContainer = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 8px 32px;
  border-radius: 32px;
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
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonLink: React.FC<Props> = ({ href, children, className }) => {
  return (
    <StyledLink href={href} className={className}>
      {children}
    </StyledLink>
  );
};

export default ButtonLink;
