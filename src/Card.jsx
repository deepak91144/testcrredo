import React from "react";
const Card = (props) => {
	return (
		<>
			<div className="card">
				<img src={props.img} />
				<div className="container">
					<h4 className="name">
						<b>{props.name}</b>
					</h4>

					<tr className="heading-row">
						<th>id</th>
						<th>salary</th>
					</tr>
					<tr className="data-row">
						<td>{props.id}</td>
						<td>{props.salary}</td>
					</tr>
					<tr className="heading-row">
						<th>age</th>
					</tr>
					<tr className="data-row">
						<td>{props.age}</td>
					</tr>
				</div>
			</div>
		</>
	);
};
export default Card;
