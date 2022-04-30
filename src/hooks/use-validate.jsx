import { useState } from "react";

const useValidate = (validateValue) => {
  const [valueEntered, setValueEntered] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validateValue(valueEntered);
  const valueHasError = !valueIsValid && valueIsTouched;

  const valueHandler = (e) => {
    setValueEntered(e.target.value);
  };

  const valueBlurHandler = (e) => {
    setValueIsTouched(true);
  };

  const reset = () => {
    setValueEntered("");
    setValueIsTouched(false);
  };

  return {
    value: valueEntered,
    hasError: valueHasError,
    valueIsValid,
    valueHandler,
    valueBlurHandler,
    reset,
  };
};

export default useValidate;
