import styled from "styled-components";

const ContactsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const TitleText = styled.h2`
  font-size: 24px;
`;

interface Props {}

const ContactSection: React.FC<Props> = () => {
  return (
    <ContactsContainer>
      <TitleText>Contacts</TitleText>
    </ContactsContainer>
  );
};

export default ContactSection;
