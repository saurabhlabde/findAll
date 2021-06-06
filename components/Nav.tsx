// component
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

export const Nav = () => {
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
              <Button buttonName="LOG IN" onClick={() => {}} />
            </ButtonSection>
            <ButtonSection>
              <Button buttonName="SIGN UP" onClick={() => {}} />
            </ButtonSection>
          </AuthButtonSection>
        </RightSection>
      </NavSection>
    </>
  );
};
