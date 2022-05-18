import CartIcon from "../Carts/CartIcon";
import React, { useContext, useEffect, useState } from "react";
import classes from "./Button.module.css";
import CartContext from "../../store/cart-context";
import { AuthContext } from "../../store/auth-context";

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const { showCartHandler } = useContext(AuthContext);

  const numberOfCartItems = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonHighlighted ? classes.bump : ""
  }`;

  const { items } = ctx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonHighlighted(true);
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
