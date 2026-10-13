import styled from "styled-components";
import { sourceCodePro } from "styles/Fonts";
import { Colours } from "styles/Colours";
import { SectionLabel } from "components/global/SectionLabel";
import { PrimaryButton } from "components/global/Button";

const ContactsContainer = styled.div`
  padding: 0 16px;
`;

const ContactsContentContainer = styled.div``;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 420px;
`;

const InputContainer = styled.div`
  margin-bottom: 18px;
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInputLabel = styled.label`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin-bottom: 8px;
`;

const fieldStyles = `
  width: 100%;
  border-radius: 2px;
  box-shadow: none;
  border: 1px solid ${Colours.GunMetalBlue};
  background-color: ${Colours.BackgroundColorDark};
  color: ${Colours.TextRegular};
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 13px;

  &::placeholder {
    color: ${Colours.TextDim};
  }

  &:focus {
    outline: none;
    border-color: ${Colours.NeonBlue};
  }
`;

const FormTextInput = styled.input`
  ${fieldStyles}
  height: 40px;
  padding: 0 12px;
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
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin-bottom: 8px;
`;
const CustomFormTextArea = styled.textarea`
  ${fieldStyles}
  padding: 10px 12px;
  height: 120px;
  resize: vertical;
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

const SubmitButton = styled(PrimaryButton)`
  align-self: flex-start;
  margin-top: 4px;
`;

interface Props {}

const ContactSection: React.FC<Props> = () => {
  return (
    <ContactsContainer>
      <SectionLabel id="contact-title">Contact</SectionLabel>
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
