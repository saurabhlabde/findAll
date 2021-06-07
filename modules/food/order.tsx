import { FC, useState } from "react";
import { PopCard } from "../../components/PopCard";

interface IOrderCard {
  onClose: () => void;
}

export const OrderCard: FC<IOrderCard> = ({ onClose }) => {
  const [addValue, setAddValue] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const inputForm = [
    { name: "street", placeholder: "Street", value: addValue.street },
    { name: "city", placeholder: "City", value: addValue.city },
    { name: "state", placeholder: "State", value: addValue.state },
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
      buttonName={"ORDER"}
      heading={"Address"}
      onButtonClick={orderHandel}
      onCloseClick={onClose}
      onValueChange={handelAddValueChange}
    />
  );
};
