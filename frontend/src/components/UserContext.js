import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		axios
			.post("http://localhost:5000/api/v1/auth/login", {
				email: "siddhant@gmail.com",
				password: "12345678",
			})
			.then((res) => {
				setUser(res.data.user);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
