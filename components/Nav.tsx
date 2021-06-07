// component
import { FC } from "react";
import { Button } from "../components/Button";

// style
import {
  NavSection,
  LeftSection,
  RightSection,
  LogoSection,
  LogoText,
  AuthButtonSection,
  ButtonSection,
} from "../styles/components/nav";

interface INav {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const Nav: FC<INav> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <>
      <NavSection>
        <LeftSection>
          <LogoSection>
            <LogoText>FindAll</LogoText>
          </LogoSection>
        </LeftSection>
        <RightSection>
          <AuthButtonSection>
            <ButtonSection>
              <Button buttonName="LOG IN" onClick={onLoginClick} />
            </ButtonSection>
            <ButtonSection>
              <Button buttonName="SIGN UP" onClick={onRegisterClick} />
            </ButtonSection>
          </AuthButtonSection>
        </RightSection>
      </NavSection>
    </>
  );
};
