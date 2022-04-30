import classes from "./Products.module.css";
import Header from "../Layout/Header";
import useValidate from "../../hooks/use-validate";
import { Fragment } from "react";

const Products = (props) => {
  const {
    value: enteredName,
    hasError: nameHasErr,
    valueIsValid: nameIsValid,
    valueHandler: nameHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredStreet,
    hasError: streetHasErr,
    valueIsValid: streetIsValid,
    valueHandler: streetHandler,
    valueBlurHandler: streetBlurHandler,
    reset: streetReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredCity,
    hasError: cityHasErr,
    valueIsValid: cityIsValid,
    valueHandler: cityHandler,
    valueBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    hasError: postalCodeHasErr,
    valueIsValid: postalCodeIsValid,
    valueHandler: postalCodeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: postalCodeReset,
  } = useValidate((value) => value.trim().length === 5);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    nameReset();
    streetReset();
    postalCodeReset();
    cityReset();

    // props.onSendOrder({
    //   name: enteredName,
    //   street: enteredStreet,
    //   city: enteredCity,
    //   postalCode: enteredPostalCode,
    // });
  };

  const nameInputClasses = nameHasErr
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const streetInputClasses = streetHasErr
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const cityInputClasses = cityHasErr
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const postalCodeInputClasses = postalCodeHasErr
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  return (
    <Fragment>
      <Header />
      <form className={classes.form} onSubmit={confirmHandler}>
        <h3>Order Products</h3>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasErr && (
            <p className={classes["error-text"]}>Please enter a valid name.</p>
          )}
        </div>
        <div className={streetInputClasses}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={enteredStreet}
            onChange={streetHandler}
            onBlur={streetBlurHandler}
          />
          {streetHasErr && (
            <p className={classes["error-text"]}>Please enter a valid street</p>
          )}
        </div>
        <div className={postalCodeInputClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            value={enteredPostalCode}
            onChange={postalCodeHandler}
            onBlur={postalCodeBlurHandler}
          />
          {postalCodeHasErr && (
            <p className={classes["error-text"]}>
              Please enter a valid postal code (5 characters long)
            </p>
          )}
        </div>
        <div className={cityInputClasses}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={enteredCity}
            onChange={cityHandler}
            onBlur={cityBlurHandler}
          />
          {cityHasErr && (
            <p className={classes["error-text"]}>Please enter a valid city</p>
          )}
        </div>

        <button
          className={classes.actions}
          disabled={!formIsValid}
          onClick={props.onOrder}
        >
          Send Order
        </button>
      </form>
    </Fragment>
  );
};

export default Products;
