import "../styles/toggle.css";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";

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
