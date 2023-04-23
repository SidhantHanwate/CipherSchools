import React from "react";
import "./App.css";
import Navbar from "../src/components/navbar";
import Sidebar from "./components/sidebar";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
		</div>
	);
};

export default App;
