import React from "react";
import ProImg from "./profile.jpg";
const QcSummary = () => {
	return (
		<>
			<h2 className="qs-text">QC Summary</h2>
			<ul className="qs-list">
				<li>reviewd images:500</li>
				<li>Reassinged images:1</li>
				<li>Rectified images:1</li>
			</ul>
			<div className="qs-container">
				<img src={ProImg} />
				{/* <button className="btn"></button> */}
				<span className="qc-text">qc reviewd</span>
				<tr className="qs-first-section">
					<th>
						<div>#01</div>
						<span>classID</span>
					</th>
					<th>
						<div>500</div>
						<span>Total Images Reviewed</span>
					</th>
				</tr>

				<tr className="qs-second-section">
					<th>
						<div>Reassinged</div>
						<span>150 images to 2 views</span>
					</th>
				</tr>
				<tr className="qs-third-section">
					<th>
						<div>Rectified</div>
						<span>150 images </span>
					</th>
				</tr>
				<tr className="qs-fourth-section">
					<th>
						<div>quality checked</div>
						<span>Tahir Hussain </span>
					</th>
				</tr>
				<tr className="qs-fifth-section">
					<th>
						<div>Date</div>
						<span>20/2/2019 </span>
					</th>
				</tr>
			</div>
		</>
	);
};
export default QcSummary;
