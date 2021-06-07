// component
import { FC, Dispatch, SetStateAction } from "react";
import OutsideClickHandler from "react-outside-click-handler";

//component
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { MediaIndex } from "../modules/media";

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
  media?: string;
  setMedia?: Dispatch<SetStateAction<string>>;
  showMedia?: boolean;
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
  setMedia,
  showMedia,
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
              {showMedia && <MediaIndex media={media} setMedia={setMedia} />}
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
