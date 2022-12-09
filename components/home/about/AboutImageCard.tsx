import { TagList } from "components/global/TagList";
import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { Colours } from "styles/Colours";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const ImageSectionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

const CircularImageContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  box-shadow: 0px 0px 5px 5px ${Colours.BackgroundColorDark};
`;

const StyledImage = styled.img`
  position: absolute;
  top: 9px;
  width: 140px;
  height: 140px;
  margin: 0 10px;
  border-radius: 70px;
`;
const HLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${Colours.TextRegular};
`;

const TagContainer = styled.div`
  width: 100%;

  /* @media (min-width: ${Breakpoints.small}) {
    display: none;
  } */
`;

export const AboutImageCard: React.FC = () => {
  return (
    <Container>
      <ImageSectionContainer>
        <CircularImageContainer>
          <StyledImage
            src="/headshot_128_square.png"
            width={128}
            height={128}
            alt={"Griffin Staples portrait"}
          />
        </CircularImageContainer>
      </ImageSectionContainer>
      <HLine />
      <TagContainer>
        <TagList tags={["React", "Typescript", "NextJS", "Python"]} />
      </TagContainer>
    </Container>
  );
};
