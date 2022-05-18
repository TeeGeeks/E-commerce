import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { AuthContext } from "../../store/auth-context";
import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  const { hideCartHandler } = useContext(AuthContext);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={hideCartHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("backdrop")
      )}
    </Fragment>
  );
}

export default Modal;
