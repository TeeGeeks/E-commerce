import React from "react";
import { Fragment } from "react";
import useValidate from "../../hooks/use-validate";
import Buttons from "../Layout/Buttons";
import "./ContactUs.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { toast } from "react-toastify";

// const Alert = (props) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

export default function ContactUs() {
  const [open, setOpen] = React.useState(false);

  const {
    value: enteredName,
    hasError: nameHasErr,
    valueIsValid: nameIsValid,
    valueHandler: nameHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredSubject,
    hasError: subjectHasErr,
    valueIsValid: subjectIsValid,
    valueHandler: subjectHandler,
    valueBlurHandler: subjectBlurHandler,
    reset: subjectReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasErr,
    valueIsValid: emailIsValid,
    valueHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useValidate((value) => value.includes("@"));

  const {
    value: enteredMessage,
    hasError: messageHasErr,
    valueIsValid: messageIsValid,
    valueHandler: messageHandler,
    valueBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useValidate((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && subjectIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setOpen(true);

    if (!formIsValid) {
      return;
    }

    nameReset();
    subjectReset();
    emailReset();
    messageReset();

    try {
      const res = await addDoc(collection(db, "users"), {
        name: enteredName,
        email: enteredEmail,
        subject: enteredSubject,
        message: enteredMessage,
        timeStamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", res.id);
      toast.success("You have successfully sent your message!!!", {
        position: "bottom-left",
      });
    } catch (err) {
      console.log(err);
      toast.error("Please try agin, your message did not go through!!!", {
        position: "bottom-left",
      });
    }
  };

  const nameClass = nameHasErr ? "control invalid" : "control";
  const subjectClass = subjectHasErr ? "control invalid" : "control";
  const emailClass = emailHasErr ? "control invalid" : "control";
  const messageClass = messageHasErr ? "control invalid" : "control";

  return (
    <Fragment>
      <div className="product-container">
        <h3>Contact Us</h3>
        <form className="contact-us" onSubmit={formHandler}>
          <div className={nameClass}>
            <label> Name </label>
            <input
              type="text"
              name="name"
              value={enteredName}
              onChange={nameHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasErr && (
              <p className="error-text">Please enter your name.</p>
            )}
          </div>

          <div className={subjectClass}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={enteredSubject}
              onChange={subjectHandler}
              onBlur={subjectBlurHandler}
            />
            {subjectHasErr && (
              <p className="error-text">Please enter your subject.</p>
            )}
          </div>

          <div className={emailClass}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={enteredEmail}
              onChange={emailHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasErr && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>

          <div className={messageClass}>
            <label>Message</label>
            <textarea
              name="textarea"
              type="text"
              id=""
              value={enteredMessage}
              onChange={messageHandler}
              onBlur={messageBlurHandler}
            ></textarea>
            {messageHasErr && (
              <p className="error-text">Please enter your message</p>
            )}
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              elevation={6}
              variant="filled"
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Your Message Has Been Successfully Sent!
            </Alert>
          </Snackbar>

          <div className="contact-btn">
            <Buttons disabled={!formIsValid}>Send</Buttons>
          </div>
          <div></div>
        </form>
      </div>
    </Fragment>
  );
}
