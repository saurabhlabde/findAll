// component
import { FC } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

// style
import {
  PopCardSection,
  PopCardSec,
  HeadingSection,
  HeadingText,
  InputSection,
  ButtonSection,
  AdditionalInfo,
  AdditionalInfoText,
  CloseButtonSection,
  CloseButtonText,
} from "../styles/components/popCard";

interface IPopCard {
  props: Array<{
    name: string;
    value: string;
    placeholder: string;
  }>;
  heading: string;
  media?: boolean;
  additional?: boolean;
  additionalText?: string;
  buttonName: string;
  onButtonClick: () => void;
  onValueChange: (e: any) => void;
}

export const PopCard: FC<IPopCard> = ({
  props,
  onValueChange,
  additional,
  heading,
  media,
  onButtonClick,
  buttonName,
  additionalText,
}) => {
  return (
    <>
      <PopCardSection>
        <CloseButtonSection>
          <CloseButtonText>
            <span>Close</span>
          </CloseButtonText>
        </CloseButtonSection>

        <PopCardSec>
          <HeadingSection>
            <HeadingText>
              <span>{heading}</span>
            </HeadingText>
          </HeadingSection>

          <InputSection>
            {props?.map((val: any, i: number) => {
              return (
                <Input
                  key={i}
                  name={val.name}
                  onValueChange={onValueChange}
                  placeHolder={val.placeholder}
                  value={val.value}
                />
              );
            })}
          </InputSection>

          <ButtonSection>
            <Button buttonName={buttonName} onClick={onButtonClick} />
          </ButtonSection>

          {additional && (
            <AdditionalInfo>
              <AdditionalInfoText>
                <span>{additionalText}</span>
              </AdditionalInfoText>
            </AdditionalInfo>
          )}
        </PopCardSec>
      </PopCardSection>
    </>
  );
};
