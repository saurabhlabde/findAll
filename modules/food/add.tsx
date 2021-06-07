import { FC, useState } from "react";

// component
import { PopCard } from "../../components/PopCard";

interface IAddFood {
  onClose: () => void;
}

export const AddFood: FC<IAddFood> = ({ onClose }) => {
  const [addValue, setAddValue] = useState({
    title: "",
    category: "",
    schedule: "",
  });

  const [addMedia, setAddMedia] = useState("");

  const inputFrom = [
    {
      name: "title",
      placeholder: "Title",
      value: addValue.title,
    },
    {
      name: "category",
      placeholder: "Category",
      value: addValue.category,
    },
    {
      name: "schedule",
      placeholder: "Schedule",
      value: addValue.schedule,
    },
  ];

  const handelAddValueChange = (e: any) => {
    const { name, value } = e.target;

    setAddValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addFoodHandel = () => {
    console.log("food add....");
  };

  return (
    <PopCard
      buttonName={"ADD"}
      heading={"Add Food"}
      media={addMedia}
      setMedia={setAddMedia}
      showMedia={true}
      onButtonClick={addFoodHandel}
      onCloseClick={onClose}
      onValueChange={handelAddValueChange}
      props={inputFrom}
    />
  );
};
