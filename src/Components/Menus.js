import React from "react";
import MenuCard from "./MenuCard";

const Menus = (props) => {
	console.log(props.menu);
	const keys = Object.keys(props.menu);


	return (
		<div className="menus">

			{
				keys.map((key, index) => {
					if (props.menu[key].length > 0) {
						return (
							<div key={key} >
								<h1 className="menu-title" key={key}>{key}</h1>
								<div className="card-menu">
									{
										props.menu[key].map((content, index) => {
											return <MenuCard key={key + index} id={index} menu={content} />
										})
									}
								</div>
							</div>
						)
					} else {
						return null;
					}
				}
				)}
		</div >)
}

export default Menus;