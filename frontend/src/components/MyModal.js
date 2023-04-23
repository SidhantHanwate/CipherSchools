import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import "../styles/myModal.css";
import pf from "../assets/pf.jpeg";
import axios from "axios";
import { UserContext } from "./UserContext";

const MyModal = (props) => {
	const [show, setShow] = useState(true);
	const [payload, setPayload] = useState({});

	const { user, setUser } = useContext(UserContext);

	const handleClose = () => {
		setShow(false);
		props.setModalToggle(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.patch(`http://localhost:5000/api/v1/auth/update/${user._id}`, payload)
			.then((res) => {
				setUser(res.data.user);
			})
			.catch((err) => {
				console.log(err);
			});
		handleClose();
	};

	const handleChange = (e) => {
		setPayload({ ...payload, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="cipher__modal_content">
						<div className="cipher__modal-profile">
							<img className="cipher__modal-image" src={pf} alt="ProfilePic" />
							<i className="bi bi-wrench-adjustable-circle-fill cipher__modal-icon" />
						</div>
						<div className="cipher__modal-formContent">
							<form className="cipher__modal-form" onSubmit={handleSubmit}>
								<div className="cipher__modal-formItem">
									<label className="cipher__modal-label">Username</label>
									<input
										className="cipher__modal-input"
										type="text"
										name="username"
										placeholder="Enter the username"
										onChange={handleChange}
									/>
								</div>
								<div className="cipher__modal-formItem">
									<label className="cipher__modal-label">Email</label>
									<input
										className="cipher__modal-input"
										type="email"
										name="email"
										placeholder="Enter the email"
										onChange={handleChange}
									/>
								</div>
								<div className="cipher__modal-formItem">
									<label className="cipher__modal-label">Password</label>
									<input
										className="cipher__modal-input"
										type="password"
										name="password"
										placeholder="Enter the password"
										onChange={handleChange}
									/>
								</div>
								<div className="modal__cipher-buttons">
									<button className="modal__cipher-save" type="submit">
										Save
									</button>
									<button
										className="modal__cipher-cancel"
										onClick={handleClose}
									>
										Cancel
									</button>
								</div>
							</form>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default MyModal;
