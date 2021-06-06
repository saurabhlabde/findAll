// style
import { FC } from "react";
import { ButtonSection, ButtonSy } from "../styles/components/button";

interface IButton {
  buttonName: string;
  retunValue?: string;
  onClick: (rv: any) => void;
}

export const Button: FC<IButton> = ({ buttonName, onClick, retunValue }) => {
  return (
    <>
      <ButtonSection className="button">
        <ButtonSy
          onClick={() => {
            onClick ? onClick(retunValue) : undefined;
          }}
        >
          {buttonName}
        </ButtonSy>
      </ButtonSection>
    </>
  );
};
