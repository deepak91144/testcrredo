import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ClassIcon from "@material-ui/icons/Class";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import AssistantIcon from "@material-ui/icons/Assistant";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SchoolIcon from "@material-ui/icons/School";

const OverallSummary = () => {
	return (
		<>
			<div className="sum-con">
				<h2
					className="summary-text"
					style={{ color: "white", marginLeft: "135px" }}
				>
					Overall Summary
				</h2>
			</div>

			<div className="main-container">
				<div className="os-conatiner">
					<tr className="first-heading">
						<th>
							<div>
								<AssignmentIcon className="icons" />
								task completed/created
							</div>
							<span>1/6</span>
						</th>
						<th>
							<div>
								<ClassIcon className="icons" />
								class completed/created
							</div>
							<span>5/21</span>
						</th>
					</tr>

					<tr className="second-heading">
						<th>
							<div>
								<AllInboxIcon className="icons" />
								Lightbox:Classified/Total Images
							</div>
							<span>500/3000</span>
						</th>
						<th>
							<div>
								<AssistantIcon className="icons" />
								Standard:Annotated/Total Images
							</div>
							<span>2600/5500</span>
						</th>
					</tr>
				</div>
				<div
					className="second-section"
					style={{
						float: "right",
						position: "relative",
						right: "140px",
						bottom: "180px",
						color: "white",
						backgroundColor: "#282c34",
						width: "30%",
						borderRadius: "10px",
					}}
				>
					<tr className="first-heading">
						<th>
							<div>
								<AssignmentIcon className="icons" />
								Standard:Task/Class
							</div>
							<span>1/6</span>
						</th>
						<th>
							<div>
								<PermIdentityIcon className="icons" />
								Elves
							</div>
							<span className="last">5/21</span>
						</th>
					</tr>

					<tr className="second-heading">
						<th>
							<div>
								<ClassIcon className="icons" />
								Lightbox:Task/Class
							</div>
							<span>500/3000</span>
						</th>
						<th>
							<div>
								<SchoolIcon className="icons" />
								QC
							</div>
							<span className="last">2600/5500</span>
						</th>
					</tr>
				</div>
			</div>
		</>
	);
};
export default OverallSummary;
