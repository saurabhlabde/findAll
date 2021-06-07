import { FC } from "react";

// component
import { Heading } from "../../components/Heading";
import { ProCard } from "../../components/Card";

// style
import { IndexSection, CardSection } from "../../styles/modules/index";

// data
import recipoData from "../../data/recipo.json";

interface IRecipesIndex {
  addClick: () => void;
  onButtonClick: () => void;
}

export const RecipesIndex: FC<IRecipesIndex> = ({
  addClick,
  onButtonClick,
}) => {
  const buttonName: string = "SAVE";

  const buttonHandel = (id: string) => {
    onButtonClick ? onButtonClick() : undefined;
  };

  return (
    <>
      <IndexSection>
        <Heading heading={"Recipo"} add={true} addClick={addClick} />
        <CardSection>
          {recipoData?.map((props: any) => {
            return (
              <ProCard
                buttonName={buttonName}
                key={props.id}
                id={props.id}
                heading={props.title}
                media={props.media}
                onButtonClick={buttonHandel}
                subHeading={props.category}
                subSubHeading={`By ${props.by}`}
              />
            );
          })}
        </CardSection>
      </IndexSection>
    </>
  );
};
