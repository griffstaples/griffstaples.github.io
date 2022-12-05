import Link from "next/link";
import styled, { css } from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const LinkStyles = css`
  text-decoration: none;
  padding: 8px 32px;
  border-radius: 4px;
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
    color: ${Colours.NeonBlue};
  }
`;

const StyledInteralLink = styled(Link)`
  ${LinkStyles}
`;

const StyledExternalLink = styled.a`
  ${LinkStyles}
`;
interface Props {
  href?: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
  target?: string;
}

const ButtonLink: React.FC<Props> = ({
  href,
  children,
  className,
  isExternal,
  target,
}) => {
  return isExternal ? (
    <StyledExternalLink
      href={href || ""}
      className={className}
      target={target || "_self"}
    >
      {children}
    </StyledExternalLink>
  ) : (
    <StyledInteralLink
      href={href || ""}
      className={className}
      target={target || "_self"}
    >
      {children}
    </StyledInteralLink>
  );
};

export default ButtonLink;
