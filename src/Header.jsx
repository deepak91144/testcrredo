import React from "react";
import { NavLink } from "react-router-dom";
import ProImg from "./profile.jpg";

const Header = () => {
	return (
		<>
			<div className="Header">
				<h2 className="company-name">
                
					<span className="first-name">crredo</span>
					<span className="last-name">Graphy</span>
				</h2>
				<div className="menu">
					<ul>
						<li>
							<NavLink exact to="/">
								dashboard
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/report">
								report
							</NavLink>
						</li>
					</ul>
					<div className="img-container">
						<img src={ProImg} height="50" width="50" />
					</div>
				</div>
			</div>
		</>
	);
};
export default Header;
