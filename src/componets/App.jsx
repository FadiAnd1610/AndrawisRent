import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavScrollExample from "./NavScrollExample";
import Details from "./Details";
import Reservation from "./Reservation";
import Cards from "./Cards";
import Clients from "./Clients";
import Vehicles from "./Vehicles";
import Footer from "./Footer";
import ChooseCar from "./ChooseCar";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";


function App() {
  const [currentForm, setcurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setcurrentForm(formName);
  };
  return (
      <div className="App">
          
         

      <NavScrollExample />
      <Details />
      <Reservation />
      <Vehicles />
      <ChooseCar />
      <Cards />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
