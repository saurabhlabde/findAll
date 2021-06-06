// component
import { FC } from "react";
import { Button } from "../components/Button";

// style
import {
  BottomSection,
  CardSection,
  ContentBottomSec,
  ContentTopSec,
  Heading,
  MediaImage,
  MediaSection,
  SubHeading,
  SubSubHeading,
  TopSection,
  ButtonSection,
} from "../styles/components/card";

interface IProCard {
  media?: string;
  buttonName?: string;
  heading?: string;
  subHeading?: string;
  subSubHeading?: string;
  onButtonClick?: (e?: any) => void;
}

export const ProCard: FC<IProCard> = ({
  media,
  heading,
  subHeading,
  subSubHeading,
  buttonName,
  onButtonClick,
}) => {
  return (
    <>
      <CardSection>
        <TopSection>
          <MediaSection>
            <MediaImage src={media} />
          </MediaSection>
        </TopSection>

        <BottomSection>
          <ContentTopSec>
            <Heading>
              <span>{heading}</span>
            </Heading>
            <SubHeading>
              <span>{subHeading}</span>
            </SubHeading>
          </ContentTopSec>
          <ContentBottomSec>
            <SubSubHeading>
              <span>{subSubHeading}</span>
            </SubSubHeading>
            <ButtonSection>
              <Button buttonName={buttonName} onClick={onButtonClick} />
            </ButtonSection>
          </ContentBottomSec>
        </BottomSection>
      </CardSection>
    </>
  );
};
