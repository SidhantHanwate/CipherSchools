import React, { useState, useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../styles/FollowersModal.css";
import axios from "axios";
import { UserContext } from "./UserContext";
import pf from "../assets/pf.jpeg";

const FollowersModal = (props) => {
	const [show, setShow] = useState(true);
	const [followers, setFollowers] = useState([]);

	const { user } = useContext(UserContext);

	const handleClose = () => {
		setShow(false);
		props.setFollowersToggle(false);
	};

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/v1/users/${user._id}/followers`)
			.then((res) => {
				setFollowers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Followers</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="cipher__followersModal_content">
						<div className="cipher__followersModal-profile">
							<img
								className="cipher__followersModal-image"
								src={pf}
								alt="ProfilePic"
							/>
						</div>
						<div className="cipher__followersModal_divider"></div>
						<div className="cipher__followersModal-list">
							{followers.map((follower) => (
								<div
									className="cipher__followersModal-listItem"
									key={follower._id}
								>
									<p className="cipher__followersModal-listItemName">
										{follower.username}
									</p>
									<p className="cipher__followersModal-listItemEmail">
										{follower.email}
									</p>
								</div>
							))}
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default FollowersModal;
