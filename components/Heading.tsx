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
  style?: any;
  add?: boolean;
}

export const Heading: FC<IHeading> = ({ heading, style, add }) => {
  return (
    <>
      <HeadingSection>
        <HeadingText>{heading}</HeadingText>

        {add && (
          <AddSection>
            <AddText>Add</AddText>
          </AddSection>
        )}
      </HeadingSection>
    </>
  );
};
