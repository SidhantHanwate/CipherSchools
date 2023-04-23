import React from "react";
import "../styles/content.css";
import map from "../assets/map.jpg";

const Content = () => {
	return (
		<div className="cipher__content">
			<div className="cipher__content_about">
				<div className="cipher__content_about__heading">
					<div className="cipher__content_about__heading-title">ABOUT ME</div>
					<button className="cipher__content_about__heading-button">
						Edit
					</button>
				</div>
				<textarea
					type="text"
					className="cipher__content_about-input"
					placeholder="Add something about you."
				></textarea>
			</div>
			<div className="cipher__content-divider"></div>
			<div className="cipher__content_map">
				<div className="cipher__content_map-title">CIPHER MAP</div>
				<img className="cipher__content_map-image" src={map} alt="CipherMap" />
			</div>
			<div className="cipher__content-divider"></div>
			<div className="cipher__content_socials">
				<div className="cipher__content_about__heading">
					<div className="cipher__content_about__heading-title">ON THE WEB</div>
					<button className="cipher__content_about__heading-button">
						Edit
					</button>
				</div>
				<div className="cipher__content_socials__inputs">
					<div className="cipher__content_socials__inputs_cards">
						<div className="cipher__content_socials__inputs_cards-title">
							LinkedIn
						</div>
						<div className="cipher__content_socials__inputs_cards-tab">
							<i className="bi bi-linkedin cipher__content_socials__inputs_cards-icon" />
							<input
								className="cipher__content_socials__inputs_cards-input"
								placeholder="LinkedIn"
							/>
						</div>
					</div>
					<div className="cipher__content_socials__inputs_cards">
						<div className="cipher__content_socials__inputs_cards-title">
							GitHub
						</div>
						<div className="cipher__content_socials__inputs_cards-tab">
							<i className="bi bi-github cipher__content_socials__inputs_cards-icon" />
							<input
								className="cipher__content_socials__inputs_cards-input"
								placeholder="GitHub"
							/>
						</div>
					</div>
					<div className="cipher__content_socials__inputs_cards">
						<div className="cipher__content_socials__inputs_cards-title">
							Facebook
						</div>
						<div className="cipher__content_socials__inputs_cards-tab">
							<i className="bi bi-facebook cipher__content_socials__inputs_cards-icon" />
							<input
								className="cipher__content_socials__inputs_cards-input"
								placeholder="Facebook"
							/>
						</div>
					</div>
					<div className="cipher__content_socials__inputs_cards">
						<div className="cipher__content_socials__inputs_cards-title">
							Twitter
						</div>
						<div className="cipher__content_socials__inputs_cards-tab">
							<i className="bi bi-twitter cipher__content_socials__inputs_cards-icon" />
							<input
								className="cipher__content_socials__inputs_cards-input"
								placeholder="Twitter"
							/>
						</div>
					</div>
					<div className="cipher__content_socials__inputs_cards">
						<div className="cipher__content_socials__inputs_cards-title">
							Instagram
						</div>
						<div className="cipher__content_socials__inputs_cards-tab">
							<i className="bi bi-instagram cipher__content_socials__inputs_cards-icon" />
							<input
								className="cipher__content_socials__inputs_cards-input"
								placeholder="Instagram"
							/>
						</div>
					</div>
					<div className="cipher__content_socials__inputs_cards">
						<div className="cipher__content_socials__inputs_cards-title">
							Website
						</div>
						<div className="cipher__content_socials__inputs_cards-tab">
							<i className="bi bi-globe cipher__content_socials__inputs_cards-icon" />
							<input
								className="cipher__content_socials__inputs_cards-input"
								placeholder="Your Website"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="cipher__content-divider"></div>
			<div className="cipher__content_info">
				<div className="cipher__content_about__heading">
					<div className="cipher__content_about__heading-title">
						PROFESSIONAL INFORMATION
					</div>
					<button className="cipher__content_about__heading-button">
						Edit
					</button>
				</div>
				<div className="cipher__content_socials__inputs cipher__content_info__inputs">
					<div className="cipher__content_socials__inputs_cards cipher__content_info-inputs">
						<div className="cipher__content_socials__inputs_cards-title">
							Highest Education
						</div>
						<div className="cipher__content_socials__inputs_cards-tab cipher__content_info-inputs_tab">
							<input
								className="cipher__content_socials__inputs_cards-input"
								placeholder="Graduation"
							/>
							<i className="bi bi-chevron-down cipher__content_socials__inputs_cards-icon cipher__content_info-icon" />
						</div>
					</div>
					<div className="cipher__content_socials__inputs_cards cipher__content_info-inputs">
						<div className="cipher__content_socials__inputs_cards-title">
							What do you do currently?
						</div>
						<div className="cipher__content_socials__inputs_cards-tab cipher__content_info-inputs_tab">
							<input
								className="cipher__content_socials__inputs_cards-input cipher__content_info-input"
								placeholder="College Student"
							/>
							<i className="bi bi-chevron-down cipher__content_socials__inputs_cards-icon cipher__content_info-icon" />
						</div>
					</div>
				</div>
			</div>
			<div className="cipher__content-divider"></div>
			<div className="cipher__content_password">
				<div className="cipher__content_about__heading">
					<div className="cipher__content_about__heading-title">
						PASSWORD AND SECURITY
					</div>
					<button className="cipher__content_about__heading-button">
						Change
					</button>
				</div>
				<div className="cipher__content_password-title">Password</div>
				<input
					placeholder="*********"
					className="cipher__content_password-input"
				></input>
			</div>
			<div className="cipher__content-divider"></div>
			<div className="cipher__content-interests">
				<div className="cipher__content_about__heading">
					<div className="cipher__content_about__heading-title">INTERESTS</div>
					<button className="cipher__content_about__heading-button">
						Edit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Content;
