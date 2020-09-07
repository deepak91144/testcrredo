import React from "react";
import "./App.css";
import Employees from "./Employees";
import Header from "./Header";
import Report from "./Report";
import Error from "./Error";


import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Employees} />
				<Route exact path="/report" component={Report}></Route>
				<Route exact component={Error}></Route>
			</Switch>
		</>
	);
}

export default App;
