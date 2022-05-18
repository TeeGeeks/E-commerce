import { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./Available.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import LoadingSpinner from "../UI/LoadingSpinner";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      const postsCollectionRef = collection(db, "posts");

      const posts = await getDocs(postsCollectionRef);

      const data = posts.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: data[key].id,
          postId: data[key].author.id,
          productId: data[key].productId,
          images: data[key].imageUrl,
          name: data[key].name,
          description: data[key].productDesc,
          price: data[key].productPrice,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={classes.meals_loading}>
        <div className="centered">
          <LoadingSpinner />
          <p>Loading Products...</p>
        </div>
        {/* <CircularProgress disableShrink className={classes.loading_spinner} /> */}
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.meals_error}>
        <p>{error}</p>
        <p>Error Loading product! Please check your connection and try again</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      postId={meal.postId}
      images={meal.images}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <div className={classes.home}>
      <section className={classes.meals}>
        <ul className={classes.mealsList}>{mealsList}</ul>
      </section>
    </div>
  );
};

export default AvailableMeals;
