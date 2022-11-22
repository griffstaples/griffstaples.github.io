import React from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import Header from "components/Home/Header";

const PageWrapper = styled.div`
  background-color: ${Colours.BackgroundColor};
  width: 100%;
  height: 100vh;
  color: ${Colours.TextRegular};
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
`;

const HomePageContent: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Header></Header>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default HomePageContent;
