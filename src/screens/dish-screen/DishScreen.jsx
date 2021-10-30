import React from "react";
import ListRender from "../../components/listrender/ListRender";
import styles from "./DishScreen.module.css";

function DishScreen() {
  const type = "dishes";

  return (
    <main className={styles.dishContainer}>
      <h1>Your favourite dishes</h1>
      <ListRender type={type} />
    </main>
  );
}

export default DishScreen;
