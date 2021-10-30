import React from "react";
import ListRender from "../../components/listrender/ListRender";
import styles from "./SportsScreen.module.css";

function SportsScreen() {
  const type = "sports";

  return (
    <main className={styles.sportsContainer}>
      <h1>Your favourite sports</h1>
      <ListRender type={type} />
    </main>
  );
}

export default SportsScreen;
