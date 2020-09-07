import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import ProImg from "./profile.jpg";
import OverallSummary from "./OverallSummary";
import QcSummary from "./QcSummary";
import OverallPerformance from "./OverallPerformance";
const Employees = () => {
	const [loading, setloading] = useState("loading...");
	const [emp, setemp] = useState([]);
	useEffect(() => {
		async function getEmployees() {
			const res = await axios.get(
				"http://dummy.restapiexample.com/api/v1/employees"
			);
			console.log(res.data.data);
			setemp(res.data.data);
		}
		getEmployees();
	});
	return (
		<>
			<OverallSummary />
			<QcSummary />
			<div className="elve-con">
				<h2
					className="elve-text"
					style={{
						color: "white",
						marginLeft: "135px",
						marginTop: "120px",
						clear: "both",
					}}
				>
					Top Elves
				</h2>
			</div>
			{emp != "" ? (
				""
			) : (
				<div className="loading">
					<h3 style={{ color: "red" }}>
						Wait A While, Data Loading From API...
					</h3>
				</div>
			)}

			<div className="card-wrap">
				{emp.map((value, index) => {
					return (
						<>
							<Card
								key={index}
								id={value.id}
								name={value.employee_name}
								salary={value.employee_salary}
								age={value.employee_age}
								img={ProImg}
							/>
						</>
					);
				})}
			</div>
			<OverallPerformance />
		</>
	);
};
export default Employees;
