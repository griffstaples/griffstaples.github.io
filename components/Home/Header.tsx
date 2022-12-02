import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import MenuOptions from "components/home/MenuOptions";
import { useScrollToId } from "hooks/useScrollToId";

// Link now refers to where we scroll to on this page
// Link will refer to where we redirect to later
const MENU_OPTIONS = [
  { id: "about", name: "about", link: "about-title" },
  { id: "projects", name: "projects", link: "project-title" },
  { id: "contact", name: "contact", link: "contact-title" },
];

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
  const scrollToId = useScrollToId();

  return (
    <HeaderWrapper>
      <MainTextContainer>
        <MainText>Griffin Staples</MainText>
      </MainTextContainer>
      <NavOptionList>
        <NavOption onClick={() => scrollToId("about-title")}>
          <OptionText>about</OptionText>
        </NavOption>
        <NavOption onClick={() => scrollToId("project-title")}>
          <OptionText>projects</OptionText>
        </NavOption>
        <NavOption onClick={() => scrollToId("contact-title")}>
          <OptionText>contact</OptionText>
        </NavOption>
      </NavOptionList>
      <MenuOptionsContainer>
        <MenuOptions options={MENU_OPTIONS} />
      </MenuOptionsContainer>
    </HeaderWrapper>
  );
};

export default Header;
