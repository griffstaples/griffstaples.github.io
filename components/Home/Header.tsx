import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import MenuOptions from "components/home/MenuOptions";
import { useCallback } from "react";

const HeaderWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;

const MainTextContainer = styled.div``;
const MainText = styled.a``;

const MenuOptionsContainer = styled.div`
  display: block;

  @media (min-width: ${Breakpoints.small}) {
    display: none;
  }
`;

const NavOptionList = styled.ul`
  display: none;
  margin: 0px;

  @media (min-width: ${Breakpoints.small}) {
    display: block;
  }
`;

const OptionWidth = "48px";
const OptionHeight = "48px";

const NavOption = styled.li.attrs({ className: "hoverMouse" })`
  list-style-type: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding: 0 8px;
`;

const OptionText = styled.div`
  align-items: center;
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  &:hover {
    color: ${Colours.NeonBlue};
  }
`;

const Header: React.FC = () => {
  const scrollToID = useCallback((id: string) => {
    document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <HeaderWrapper>
      <MainTextContainer>
        <MainText>Griffin Staples</MainText>
      </MainTextContainer>
      <NavOptionList>
        <NavOption
          onClick={() => document?.body?.scrollIntoView({ behavior: "smooth" })}
        >
          <OptionText>home</OptionText>
        </NavOption>
        <NavOption onClick={() => scrollToID("about-title")}>
          <OptionText>about</OptionText>
        </NavOption>
        <NavOption onClick={() => scrollToID("project-title")}>
          <OptionText>projects</OptionText>
        </NavOption>
        <NavOption onClick={() => scrollToID("contact-title")}>
          <OptionText>contact</OptionText>
        </NavOption>
      </NavOptionList>
      <MenuOptionsContainer>
        <MenuOptions
          options={[{ id: "About", name: "About", onClick: () => {} }]}
        />
      </MenuOptionsContainer>
    </HeaderWrapper>
  );
};

export default Header;
