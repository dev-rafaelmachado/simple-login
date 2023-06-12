import { styled } from "styled-components";

export const InputContainer = styled.div`
  width: 280px;
  height: 50px;

  padding: 12px 8px;

  display: flex;

  border-radius: 1rem;
  border: 1px ${(props) => props.theme["white"]} solid;
`;

export const IconInput = styled.div`
  width: 10%;
  height: 100%;

  display: grid;
  place-items: center;
`;

export const LoginInput = styled.input`
  width: 80%;
  height: 100%;

  background: none;
  border: none;
  outline: none;

  padding-left: 15px;
  color: ${(props) => props.theme["white"]};

  &:focus {
    outline: none;
    border: none;
  }
`;
