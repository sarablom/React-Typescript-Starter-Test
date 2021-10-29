import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ListRender from "../../components/ListRender";
import styles from "./SportsScreen.module.css";

function SportsScreen() {
  const [context, updateContext] = useContext(Context);
  const items = context.sports;
  const type = "sports";

  return (
    <main className={styles.sportsContainer}>
      <h1>Your favourite sports</h1>
      <ListRender items={items} type={type} />
    </main>
  );
}

export default SportsScreen;
