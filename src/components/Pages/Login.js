import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { Fragment } from "react";
import Header from "../Layout/Header";
import useValidate from "../../hooks/use-validate";
import Buttons from "../Layout/Buttons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/Firebase";
import { AuthContext } from "../../store/auth-context";
import { Form, Alert } from "react-bootstrap";

export default function Login() {
  const [error, setError] = useState("");

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
    setError("");

    if (!formIsValid) {
      return;
    }

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });

    resetEmailInput();
    resetPasswordInput();
  };

  const emailErrClass = emailInputHasErr ? "control invalid" : "control";

  const passwordErrClass = passwordInputHasErr ? "control invalid" : "control";

  return (
    <Fragment>
      <Header />
      <div className={classes.login}>
        <span className={classes.loginTitle}>Login</span>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className={classes.loginForm} onSubmit={formHandler}>
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
            Login
          </Buttons>

          <Link className="link" to="/password">
            Forget Password?
          </Link>

          <p className={classes.links}>
            Dont have an account?
            <Link className="link" to="/register">
              Register?
            </Link>
          </p>
          {/* {error && <span>Wrong email or password!!!</span>} */}
        </Form>
      </div>
    </Fragment>
  );
}
