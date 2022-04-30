import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import { Card, CardImg } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig/Firebase";
import { AuthContext } from "../../../store/auth-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  // const price = `#${props.price.toFixed(2)}`;

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
  };

  return (
    <div className="product">
      <Card className={classes.meal}>
        <Card.Body className={classes.meal_body}>
          <CardImg
            className={classes.mealImg}
            src={props.images}
            alt="A table full of delicious food!"
          />
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <div className={classes.card_header}>
              <h3>{props.name}</h3>
              <div className={classes.price}>
                ₦{props.price.toLocaleString("en-US")}
              </div>
            </div>

            <div className={classes.description}>
              {props.description.substring(0, 50)}....
            </div>

            <div>Fast delivery</div>

            <div className={classes.split}>
              <MealItemForm
                // id={props.author.id}
                onAddToCart={addToCartHandler}
              />
              {currentUser && props.postId === auth.currentUser.uid && (
                <DeleteIcon
                  onClick={() => deletePosts(props.id)}
                  className={classes.deletePost}
                />
              )}
            </div>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MealItem;
