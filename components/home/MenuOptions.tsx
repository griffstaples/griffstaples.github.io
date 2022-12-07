import { MenuIcon } from "components/global/MenuIcon";
import { useScrollToId } from "hooks/useScrollToId";
import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import { MenuOption } from "types/MenuTypes";

const MenuOptionContainer = styled.div`
  position: relative;
`;

const IconContainer = styled.div``;

const DropDownContainer = styled.ul<{ isOpen: boolean }>`
  margin: 0px;
  display: flex;
  position: absolute;
  right: ${(props) => (props.isOpen ? "0px" : "-100px")};
  color: white;
  font-family: ${sourceCodePro.style.fontFamily};
  flex-direction: column;
  font-size: 14px;
  align-items: end;
  transition: right ease 0.5s;
`;

const DropDownOption = styled.li`
  list-style-type: none;
  opacity: 0.5;
  padding: 8px 0px;
  &:active {
    opacity: 1;
  }
`;

interface Props {
  position?: string;
  options: Array<MenuOption>;
}

const menuId = "header-menu";

const MenuOptions: React.FC<Props> = ({ options, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToId = useScrollToId();

  // close on outside click
  const handleOutsideClick = useCallback(
    (event: Event) => {
      const ele = document?.getElementById(menuId);
      if (event?.target && !ele?.contains(event?.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document?.addEventListener("click", handleOutsideClick);

    return () => {
      document?.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const toggleDropDown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const closeDropDown = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <MenuOptionContainer role="button" id={menuId}>
      <IconContainer onClick={toggleDropDown}>
        <MenuIcon size={24} stroke={Colours.NeonBlue} />
      </IconContainer>
      <DropDownContainer isOpen={isOpen}>
        {options.map((option, i) => {
          return (
            <DropDownOption
              key={`option-${i}`}
              onClick={() => {
                scrollToId(option.link);
                closeDropDown();
              }}
            >
              {option.name}
            </DropDownOption>
          );
        })}
      </DropDownContainer>
    </MenuOptionContainer>
  );
};

export default MenuOptions;
