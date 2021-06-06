import { FC } from "react";

// style
import { HeadingSection, HeadingText } from "../styles/components/heading";

interface IHeading {
  heading: string;
  style?: any;
}

export const Heading: FC<IHeading> = ({ heading, style }) => {
  return (
    <>
      <HeadingSection>
        <HeadingText>{heading}</HeadingText>
      </HeadingSection>
    </>
  );
};
