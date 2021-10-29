import React from 'react'
import styles from "./HomeScreen.module.css";
import foodImg from "../../assets/food_for_readme.jpg"

function HomeScreen() {
    return (
        <main className={styles.homeContainer}>
            <h1>Pablos Sportsbar</h1>
            <p>Welcome to Pablos Sportsbar! To give you a pleasant stay, we would like you to tell us your favourite dishes and sports.</p>
            <img src={foodImg} className={styles.homeImg} alt="Food and drinks" />
        </main>
    )
}

export default HomeScreen
