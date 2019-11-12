import React from "react";

const Presentation = (props) => {
	console.log(props.restaurant);
	return (
		<div className="presentation">
			<div className="wrapper wrapper-presentation">
				<div className="presentation-text">
					<h1 className="name">{props.restaurant.name}</h1>
					<p className="description">{props.restaurant.description}</p>
				</div>
				<img className="presentation-image" src={props.restaurant.picture} alt="presentation_picture" />
			</div>
		</div>
	)
}

export default Presentation;