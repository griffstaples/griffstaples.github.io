import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import MenuOptions from "components/home/MenuOptions";

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
const NavOption = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 0 8px;
`;
const OptionText = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  &:hover {
    color: ${Colours.NeonBlue};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <MainTextContainer>
        <MainText>Griffin Staples</MainText>
      </MainTextContainer>
      <NavOptionList>
        <NavOption>
          <OptionText>about</OptionText>
        </NavOption>
        <NavOption>
          <OptionText>home</OptionText>
        </NavOption>
        <NavOption>
          <OptionText>projects</OptionText>
        </NavOption>
        <NavOption>
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
