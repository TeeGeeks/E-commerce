import React, { useContext } from "react";
import Cart from "../Carts/Cart";
import Meals from "../Meals/Meals";
import images from "../../assets/horticulture.jpg";
import Header from "../Layout/Header";
import classes from "./MainBody.module.css";
import { AuthContext } from "../../store/auth-context";

function MainBody(props) {
  const { showCartHandler, hideCartHandler, cartIsShown } =
    useContext(AuthContext);

  return (
    <>
      <Header
        setIsAuth={props.setIsAuth}
        isAuth={props.isAuth}
        onShow={showCartHandler}
      />

      <div className={classes.main_image}>
        <img src={images} alt="best agriculture products" />
      </div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals onClose={hideCartHandler} />
      </main>
    </>
  );
}

export default MainBody;
