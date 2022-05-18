import React, { useContext } from "react";
import { Fragment } from "react";
import useValidate from "../../hooks/use-validate";
import Buttons from "../Layout/Buttons";
import classes from "./Register.module.css";
import { AuthContext } from "../../store/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

export default function Login(props) {
  const { resetPassword } = useContext(AuthContext);
  const query = useQuery();
  const navigate = useNavigate();

  const {
    value: enteredPassword,
    hasError: passwordInputHasErr,
    valueIsValid: enteredPasswordIsValid,
    valueHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useValidate((value) => value.trim().length > 6);

  let formIsValid = false;

  if (enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetPassword(query.get("oobCode"), enteredPassword)
      .then((res) => {
        console.log(res);
        toast.success("Your password has been reset", {
          position: "bottom-left",
        });
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Please enter a valid password", {
          position: "bottom-left",
        });
      });

    resetPasswordInput();
  };

  const passwordErrClass = passwordInputHasErr ? "control invalid" : "control";

  return (
    <Fragment>
      <div className={classes.login}>
        <span className={classes.loginTitle}>Reset Password</span>

        <form className={classes.loginForm} onSubmit={formHandler}>
          <div className={passwordErrClass}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className={classes.loginInput}
              onChange={passwordChangeHandler}
              value={enteredPassword}
              onBlur={passwordBlurHandler}
            />
            {passwordInputHasErr && (
              <p className="error-text">
                Enter valid password (more than 6 character)
              </p>
            )}
          </div>
          <Buttons className={classes.btn} disabled={!formIsValid}>
            Reset
          </Buttons>
        </form>
      </div>
    </Fragment>
  );
}
