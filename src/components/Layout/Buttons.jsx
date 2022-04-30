import React from "react";
import classes from "./Buttons.module.css";

function Buttons(props) {
  const classListName = `${props.className} ${classes.btn}`;

  return (
    <button
      className={classListName}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

export default Buttons;
