import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import DoneIcon from "@material-ui/icons/Done";
const OverallPerformance = () => {
	return (
		<>
			<h2 className="op-text">Overall Performance</h2>
			<div className="op-container">
				<div className="op-first-section">
					<th>
						<div>
							<AssignmentIcon className="icons" />
							Total Annotated Images
						</div>
						<span>61000</span>
					</th>
				</div>
				<div className="op-second-section">
					<th>
						<div>
							<ThumbUpIcon className="icons" />
							OC Approved Images
						</div>
						<span>40000</span>
					</th>
				</div>
				<div className="op-third-section">
					<th>
						<div>
							<ThumbDownIcon className="icons" />
							OC Disapproved Images
						</div>
						<span>21000</span>
					</th>
				</div>
				<div className="op-fourth-section">
					<th>
						<div>
							<DoneIcon className="icons" />
							Accuracy
						</div>
						<span>65%</span>
					</th>
				</div>
			</div>
		</>
	);
};
export default OverallPerformance;
