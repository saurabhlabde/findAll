import { useState } from "react";

// component
import { PopCard } from "../../components/PopCard";

export const LoginIndex = () => {
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

  return (
    <PopCard
      buttonName={"LOG IN"}
      heading={"Log in"}
      onButtonClick={loginHandel}
      onValueChange={loginInputChangeHandel}
      props={inputValue}
      additional={true}
      additionalText={"SIGN UP"}
    />
  );
};
