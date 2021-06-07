import { Dispatch, FC, SetStateAction, useState } from "react";

// component
import { PopCard } from "../../components/PopCard";

interface IRegisterIndex {
  setLogin: Dispatch<SetStateAction<boolean>>;
  setRegister: Dispatch<SetStateAction<boolean>>;
}

export const RegisterIndex: FC<IRegisterIndex> = ({
  setLogin,
  setRegister,
}) => {
  const [registerValue, setRegisterValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const inputValue = [
    {
      name: "firstname",
      placeholder: "Firstname",
      value: registerValue.firstname,
    },
    {
      name: "lastname",
      placeholder: "Lastname",
      value: registerValue.lastname,
    },
    {
      name: "username",
      placeholder: "Username",
      value: registerValue.username,
    },
    {
      name: "email",
      placeholder: "Email id",
      value: registerValue.email,
    },
    {
      name: "password",
      placeholder: "Password",
      value: registerValue.password,
    },
  ];

  const registerInputChangeHandel = (e: any) => {
    const { name, value } = e.target;

    setRegisterValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const registerHandel = () => {
    console.log("register...");
  };

  const closeHandel = () => {
    setRegister(false);
  };

  const additionalHandel = () => {
    setRegister(false);
    setLogin(true);
  };

  return (
    <PopCard
      buttonName={"SIGN IN"}
      heading={"JOIN"}
      onButtonClick={registerHandel}
      onValueChange={registerInputChangeHandel}
      props={inputValue}
      additional={true}
      additionalText={"LOG IN"}
      onAdditionalClick={additionalHandel}
      onCloseClick={closeHandel}
    />
  );
};
