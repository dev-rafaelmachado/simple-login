import { IconInput, InputContainer, LoginInput } from "./Style";
import { User, Lock } from "@phosphor-icons/react";
import { LoginDataTypes } from "../LoginForm/LoginForm";
import { UseFormRegister } from "react-hook-form";

interface InputPropsType {
  placeholder: "User" | "Password";
  type: "text" | "password";
  register: UseFormRegister<LoginDataTypes>;
}

export const Input = ({ placeholder, type, register }: InputPropsType) => {
  return (
    <InputContainer>
      <IconInput>
        {type == "text" ? (
          <User size={"100%"} color="#fff" />
        ) : (
          <Lock size={"100%"} color="#fff" />
        )}
      </IconInput>
      <LoginInput
        type={type}
        placeholder={placeholder}
        {...register(placeholder)}
      />
    </InputContainer>
  );
};
