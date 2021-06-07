import { IndexSection, CardSection } from "../../styles/modules/index";

// component
import { Heading } from "../../components/Heading";
import { ProCard } from "../../components/Card";

// data
import foodData from "../../data/food.json";

export const FoodIndex = () => {
  const buttonName: string = "ORDER";

  const buttonHandel = (id: string) => {};

  return (
    <>
      <IndexSection>
        <Heading heading={"FoDo"} add={true} />
        <CardSection>
          {foodData?.map((props: any) => {
            return (
              <ProCard
                key={props.id}
                id={props.id}
                buttonName={buttonName}
                heading={props.title}
                media={props.media}
                onButtonClick={buttonHandel}
                subHeading={props.category}
                subSubHeading={props.schedule}
              />
            );
          })}
        </CardSection>
      </IndexSection>
    </>
  );
};
