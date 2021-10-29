import React, { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import { getItems, deleteItem } from "../services/databaseFetches";
import { asyncDelay } from "../utils/async-delay";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./ListRender.module.css";

function ListRender(props) {
  const [context, updateContext] = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const items = props.items;
  const type = props.type;

  useEffect(() => {
    fetchItems();
  }, [items]);

  async function fetchItems() {
    await asyncDelay(2000);
    const data = await getItems(type);
    updateContext({
      dishes: data,
      sports: data,
    });
    setIsLoading(false);
  }

  async function removeItemHandler(type, item) {
    await deleteItem(type, item.id);
  }

  return (
    <div>
      {isLoading && (
          <ClipLoader className={styles.loader} />
      )}
      {!isLoading && (
        <ul className={styles.list}>
          {items &&
            items.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <h2 className={styles.listTitle}>{item.title}</h2>
                <p className={styles.listPara}>{item.description}</p>
                <img
                  src={item.url}
                  className={styles.listImg}
                  alt={item.title}
                />
                <button
                  className={styles.btn}
                  onClick={() => removeItemHandler(type, item)}
                >
                  Delete from favourite
                </button>
              </li>
            ))}
          {items.length === 0 && <p>You have no favourites :(</p>}
        </ul>
      )}
    </div>
  );
}

export default ListRender;
