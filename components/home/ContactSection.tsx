import styled from "styled-components";
import { sourceCodePro } from "styles/Fonts";
import { SectionTitle } from "components/home/SectionTitle";
import Button from "components/global/Button";
import { Breakpoints } from "styles/Breakpoints";

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactsContentContainer = styled.div``;

const ContactForm = styled.form``;

const InputContainer = styled.div`
  margin: 16px 0;
  width: 240px;
  @media (min-width: ${Breakpoints.small}) {
    width: 360px;
  }
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInputLabel = styled.label`
  color: white;
  margin-bottom: 4px;
`;

const FormTextInput = styled.input`
  border-radius: 4px;
  box-shadow: none;
  border: none;
  font-family: ${sourceCodePro.style.fontFamily};
  height: 32px;
  padding-left: 8px;
`;

interface FormInputProps {
  label: string;
  showLabel?: boolean;
  placeholder?: string;
  required?: boolean;
  inputType?: string;
  className?: string;
  name: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  showLabel,
  placeholder,
  required,
  inputType,
  className,
  name,
}) => {
  return (
    <FormInputContainer className={className}>
      {showLabel && <FormInputLabel>{label}</FormInputLabel>}
      <FormTextInput
        type={inputType}
        placeholder={placeholder}
        required={required}
        name={name}
      ></FormTextInput>
    </FormInputContainer>
  );
};

const FormTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTextAreaLabel = styled.label`
  color: white;
  margin-bottom: 4px;
`;
const CustomFormTextArea = styled.textarea`
  border: none;
  border-radius: 4px;
  padding: 8px 8px;
  height: 120px;
  font-family: ${sourceCodePro.style.fontFamily};
`;

interface FormTextAreaProps {
  label: string;
  showLabel?: boolean;
  placeholder?: string;
  required?: boolean;
  className?: string;
  name: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  showLabel,
  placeholder,
  required,
  className,
  name,
}) => {
  return (
    <FormTextAreaContainer className={className}>
      {showLabel && <FormTextAreaLabel>{label}</FormTextAreaLabel>}
      <CustomFormTextArea
        placeholder={placeholder}
        required={required}
        name={name}
      ></CustomFormTextArea>
    </FormTextAreaContainer>
  );
};

const SubmitButton = styled(Button)`
  margin: 64px auto;
`;

interface Props {}

const ContactSection: React.FC<Props> = () => {
  return (
    <ContactsContainer>
      <SectionTitle id="contact-title">Contact</SectionTitle>
      <ContactsContentContainer>
        <ContactForm action="https://formspree.io/f/xqkgloga" method="POST">
          <InputContainer>
            <FormInput
              label={"Name"}
              showLabel
              placeholder={"Full Name"}
              required
              inputType="text"
              name="fullname"
            />
          </InputContainer>
          <InputContainer>
            <FormInput
              label={"Email"}
              showLabel
              placeholder={"Email Address"}
              required
              inputType="email"
              name="email"
            />
          </InputContainer>
          <InputContainer>
            <FormTextArea
              label="Message"
              showLabel
              placeholder="Enter message here..."
              required
              name="message"
            ></FormTextArea>
          </InputContainer>
          <SubmitButton type="submit">Send message</SubmitButton>
        </ContactForm>
      </ContactsContentContainer>
    </ContactsContainer>
  );
};

export default ContactSection;
