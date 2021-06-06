import { IndexSection, CardSection } from "../../styles/modules/index";

// component
import { Heading } from "../../components/Heading";
import { ProCard } from "../../components/Card";

// data
import recipoData from "../../data/recipo.json";

export const RecipesIndex = () => {
  const buttonName: string = "SAVE";

  const buttonHandel = (id: string) => {};

  return (
    <>
      <IndexSection>
        <Heading heading={"Recipo"} />
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
