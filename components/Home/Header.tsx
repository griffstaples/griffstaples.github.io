import styled from "styled-components";
import { sourceCodePro } from "styles/Fonts";

const HeaderWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;

const MainTextContainer = styled.div``;
const MainText = styled.a``;

const NavOptionList = styled.ul`
  margin: 0px;
`;
const NavOption = styled.li`
  list-style-type: none;
  display: inline-block;
`;
const OptionText = styled.a`
  font-family: ${sourceCodePro.style.fontFamily};
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <MainTextContainer>
        <MainText>Griffin Staples</MainText>
      </MainTextContainer>
      <NavOptionList>
        <NavOption>
          <OptionText>About</OptionText>
        </NavOption>
        <NavOption>
          <OptionText>Projects</OptionText>
        </NavOption>
        <NavOption>
          <OptionText>Contact</OptionText>
        </NavOption>
      </NavOptionList>
    </HeaderWrapper>
  );
};

export default Header;
