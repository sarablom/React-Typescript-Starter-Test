import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../context/Context";
import styles from "./SportsScreen.module.css";
import { getSports, deleteSport } from "../../services/databaseFetches";
import { asyncDelay } from "../../utils/async-delay";

function SportsScreen() {
  const [context, updateContext] = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const sports = context.sports;

  useEffect(() => {
    fetchSports();
  }, [sports]);

  async function fetchSports() {
    await asyncDelay(2000);
    let data = await getSports();
    setIsLoading(false);
    updateContext({
      sports: data,
    })
  }

  async function removeSportHandler(sportId) {
    await deleteSport(sportId);
  }

  return (
    <main className={styles.sportsContainer}>
      <h1>Your favourite sports</h1>
      {isLoading && <h2>Loading ...</h2>}
      {!isLoading && <ul className={styles.sportsList}>
        {sports &&
          sports.map((sport) => (
            <li key={sport.id} className={styles.sportListItem}>
              <h2 className={styles.sportListTitle}>{sport.title}</h2>
              <p className={styles.sportListPara}>{sport.description}</p>
              <img
                src={sport.url}
                className={styles.sportListImg}
                alt={sport.title}
              />
              <button
                className={styles.btn}
                onClick={() => removeSportHandler(sport.id)}
              >
                Delete from favourite
              </button>
            </li>
          ))}
        {sports.length === 0 && <p>You have no favourite sports :(</p>}
      </ul>}
    </main>
  );
}

export default SportsScreen;
