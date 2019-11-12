import React from "react";
import Logo from "../Images/deliveroo.png";

const Header = () => {
	return (
		<div className="header">
			<div className="wrapper">
				<img className="image" src={Logo} alt="Logo" />
			</div>
		</div>
	);
};

export default Header;