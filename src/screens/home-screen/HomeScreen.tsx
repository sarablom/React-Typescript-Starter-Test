import React from 'react'
import styles from "./HomeScreen.module.css";

function HomeScreen() {
    return (
        <div className={styles.homeContainer}>
            <h1>Pablos Sportsbar</h1>
            <p>Welcome to Pablos Sportsbar! To give you a pleasant stay, we would like you to tell us your favourite dishes and sports.</p>
        </div>
    )
}

export default HomeScreen
