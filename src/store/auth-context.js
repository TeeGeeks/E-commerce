import {
  confirmPasswordReset,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useReducer, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/Firebase";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [isAuth, setIsAuth] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    setIsAuth(true);
  }, [state.currentUser]);

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  const forgotPassword = (enteredEmail) => {
    return sendPasswordResetEmail(auth, enteredEmail, {
      url: "http://localhost:3000/sign-in",
    });
  };

  const resetPassword = (oobCode, enteredPassword) => {
    return confirmPasswordReset(auth, oobCode, enteredPassword);
  };

  return (
    <AuthContext.Provider
      value={{
        showCartHandler,
        hideCartHandler,
        cartIsShown,
        currentUser: state.currentUser,
        googleSignIn,
        dispatch,
        isAuth,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
