import React from "react";
import "../styles/navbar.css";
import Toggle from "../components/Toggle";
import Logo from "../assets/Logo.png";
import pf from "../assets/pf.jpeg";
import points from "../assets/points.svg";

const Header = () => {
	return (
		<div className="cipher__header">
			<div className="cipher__header-left">
				<i className="bi bi-list cipher__header-icon" />
				<img className="cipher__header-logo" src={Logo} alt="Logo" />
				<div className="cipher__header-title">CipherSchools</div>
				<div className="cipher__header_browse">
					<i className="bi bi-compass cipher__header_browse-icon" />
					<div className="cipher__header_browse-text">Browse</div>
					<i className="bi bi-chevron-down cipher__header_browse-icon" />
				</div>
			</div>
			<div className="cipher__header-right">
				<div className="cipher__header-searchbar">
					<i className="bi bi-search cipher__header_input-icon" />
					<input
						className="cipher__header_input"
						placeholder="Search and Learn"
					/>
					<i className="bi bi-ui-radios cipher__header_input-icon" />
				</div>
				<i className="bi bi-bell cipher__header-rightIcon" />
				<img className="cipher__header-profile" src={pf} alt="ProfileImage" />
				<img className="cipher__header-points" src={points} alt="LogoPoints" />
				<Toggle />
			</div>
		</div>
	);
};

export default Header;
