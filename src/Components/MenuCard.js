import React from "react";

const MenuCard = (props) => {

	const onCardClick = () => {
		if (props.basket.length === 0) {
			console.log("basket empty");
			const newBasket = [...props.basket];
			newBasket.push({ id: props.menu.id, title: props.menu.title, price: props.menu.price, quantity: 1 });
			props.basketFunc(newBasket);
		} else {
			console.log("basket full");
			const newBasket = [...props.basket];
			for (let i = 0; i < newBasket.length; i++) {
				if (newBasket[i].id === props.menu.id) {
					console.log(newBasket[i].id + " vs " + props.menu.id)
					newBasket[i].quantity = newBasket[i].quantity + 1;
					props.basketFunc(newBasket);
					console.log(props.basket);
					console.log(newBasket);
					return
				}
			}
			newBasket.push({ id: props.menu.id, title: props.menu.title, price: props.menu.price, quantity: 1 });
			props.basketFunc(newBasket);
			console.log(props.basket);
			console.log(newBasket);
		}
	}


	return (
		<div key={props.menu.id} className="menu-card">
			<div className="card" onClick={onCardClick}>
				<div className="card-text">
					<h3 className="card-title">{props.menu.title}</h3>
					<p className="card-description">{props.menu.description.slice(0, 42)}</p>

					{props.menu.popular ? <div><span className="price">{props.menu.price}</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#FF8001" stroke="#FF8001" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
						<span className="popular">Populaire</span> </div> : <span className="price">{props.menu.price}</span>}
				</div>
				{
					props.menu.picture !== undefined ? <img className="card-image" src={props.menu.picture} alt="images" />
						: null
				}
			</div>
		</div>)
}

export default MenuCard;