import { FC, useState } from "react";

// component
import { PopCard } from "../../components/PopCard";

interface IAddJob {
  onClose: () => void;
}

export const AddJob: FC<IAddJob> = ({ onClose }) => {
  const [addValue, setAddValue] = useState({
    title: "",
    location: "",
  });

  const [addMedia, setAddMedia] = useState("");

  const inputFrom = [
    {
      name: "title",
      placeholder: "Title",
      value: addValue.title,
    },
    {
      name: "location",
      placeholder: "Location",
      value: addValue.location,
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

  const addJobHandel = () => {
    console.log("job add....");
  };

  return (
    <PopCard
      buttonName={"ADD"}
      heading={"Add Job"}
      onButtonClick={addJobHandel}
      onCloseClick={onClose}
      onValueChange={handelAddValueChange}
      props={inputFrom}
      showMedia={true}
      media={addMedia}
      setMedia={setAddMedia}
    />
  );
};
