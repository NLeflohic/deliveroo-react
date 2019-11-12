import React, { useState } from "react";
import Quantity from "./Quantity";
import TotalCart from "./TotalCart";

const Basket = (props) => {

	return (
		<div className="basket">
			<button className={(props.basket.length > 0) ? "button-blue  button-valider" : "button-grey button-valider"} >Valider mon panier</button>
			<div className="command">
				{
					props.basket.map((commandLine, index) => {
						console.log("Render basket");
						return (
							<div key={commandLine.id} className="command-line">
								<Quantity id={commandLine.id} basket={props.basket} basketFunc={props.basketFunc} quantity={commandLine.quantity} />
								<div className="command-detail">
									<span className="label">{commandLine.title}</span>
									<span className="total-line">{commandLine.price}</span>
								</div>
							</div>
						)
					})
				}
			</div>
			<TotalCart basket={props.basket} />

		</div >);
}

export default Basket;