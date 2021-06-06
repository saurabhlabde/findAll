// style
import { FC } from "react";
import { ButtonSection, ButtonSy } from "../styles/components/button";

interface IButton {
  buttonName: string;
  onClick: (e?: any) => void;
}

export const Button: FC<IButton> = ({ buttonName, onClick }) => {
  return (
    <>
      <ButtonSection>
        <ButtonSy onClick={onClick ? onClick : undefined}>
          {buttonName}
        </ButtonSy>
      </ButtonSection>
    </>
  );
};
