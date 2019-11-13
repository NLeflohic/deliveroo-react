import React, { useState, useEffect } from 'react';
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Menus from "./Components/Menus";
import Basket from "./Components/Basket";
import axios from "axios";
import "./reset.css";
import './App.css';

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setMenu(response.data.menu);
    setRestaurant(response.data.restaurant);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="app">
      <Header />
      {isLoading === true ? <p>Chargement</p> :
        <div className="products">
          <Presentation restaurant={restaurant} />
          <div className="menus-wrapper">
            <div className="wrapper-menus">
              <div className="wrapper-card">
                <Menus menu={menu} basket={basket} basketFunc={setBasket} />
              </div>
              <div className="wrapper-basket">
                <Basket basket={basket} basketFunc={setBasket} />
              </div>
            </div>
          </div >
        </div>
      }
    </div >
  );
}

export default App;
