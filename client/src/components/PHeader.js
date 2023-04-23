import React, { useContext, useState } from "react";
import "../styles/PHeader.css";
import pf from "../assets/pf.jpeg";
import { UserContext } from "./UserContext";
import MyModal from "./MyModal.js";
import FollowersModal from "./FollowersModal.js";

const PHeader = () => {
	const user = {};
	user.name = "Sidhant";
	user.email = "siddhanthanwate0@gmail.com";
	let followersLength = "";
	if (user.followers) {
		followersLength = user.followers.length;
	}

	const [modalToggle, setModalToggle] = useState(false);

	const [followersToggle, setFollowersToggle] = useState(false);

	const handleModal = () => {
		setModalToggle(!modalToggle);
	};

	const handleFollowersModal = () => {
		setFollowersToggle(!modalToggle);
	};

	return (
		<>
			<div className="cipher__PHeader">
				<div className="cipher__PHeader-left">
					<div className="cipher__PHeader_imagecontent">
						<img
							className="cipher__PHeader_imagecontent-image"
							src={pf}
							alt="ProfilePic"
						/>
						<i
							className="bi bi-wrench-adjustable-circle-fill cipher__PHeader_imagecontent-icon"
							onClick={handleModal}
						/>
					</div>
					<div className="cipher__PHeader_namecontent">
						<div className="cipher__PHeader_namecontent-subheading">Hello,</div>
						<div className="cipher__PHeader_namecontent-heading">
							{user.name}
						</div>
						<div className="cipher__PHeader_namecontent-email">
							{user.email}
						</div>
					</div>
				</div>
				<div className="cipher__PHeader-right">
					<div
						className="cipher__PHeader_followers"
						onClick={handleFollowersModal}
					>
						{followersLength} Followers
					</div>
				</div>
			</div>
			{modalToggle && (
				<MyModal modalToggle={modalToggle} setModalToggle={setModalToggle} />
			)}
			{followersToggle && (
				<FollowersModal
					followersToggle={followersToggle}
					setFollowersToggle={setFollowersToggle}
				/>
			)}
		</>
	);
};

export default PHeader;
