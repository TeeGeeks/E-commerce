import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import { Card, CardImg } from "react-bootstrap";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig/Firebase";
import { AuthContext } from "../../../store/auth-context";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      postId: props.postId,
      images: props.images,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const deletePosts = async (id) => {
    const userDoc = doc(db, "posts", id);
    await deleteDoc(userDoc);
    window.location.reload(false);
  };

  return (
    <div className="product">
      <Card className={classes.meal}>
        <Card.Body className={classes.meal_body}>
          <CardImg className={classes.mealImg} src={props.images} alt="" />
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <div className={classes.card_header}>
              <h3 className={classes.h3}>{props.name}</h3>
            </div>

            <div className={classes.description}>
              {props.description.substring(0, 15)}
              <Link className={classes.link} to={`/product/${props.id}`}>
                ...Preview product
              </Link>
            </div>

            <div className={classes.delivery}>Fast delivery</div>

            <div className={classes.split}>
              <div className={classes.price}>
                ₦{props.price.toLocaleString()}
              </div>
              <MealItemForm
                // id={props.author.id}
                onAddToCart={addToCartHandler}
              />
              {currentUser && props.postId === auth.currentUser.uid && (
                <button
                  onClick={() => deletePosts(props.id)}
                  className={classes.deleteBtn}
                >
                  <DeleteIcon className={classes.deletePost} />
                </button>
              )}
            </div>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MealItem;
