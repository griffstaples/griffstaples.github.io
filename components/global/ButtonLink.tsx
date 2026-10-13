import Link from "next/link";
import styled, { css } from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const LinkStyles = css`
  text-decoration: none;
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
