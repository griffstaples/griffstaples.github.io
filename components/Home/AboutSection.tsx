import styled from "styled-components";
import Button from "components/global/Button";

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

const TitleText = styled.h2`
  font-size: 24px;
`;

interface Props {}

const AboutSection: React.FC<Props> = () => {
  return (
    <AboutContainer>
      <TitleText>About</TitleText>
      <Button onClick={() => {}}>See more</Button>
    </AboutContainer>
  );
};

export default AboutSection;
