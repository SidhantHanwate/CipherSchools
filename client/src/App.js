import React from "react";
import "./App.css";
import Navbar from "../src/components/navbar";
import Sidebar from "./components/sidebar";
import RSidebar from "./components/RSidebar";
import PHeader from "./components/PHeader";
import Content from "./components/Content";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<RSidebar />
			<PHeader />
			<Content />
		</div>
	);
};

export default App;
