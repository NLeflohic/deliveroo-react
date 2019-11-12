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
      <Menus />
      <MenuCard />
      <Basket />
    </div>
  );
}

export default App;
