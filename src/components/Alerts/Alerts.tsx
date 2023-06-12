import { AlertsBox, AlertsContainer } from "./Style";

interface AlertsPropsType {
  errors: object;
}

export const Alerts = ({ errors }: AlertsPropsType) => {
  const listErrors = Object.values(errors).map((error) => error.message);

  return (
    <AlertsContainer>
      {listErrors.map((errorMessage, index) => (
        <AlertsBox key={index}>{errorMessage}</AlertsBox>
      ))}
    </AlertsContainer>
  );
};
