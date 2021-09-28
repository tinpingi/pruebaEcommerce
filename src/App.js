import React, { Component } from "react";
import "./styles.css";

//Components
import NavBar from "./components/NavBar";
//+1 elemento JSX retornado:
// envolver en un div o utilizar un Fragment <>

let name = "Martin";
let city = "Buenos Aires";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <p>Nombre del usuario: {name} </p>
          <p>Ciudad: {city} </p>
        </div>
      </div>
    );
  }
}
export default App;