import React from "react";
import MenuCard from "./MenuCard";

const Menus = () => {
	return (
		<div className="menus">
			<h1 className="menu-title">Menus</h1>
			<div className="card-menu">
				<MenuCard />
				<MenuCard />
				<MenuCard />
				<MenuCard />
				<MenuCard />
				<MenuCard />
			</div>
		</div>)
}

export default Menus;