import React, { useContext } from "react";
import classes from "./ForgotPassword.module.css";
import { Fragment } from "react";
import Header from "../Layout/Header";
import useValidate from "../../hooks/use-validate";
import Buttons from "../Layout/Buttons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";
import { toast } from "react-toastify";

export default function Login(props) {
  const navigate = useNavigate();
  const { forgotPassword } = useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);

  const {
    value: enteredEmail,
    hasError: emailInputHasErr,
    valueIsValid: emailInputIsValid,
    valueHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useValidate((value) => value.includes("@"));

  let formIsValid = false;

  if (emailInputIsValid) {
    formIsValid = true;
  }

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formIsValid) {
      return;
    }
    resetEmailInput();

    forgotPassword(enteredEmail)
      .then((res) => {
        console.log(res);
        toast.success("Check your email to reset password", {
          position: "bottom-left",
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Email is invalid", {
          position: "bottom-left",
        });
        setLoading(false);
      });
  };

  const emailErrClass = emailInputHasErr ? "control invalid" : "control";

  return (
    <Fragment>
      <Header />
      <div className={classes.login}>
        <span className={classes.loginTitle}>Retrieve your password</span>
        <form className={classes.loginForm} onSubmit={formHandler}>
          <div className={emailErrClass}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className={classes.loginInput}
              onChange={emailChangeHandler}
              value={enteredEmail}
              onBlur={emailBlurHandler}
            />
            {emailInputHasErr && (
              <p className="error-text">Please enter a valid email</p>
            )}
          </div>

          <Buttons className={classes.btn} disabled={!formIsValid}>
            Confirm
          </Buttons>
        </form>
      </div>
    </Fragment>
  );
}
