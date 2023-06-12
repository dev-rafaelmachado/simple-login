import { styled, keyframes } from "styled-components";

const slide_top = keyframes`
	0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
`;

export const AlertsContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;

  top: 10px;
  right: 10px;

  font-size: 1rem;

  align-items: flex-end;
  justify-content: center;

  gap: 12px;
`;

export const AlertsBox = styled.span`
  width: fit-content;
  height: fit-content;

  padding: 8px;

  border-radius: 12px;
  border: none;

  animation: ${slide_top} ease-in-out 0.4s;

  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["white"]};
`;
