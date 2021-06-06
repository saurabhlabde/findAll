import { FC } from "react";

// component
import { Button } from "../components/Button";

// style

import {
  CardSection,
  TopSection,
  BottomSection,
  HeadingSection,
  Heading,
  InputSection,
  ButtonSection,
} from "../styles/components/payCard";

import { BalanceSection, BalanceText } from "../styles/components/balanceCard";

interface IBalanceCard {
  heading: string;
  balance: number;
  buttonName: string;
  onButtonClick: (e?: any) => void;
}

export const BalanceCard: FC<IBalanceCard> = ({
  balance,
  heading,
  buttonName,
  onButtonClick,
}) => {
  return (
    <>
      <CardSection>
        <TopSection>
          <HeadingSection>
            <Heading>{heading}</Heading>
          </HeadingSection>
          <InputSection>
            <BalanceSection>
              <BalanceText>${balance}</BalanceText>
            </BalanceSection>
          </InputSection>
        </TopSection>
        <BottomSection>
          <ButtonSection>
            <Button buttonName={buttonName} onClick={onButtonClick} />
          </ButtonSection>
        </BottomSection>
      </CardSection>
    </>
  );
};
