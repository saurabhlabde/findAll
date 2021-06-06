import { IndexSection, CardSection } from "../../styles/modules/index";

// component
import { Heading } from "../../components/Heading";
import { ProCard } from "../../components/Card";

// data
import jobData from "../../data/job.json";

export const JobIndex = () => {
  const buttonName: string = "APPLY";

  const buttonHandel = (id: string) => {};

  return (
    <>
      <IndexSection>
        <Heading heading={"FindJob"} />
        <CardSection>
          {jobData?.map((props: any) => {
            return (
              <ProCard
                key={props.id}
                id={props.id}
                buttonName={buttonName}
                media={props.media}
                heading={props.title}
                subHeading={props.location}
                subSubHeading={props.createdAt}
                onButtonClick={buttonHandel}
              />
            );
          })}
        </CardSection>
      </IndexSection>
    </>
  );
};
