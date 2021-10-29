import React, { useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import styles from "./DishScreen.module.css";
import { getDishes, deleteDish } from "../../utils/databaseFetches";

function DishScreen() {
  const [context, updateContext] = useContext(Context);
  const dishes = context.dishes;

  useEffect(() => {
    fetchDishes();
  }, [dishes]);

  async function fetchDishes() {
    const data = await getDishes();
    updateContext({
      dishes: data,
    })
  }

  async function removeDishHandler(dish) {
    await deleteDish(dish.id);
  }

  return (
    <main className={styles.dishContainer}>
      <h1>Your favourite dishes</h1>
      <ul className={styles.dishList}>
        {dishes &&
          dishes.map((dish) => (
            <li key={dish.id} className={styles.dishListItem}>
              <h2 className={styles.dishListTitle}>{dish.title}</h2>
              <p className={styles.dishListPara}>{dish.description}</p>
              <img
                src={dish.url}
                className={styles.dishListImg}
                alt={dish.title}
              />
              <button
                className={styles.btn}
                onClick={() => removeDishHandler(dish)}
              >
                Delete from favourite
              </button>
            </li>
          ))}
        {dishes.length === 0 && <p>You have no favourite dishes :(</p>}
      </ul>
    </main>
  );
}

export default DishScreen;
