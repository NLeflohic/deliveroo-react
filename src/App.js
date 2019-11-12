import React from 'react';
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Menus from "./Components/Menus";
import MenuCard from "./Components/MenuCard";
import Basket from "./Components/Basket";
import "./reset.css";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Presentation />
      <div className="menus-wrapper">
        <div className="wrapper-menus">
          <div className="wrapper-card">
            <Menus />
          </div>
          <div className="wrapper-basket">
            <Basket />
          </div>
        </div>
      </div >
    </div >
  );
}

export default App;
