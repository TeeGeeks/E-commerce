import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Products from "../Pages/Products";
import { Link } from "react-router-dom";

function Cart(props) {
  const [isCheckingOut, setCheckingOut] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  // const totalAmount = `#${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          images={item.images}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const sendingOrderHandler = async (orderSent) => {
    setSubmitting(true);
    await fetch(
      "https://react-http-9f1d7-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          itemsSent: cartCtx.items,
          orderDetails: orderSent,
        }),
      }
    );
    setSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearItem();
  };

  const orderHandler = () => {
    setCheckingOut(true);
  };

  const cartContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₦{cartCtx.totalAmount.toLocaleString("en-US")}</span>
      </div>
      {isCheckingOut && (
        <Products
          onSendOrder={sendingOrderHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isCheckingOut && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <Link
              className={classes.button_link}
              to="/products"
              onOrder={orderHandler}
            >
              <button className={classes.button}>Order </button>
            </Link>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const cartSubmitted = (
    <React.Fragment>
      <p>Sent Order Successfully</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  const cartIsSubmitting = <p>Order is Submitting</p>;

  return (
    <Modal onHideCart={props.onClose}>
      {!isSubmitting && !didSubmit && cartContent}
      {isSubmitting && cartIsSubmitting}
      {didSubmit && !isSubmitting && cartSubmitted}
    </Modal>
  );
}

export default Cart;
