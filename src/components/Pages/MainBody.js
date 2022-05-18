import React, { useContext } from "react";
import Cart from "../Carts/Cart";
import Meals from "../Meals/Meals";
import classes from "./MainBody.module.css";
import { AuthContext } from "../../store/auth-context";

function MainBody(props) {
  const { hideCartHandler, cartIsShown } = useContext(AuthContext);

  return (
    <>
      <div className={classes.bg}>
        <div className={classes.text}>
          <h1>Welcome to our shopping page</h1>
          <p>Try some of our products and make life easy!!!</p>
        </div>
      </div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals onClose={hideCartHandler} />
      </main>
    </>
  );
}

export default MainBody;
