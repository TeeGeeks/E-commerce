import React, { useState } from "react";
import Buttons from "../Layout/Buttons";
import "./AddProducts.css";
import Header from "../Layout/Header";
import useValidate from "../../hooks/use-validate";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { auth, db, storage } from "../../firebaseConfig/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddProducts(props) {
  const [images, setImages] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    setImages(e.target.files[0]);

    console.log(images);
  };

  const {
    value: enteredProductName,
    hasError: productNameHasErr,
    valueIsValid: productNameIsValid,
    valueHandler: productNameHandler,
    valueBlurHandler: productNameBlurHandler,
    reset: productNameReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredProductDesc,
    hasError: productDescHasErr,
    valueIsValid: productDescIsValid,
    valueHandler: productDescHandler,
    valueBlurHandler: productDescBlurHandler,
    reset: productDescReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredPrice,
    hasError: priceHasErr,
    valueIsValid: priceIsValid,
    valueHandler: priceHandler,
    valueBlurHandler: priceBlurHandler,
    reset: priceReset,
  } = useValidate((value) => value.trim().length !== 0);

  let formIsValid = false;

  if (productNameIsValid && productDescIsValid && priceIsValid && images) {
    formIsValid = true;
  }

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formIsValid) {
      return;
    }
    uploadFiles(images);

    productNameReset();
    productDescReset();
    priceReset();
    setImages();
  };

  const uploadFiles = (file) => {
    if (!file) {
      return;
    }

    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) =>
        toast.error("Error adding product", {
          position: "bottom-left",
        }),

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          if (url) {
            addDoc(collection(db, "posts"), {
              name: enteredProductName,
              productDesc: enteredProductDesc,
              productPrice: +enteredPrice,
              imageUrl: url,
              author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
              },
              timeStamp: serverTimestamp(),
            });
            toast.success("Your product has been successfully added", {
              position: "bottom-left",
            });
            navigate("/");
          }
        });
      }
    );
  };

  const productNameClass = productNameHasErr ? "control invalid" : "control";

  const productDescClass = productDescHasErr ? "control invalid" : "control";

  const priceClass = priceHasErr ? "control invalid" : "control";

  return (
    <>
      <Header />
      <div>
        <form onSubmit={formHandler}>
          <div className="settingsPP">
            <img
              className="product-image"
              src={
                images
                  ? URL.createObjectURL(images)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <label htmlFor="fileInput">
              <span className="span">Image: </span>
              <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="images/*"
              onChange={onChange}
              style={{ display: "none" }}
            ></input>
          </div>
          <div className="product-container">
            <div className={productNameClass}>
              <label>Products Name</label>
              <input
                type="text"
                value={enteredProductName}
                onChange={productNameHandler}
                onBlur={productNameBlurHandler}
              />
              {productNameHasErr && (
                <p className="error-text">Please enter a valid product name.</p>
              )}
            </div>
            <div className={productDescClass}>
              <label>Products Description</label>
              <input
                type="text"
                value={enteredProductDesc}
                onChange={productDescHandler}
                onBlur={productDescBlurHandler}
              />
              {productDescHasErr && (
                <p className="error-text">
                  Please enter a valid product description.
                </p>
              )}
            </div>

            <div className={priceClass}>
              <label>Price</label>
              <input
                type="number"
                value={enteredPrice}
                onChange={priceHandler}
                onBlur={priceBlurHandler}
              />
              {priceHasErr && (
                <p className="error-text">
                  Please enter a valid product price.
                </p>
              )}
            </div>
            {progress === 0 ? null : (
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped mt-2"
                  style={{ width: `${progress}% ` }}
                >
                  Uploaded {progress} %
                </div>
              </div>
            )}

            <div className="product-btn">
              <Buttons disabled={!formIsValid}>
                {loading && <i className="fa fa-refresh fa-spin" />}Post
              </Buttons>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

// if (url) {
//   fetch(
//     "https://react-http-9f1d7-default-rtdb.firebaseio.com/products.json",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         productName: enteredProductName,
//         productDesc: enteredProductDesc,
//         productPrice: +enteredPrice,
//         imageUrl: url,
//       }),
//       headers: { "Content-Type": "application/json" },
//     }
//   ).then((res) => {
//     console.log(res);
//   });
// }
// });
