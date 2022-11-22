import { MenuIcon } from "components/global/MenuIcon";
import styled from "styled-components";
import { Colours } from "styles/Colours";

const MenuOptionContainer = styled.div``;

interface Props {
  position?: string;
  options: Array<{
    id: string;
    name: string;
    onClick: () => void;
  }>;
}

const MenuOptions: React.FC<Props> = ({ options, position }) => {
  return (
    <MenuOptionContainer role="button">
      <MenuIcon size={24} stroke={Colours.NeonBlue} />
    </MenuOptionContainer>
  );
};

export default MenuOptions;
