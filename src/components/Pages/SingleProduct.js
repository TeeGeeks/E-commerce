import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import MealItemForm from "../Meals/MealItem/MealItemForm";
import classes from "./SingleProduct.module.css";
import CartContext from "../../store/cart-context";
import { AuthContext } from "../../store/auth-context";
import Cart from "../Carts/Cart";
import LoadingSpinner from "../UI/LoadingSpinner";

const SingleProduct = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const cartCtx = useContext(CartContext);
  const { hideCartHandler, cartIsShown } = useContext(AuthContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meals.id,
      images: meals.imageUrl,
      name: meals.name,
      amount: amount,
      price: meals.productPrice,
    });
  };

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const postsCollectionRef = collection(db, "posts");

      const posts = await getDocs(postsCollectionRef);

      const product = posts.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const data = product.find((product) => product.id === params.productId);
      console.log(data);

      setMeals(data);
    };
    fetchMeals().catch((error) => {
      console.log(error);
    });
    setIsLoading(false);
  }, [params.productId]);

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.product_container}>
        <div className={classes.product_image}>
          <img className={classes.img} src={meals.imageUrl} alt="" />
        </div>
        <div className={classes.product_detail}>
          <div className={classes.name_price}>
            <h3>{meals.name}</h3>
            <p>₦{meals.productPrice}</p>
          </div>
          <MealItemForm onAddToCart={addToCartHandler} />
          <div className={classes.product_description}>
            <h4>Product Details</h4>
            <p>{meals.productDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
