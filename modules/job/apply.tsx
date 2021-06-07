import { FC, useState } from "react";
import { PopCard } from "../../components/PopCard";

interface IApplyCard {
  onClose: () => void;
}

export const ApplyCard: FC<IApplyCard> = ({ onClose }) => {
  const [addValue, setAddValue] = useState({
    eduction: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
  });

  const inputForm = [
    { name: "eduction", placeholder: "Eduction", value: addValue.eduction },
    { name: "city", placeholder: "City", value: addValue.city },
    { name: "zipCode", placeholder: "Zip code", value: addValue.zipCode },
    {
      name: "phoneNumber",
      placeholder: "Phone number",
      value: addValue.phoneNumber,
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

  const orderHandel = () => {};

  return (
    <PopCard
      props={inputForm}
      buttonName={"APPLY"}
      heading={"Apply for job"}
      onButtonClick={orderHandel}
      onCloseClick={onClose}
      onValueChange={handelAddValueChange}
    />
  );
};
