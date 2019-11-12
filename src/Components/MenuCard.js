import React from "react";

const MenuCard = () => {
    return (
        <div className="menu-card">
            <div className="card">
                <div className="card-text">
                    <h3 className="card-title">Card title</h3>
                    <p className="card-description">description de u truc</p>
                    <p className="price">25e</p>
                </div>
                <img className="card-image" src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg" alt="img" />
            </div>
        </div>)
}

export default MenuCard;