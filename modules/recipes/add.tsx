import { FC, useState } from "react";

// component
import { PopCard } from "../../components/PopCard";

interface IAddRecipes {
  onClose: () => void;
}

export const AddRecipes: FC<IAddRecipes> = ({ onClose }) => {
  const [addValue, setAddValue] = useState({
    title: "",
    category: "",
  });

  const [addMedia, setAddMedia] = useState(null);

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

  const addRecipesHandel = () => {
    console.log("recipes add....");
  };

  return (
    <PopCard
      buttonName={"ADD"}
      heading={"Add Recipo"}
      onButtonClick={addRecipesHandel}
      onCloseClick={onClose}
      onValueChange={handelAddValueChange}
      props={inputFrom}
      showMedia={true}
      media={addMedia}
      setMedia={setAddMedia}
    />
  );
};
