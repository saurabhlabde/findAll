// component
import { FC } from "react";

// style
import {
  BottomSection,
  CardSection,
  ContentBottomSec,
  ContentTopSec,
  TopSection,
  ButtonSection,
} from "../styles/components/card";

import {
  AddSection,
  HeadingAdd,
  SubHeadingAdd,
  SubSubHeadingAdd,
  ButtonAdd,
  AddHeading,
} from "../styles/components/addCard";

interface IAddProCard {
  onButtonClick: (id: string) => void;
}

export const AddProCard: FC<IAddProCard> = ({ onButtonClick }) => {
  return (
    <>
      <CardSection>
        <TopSection>
          <AddSection>
            <AddHeading>
              <span>ADD</span>
            </AddHeading>
          </AddSection>
        </TopSection>

        <BottomSection>
          <ContentTopSec>
            <HeadingAdd />
            <SubHeadingAdd />
          </ContentTopSec>
          <ContentBottomSec>
            <SubSubHeadingAdd />
            <ButtonSection>
              <ButtonAdd />
            </ButtonSection>
          </ContentBottomSec>
        </BottomSection>
      </CardSection>
    </>
  );
};
