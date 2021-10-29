import React, { useEffect, useState } from "react";
import styles from "./SportsScreen.module.css";
import { getSports, deleteSport } from "../../utils/databaseFetches";

function SportsScreen() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetchSports();
  }, [sports]);

  async function fetchSports() {
    let data = await getSports();
    setSports(data);
  }

  async function removeSportHandler(sportId) {
    const data = await deleteSport(sportId);
  }

  return (
    <main className={styles.sportsContainer}>
      <h1>Your favourite sports</h1>
      <ul className={styles.sportsList}>
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
      </ul>
    </main>
  );
}

export default SportsScreen;
