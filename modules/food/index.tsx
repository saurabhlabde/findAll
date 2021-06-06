import { IndexSection, CardSection } from "../../styles/modules/index";
import { Heading } from "../../components/Heading";
import { ProCard } from "../../components/Card";

export const FoodIndex = () => {
  return (
    <>
      <IndexSection>
        <Heading heading={"FoDo"} />
        <CardSection>
          <ProCard />
          <ProCard />
          <ProCard />
        </CardSection>
      </IndexSection>
    </>
  );
};
