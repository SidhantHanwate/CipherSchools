import React from "react";
import "../styles/toggle.css";

const Toggle = () => {
	return (
		<div class="form-check form-switch">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
			/>
		</div>
	);
};

export default Toggle;
