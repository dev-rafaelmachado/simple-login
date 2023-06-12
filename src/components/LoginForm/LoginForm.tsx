import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { LoginContainer } from "./Style";
import { Button } from "../Button/Button";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alerts } from "../Alerts/Alerts";

const schema = yup
  .object({
    User: yup.string().required(),
    Password: yup.string().required().min(6),
  })
  .required();

export interface LoginDataTypes {
  Password: string;
  User: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataTypes>({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data: LoginDataTypes) => {
    console.log(data);
    alert("Login Success")
  };

  return (
    <LoginContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <Input placeholder="User" type={"text"} register={register} />
      <Input placeholder="Password" type={"password"} register={register} />
      {<Alerts errors={errors} />}
      <Button type="submit" text="Login" />
    </LoginContainer>
  );
};
