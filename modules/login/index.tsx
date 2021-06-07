import { Dispatch, FC, SetStateAction, useState } from "react";

// component
import { PopCard } from "../../components/PopCard";

interface ILoginIndex {
  setLogin: Dispatch<SetStateAction<boolean>>;
  setRegister: Dispatch<SetStateAction<boolean>>;
}

export const LoginIndex: FC<ILoginIndex> = ({ setLogin, setRegister }) => {
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });

  const inputValue = [
    {
      name: "username",
      placeholder: "Username",
      value: loginValue.username,
    },
    {
      name: "password",
      placeholder: "Password",
      value: loginValue.password,
    },
  ];

  const loginInputChangeHandel = (e: any) => {
    const { name, value } = e.target;

    setLoginValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const loginHandel = () => {
    console.log("login...");
  };

  const closeHandel = () => {
    setLogin(false);
  };

  const additionalHandel = () => {
    setLogin(false);
    setRegister(true);
  };

  return (
    <PopCard
      buttonName={"LOG IN"}
      heading={"Log in"}
      onButtonClick={loginHandel}
      onValueChange={loginInputChangeHandel}
      props={inputValue}
      additional={true}
      additionalText={"SIGN UP"}
      onAdditionalClick={additionalHandel}
      onCloseClick={closeHandel}
    />
  );
};
