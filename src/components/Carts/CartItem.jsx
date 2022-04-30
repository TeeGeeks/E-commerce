import classes from "./CartItem.module.css";
// import images from "../../assets/horticulture.jpg";

const CartItem = (props) => {
  // const price = `#${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <img className={classes.img} src={props.images} alt=""></img>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>
            ₦{props.price.toLocaleString("en-US")}
          </span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
