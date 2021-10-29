import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ListRender from "../../components/ListRender";
import styles from "./DishScreen.module.css";

function DishScreen() {
  const [context, updateContext] = useContext(Context);
  const items = context.dishes;
  const type = "dishes";

  // async function removeItemHandler(item) {
  //   await deleteDish(item.id);
  // }

  return (
    <main className={styles.dishContainer}>
      <h1>Your favourite dishes</h1>
      <ListRender items={items} type={type} />
    </main>
  );
}

export default DishScreen;
