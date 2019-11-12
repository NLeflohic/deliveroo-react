import React, { useState } from "react";

const Quantity = (props) => {
	const [quantity, setQuantity] = useState(1);

	const addClick = () => {
		const newBasket = [...props.basket];
		console.log(newBasket);
		for (let i = 0; i < newBasket.length; i++) {
			if (newBasket[i].id === props.id) {
				console.log("id : " + newBasket[i].id);
				setQuantity(quantity + 1);
				newBasket[i].quantity = newBasket[i].quantity + 1;
				props.basketFunc(newBasket);
				break;
			}
		}
	}

	const delClick = () => {
		const newBasket = [...props.basket];
		for (let i = 0; i < newBasket.length; i++) {
			if (newBasket[i].id === props.id) {
				console.log("id : " + newBasket[i].id);
				if (newBasket[i].quantity === 1) {
					newBasket.splice(i, 1);
					setQuantity(quantity - 1);
					props.basketFunc(newBasket);
					console.log(newBasket);
				} else {
					setQuantity(quantity - 1);
					newBasket[i].quantity = newBasket[i].quantity - 1;
					console.log(newBasket);
					props.basketFunc(newBasket);
				}

				break;
			}
		}
		console.log(newBasket);
	}
	return (
		<div className="quantity">
			<svg className="svg-quantity" onClick={addClick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00CDBD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
			{props.quantity}
			<svg className="svg-quantity" onClick={delClick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00CDBD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
		</div>
	);
}

export default Quantity;