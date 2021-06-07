import { FC, useState } from "react";

// component
import { Heading } from "../../components/Heading";
import { PayCard } from "../../components/PayCard";
import { BalanceCard } from "../../components/BalanceCard";

// style
import { IndexSection, CardSection } from "../../styles/modules/index";

interface IJobIndex {}

export const PayIndex: FC<IJobIndex> = ({}) => {
  const [addPayValue, setAddPayValue] = useState("");
  const [sendPayValue, setSendPayValue] = useState("");

  const addPayHandel = () => {};

  const sendPayHandel = () => {};

  const balance = 2000;

  const addPayValueChangeHandel = (e: any) => {
    setAddPayValue(e.target.value);
  };

  const sendPayValueChangeHandel = (e: any) => {
    setSendPayValue(e.target.value);
  };

  return (
    <>
      <IndexSection>
        <Heading heading={"InfinitePay"} />
        <CardSection>
          <PayCard
            heading={"Add money"}
            value={addPayValue}
            placeHolder={"$000"}
            name="addPayValue"
            buttonName="ADD"
            onButtonClick={addPayHandel}
            onValueChange={addPayValueChangeHandel}
          />

          <PayCard
            heading={"Send money"}
            value={sendPayValue}
            placeHolder={"$000"}
            name="sendPayValue"
            buttonName="SEND"
            onButtonClick={sendPayHandel}
            onValueChange={sendPayValueChangeHandel}
          />

          <BalanceCard
            heading={"Total balance"}
            buttonName="VIEW HISTORY"
            balance={balance}
            onButtonClick={sendPayHandel}
          />
        </CardSection>
      </IndexSection>
    </>
  );
};
