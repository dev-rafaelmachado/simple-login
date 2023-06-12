import { ButtonContainer } from "./Style";

interface ButtonPropsType {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ text, type = "button" }: ButtonPropsType) => {
  return <ButtonContainer type={type}>{text}</ButtonContainer>;
};
