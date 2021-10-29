import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";
import HomeScreen from "./screens/home-screen/HomeScreen";
import SportsScreen from "./screens/sports-screen/SportsScreen";
import DishScreen from "./screens/dish-screen/DishScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/dishscreen" exact component={DishScreen} />
        <Route path="/sportscreen" exact component={SportsScreen} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
