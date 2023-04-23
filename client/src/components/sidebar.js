import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
	return (
		<div className="cipher__sidebar">
			<div className="cipher__sidebar-up">
				<div className="cipher__sidebar-components">
					<i className="bi bi-house-fill cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Home</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-journals cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Courses</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-compass-fill cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Trending</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-person-fill cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Following</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-boxes cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Dashboard</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-discord cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Discord</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-c-circle-fill cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Creator Access</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-chat-left-text cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Feedback</div>
				</div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-flag cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Tour</div>
				</div>
			</div>
			<div className="cipher__sidebar-down">
				<div className="cipher__sidebar-divider"></div>
				<div className="cipher__sidebar-components">
					<i className="bi bi-wrench-adjustable-circle cipher__sidebar-logo" />
					<div className="cipher__sidebar-logoTitle">Logout</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
