// component
import { FC } from "react";
import OutsideClickHandler from "react-outside-click-handler";

//component
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
  buttonName: string;
  additional?: boolean;
  additionalText?: string;
  onAdditionalClick?: () => void;
  onButtonClick: () => void;
  onValueChange: (e: any) => void;
  onCloseClick: () => void;
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
  onAdditionalClick,
  onCloseClick,
}) => {
  return (
    <>
      <PopCardSection>
        <CloseButtonSection onClick={onCloseClick ? onCloseClick : undefined}>
          <CloseButtonText>
            <span>Close</span>
          </CloseButtonText>
        </CloseButtonSection>

        <OutsideClickHandler
          onOutsideClick={onCloseClick ? onCloseClick : undefined}
        >
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
                <AdditionalInfoText
                  onClick={onAdditionalClick ? onAdditionalClick : undefined}
                >
                  <span>{additionalText}</span>
                </AdditionalInfoText>
              </AdditionalInfo>
            )}
          </PopCardSec>
        </OutsideClickHandler>
      </PopCardSection>
    </>
  );
};
