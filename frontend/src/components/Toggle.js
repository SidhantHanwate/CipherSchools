import React from "react";
import "../styles/toggle.css";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";

const Toggle = () => {
	return (
		<div class="form-check form-switch">
			<img src={Sun} alt="" className="t-icon" />
			<img src={Moon} alt="" className="t-icon" />
			<div className="t-button"></div>
		</div>
	);
};

export default Toggle;
