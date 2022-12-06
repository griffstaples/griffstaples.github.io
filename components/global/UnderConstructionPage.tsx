import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { Colours } from "styles/Colours";
import { ConstructionIcon } from "components/global/ConstructionIcon";
import Link from "next/link";
import { UnderConstructionIcon } from "components/global/Attributions";
import Footer from "components/home/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`;

const Content = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-bottom: 64px;
`;

const Description = styled.div`
  width: 280px;
  padding: 0 8px;
  text-align: center;

  @media (min-width: ${Breakpoints.small}) {
    width: auto;
    min-width: 400px;
    max-width: 600px;
    text-align: left;
    padding: 0 32px;
  }
`;

const InlineLink = styled(Link)`
  color: ${Colours.NeonBlue};
  text-decoration: none;
  font-weight: bold;
`;

interface Props {}

const UnderConstructionPage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Content>
        <IconContainer>
          <ConstructionIcon size={128} />
        </IconContainer>
        <Description>
          This page is currently under construction! If you have any questions,
          please reach out to me directly. To navigate home{" "}
          <InlineLink href="/">click here</InlineLink>.
        </Description>
      </Content>
      <Footer>
        <UnderConstructionIcon />
      </Footer>
    </Container>
  );
};

export default UnderConstructionPage;
