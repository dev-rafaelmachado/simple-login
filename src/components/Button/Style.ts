import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  transition: 0.3s ease-in-out;
  width: 60%;
  height: 40px;

  border-radius: 12px;
  border: none;
  outline: none;

  background-color: ${(props) => props.theme["blue-500"]};

  &:hover {
    background-color: ${(props) => props.theme["blue-300"]};
  }

  color: ${(props) => props.theme["white"]};
  font-size: 1.2rem;
`;
