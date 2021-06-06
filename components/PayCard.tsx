import { Dispatch, FC, SetStateAction } from "react";

// component
import { Input } from "../components/Input";
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

interface IPayCard {
  heading: string;
  value: string;
  buttonName: string;
  placeHolder: string;
  name: string;
  onButtonClick: (e?: any) => void;
  onValueChange: (e: any) => void;
}

export const PayCard: FC<IPayCard> = ({
  heading,
  value,
  buttonName,
  placeHolder,
  onButtonClick,
  onValueChange,
  name,
}) => {
  return (
    <>
      <CardSection>
        <TopSection>
          <HeadingSection>
            <Heading>{heading}</Heading>
          </HeadingSection>
          <InputSection>
            <Input
              value={value}
              placeHolder={placeHolder}
              onValueChange={onValueChange}
              name={name}
            />
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
