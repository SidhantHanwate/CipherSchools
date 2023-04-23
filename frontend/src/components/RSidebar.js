import React from "react";
import "../styles/RSidebar.css"

const RSidebar = () => {
	return (
		<div className="cipher__rightSidebar">
			<div className="cipher__rightSidebar-up">
				<div className="cipher__rightSidebar-components">
					<i className="bi bi-boxes cipher__rightSidebar-logo" />
					<div className="cipher__rightSidebar-logoTitle">Dashboard</div>
				</div>
				<div className="cipher__rightSidebar-components">
					<i className="bi bi-person-circle cipher__rightSidebar-logo" />
					<div className="cipher__rightSidebar-logoTitle">Profile</div>
				</div>
				<div className="cipher__rightSidebar-components">
					<i className="bi bi-journals cipher__rightSidebar-logo" />
					<div className="cipher__rightSidebar-logoTitle">Courses</div>
				</div>
				<div className="cipher__rightSidebar-components">
					<i className="bi bi-bookmark-heart cipher__rightSidebar-logo" />
					<div className="cipher__rightSidebar-logoTitle">Wishlist</div>
				</div>
				<div className="cipher__rightSidebar-components">
					<i className="bi bi-hand-thumbs-up-fill cipher__rightSidebar-logo" />
					<div className="cipher__rightSidebar-logoTitle">Liked Videos</div>
				</div>
			</div>
			<div className="cipher__rightSidebar-down"></div>
		</div>
	);
};

export default RSidebar;
