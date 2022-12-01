import styled from "styled-components";

const AttributionContainer = styled.div``;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`;

interface Props {
  className?: string;
}

export const Spaceship: React.FC<Props> = ({ className }) => {
  return (
    <AttributionContainer className={className}>
      <StyledLink href="https://iconscout.com/icons/galaxy" target="_blank">
        Galaxy Icon
      </StyledLink>{" "}
      by{" "}
      <StyledLink href="https://iconscout.com/contributors/mcgandhi61">
        Mohit Gandhi
      </StyledLink>{" "}
      on <StyledLink href="https://iconscout.com">IconScout</StyledLink>
    </AttributionContainer>
  );
};

export const MenuIcon: React.FC<Props> = ({ className }) => {
  return (
    <AttributionContainer className={className}>
      <StyledLink href="https://iconscout.com/icons/menu" target="_blank">
        Menu Icon
      </StyledLink>{" "}
      by{" "}
      <StyledLink
        href="https://iconscout.com/contributors/ibrandify-icons"
        target="_blank"
      >
        Ibrandify Icons
      </StyledLink>
    </AttributionContainer>
  );
};

export const DownArrow: React.FC<Props> = ({ className }) => {
  return (
    <AttributionContainer className={className}>
      <StyledLink href="https://iconscout.com/icons/down-arrow" target="_blank">
        Down Arrow Icon
      </StyledLink>{" "}
      by{" "}
      <StyledLink
        href="https://iconscout.com/contributors/ibrandify-icons"
        target="_blank"
      >
        Ibrandify Icons
      </StyledLink>
    </AttributionContainer>
  );
};

export const UnderConstructionIcon: React.FC<Props> = ({ className }) => {
  return (
    <AttributionContainer className={className}>
      <StyledLink href="https://iconscout.com/icons/manager" target="_blank">
        Manager Icon
      </StyledLink>{" "}
      by{" "}
      <StyledLink
        href="https://iconscout.com/contributors/iconscout"
        target="_blank"
      >
        IconScout Store
      </StyledLink>
    </AttributionContainer>
  );
};
