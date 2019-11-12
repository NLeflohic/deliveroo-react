import React from "react";
import Logo from "../Images/deliveroo.png";

const Header = () => {
    return (
        <div className="header">
            <img className="image" src={Logo} alt="Logo" />
        </div>
    );
};

export default Header;