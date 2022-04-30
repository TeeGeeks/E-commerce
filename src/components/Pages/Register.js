import React, { useState, useContext } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Header from "../Layout/Header";
import useValidate from "../../hooks/use-validate";
import Buttons from "../Layout/Buttons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/Firebase";
import { AuthContext } from "../../store/auth-context";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { toast } from "react-toastify";

export default function Login(props) {
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    value: enteredPassword,
    hasError: passwordInputHasErr,
    valueIsValid: enteredPasswordIsValid,
    valueHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useValidate((value) => value.trim().length > 6);

  const {
    value: enteredEmail,
    hasError: emailInputHasErr,
    valueIsValid: emailInputIsValid,
    valueHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useValidate((value) => value.includes("@"));

  let formIsValid = false;

  if (emailInputIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const register = userCredential.user;
        toast.success("Your account has been successfully registered", {
          position: "bottom-left",
        });
        // ...
        dispatch({ type: "REGISTER" });
        navigate("/sign-in");
      })
      .catch((error) => {
        setError(error);
        toast.error("Please enter a valid email or password", {
          position: "bottom-left",
        });
        // ..
      });

    resetEmailInput();
    resetPasswordInput();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const emailErrClass = emailInputHasErr ? "control invalid" : "control";

  const passwordErrClass = passwordInputHasErr ? "control invalid" : "control";

  return (
    <Fragment>
      <Header />
      <div className={classes.login}>
        <span className={classes.loginTitle}>Register</span>

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
            Register
          </Buttons>
          {error ? (
            <span className="error-text">
              Email has already been registered!!!
            </span>
          ) : (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Your Account has been successfully Registered!
              </Alert>
            </Snackbar>
          )}
        </form>
      </div>
    </Fragment>
  );
}
