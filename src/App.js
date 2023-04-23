import React from "react";
import "./App.css";
import Navbar from "../src/components/navbar";
import Sidebar from "./components/sidebar";
import RSidebar from "./components/RSidebar";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<RSidebar />
		</div>
	);
};

export default App;
