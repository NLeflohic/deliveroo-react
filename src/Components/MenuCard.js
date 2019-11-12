import React from "react";

const MenuCard = (props) => {
    console.log(props.menu.picture);
    return (
        <div key={props.menu.id + props.menu.title} className="menu-card">
            <div className="card">
                <div className="card-text">
                    <h3 className="card-title">{props.menu.title}</h3>
                    <p className="card-description">{props.menu.description.slice(0, 42)}</p>
                    <p className="price">{props.menu.price}</p>
                </div>
                {
                    props.menu.picture !== undefined ? <img className="card-image" src={props.menu.picture} alt="images" />
                        : null
                }
            </div>
        </div>)
}

export default MenuCard;