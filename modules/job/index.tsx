import { Dispatch, FC, SetStateAction } from "react";

// component
import { Heading } from "../../components/Heading";
import { ProCard } from "../../components/Card";

// style
import { IndexSection, CardSection } from "../../styles/modules/index";

// data
import jobData from "../../data/job.json";

interface IJobIndex {
  addClick: () => void;
  onButtonClick: () => void;
}

export const JobIndex: FC<IJobIndex> = ({ addClick, onButtonClick }) => {
  const buttonName: string = "APPLY";

  const buttonHandel = (id: string) => {
    onButtonClick ? onButtonClick() : undefined;
  };

  return (
    <>
      <IndexSection>
        <Heading heading={"FindJob"} add={true} addClick={addClick} />
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
