import { FC } from "react";

// style
import {
  HeadingSection,
  HeadingText,
  AddSection,
  AddText,
} from "../styles/components/heading";

interface IHeading {
  heading: string;
  add?: boolean;
  addClick?: () => void;
}

export const Heading: FC<IHeading> = ({ heading, add, addClick }) => {
  return (
    <>
      <HeadingSection>
        <HeadingText>{heading}</HeadingText>

        {add && (
          <AddSection onClick={addClick ? addClick : undefined}>
            <AddText>Add</AddText>
          </AddSection>
        )}
      </HeadingSection>
    </>
  );
};
