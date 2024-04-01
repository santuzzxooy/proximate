import React from "react";

function Sidebar() {
	return (
		<div className="wrapper">
			<input type="checkbox" id="btn" hidden />
			<label htmlFor="btn" className="menu-btn">
				<i className="fas fa-bars">Open</i>
				<i className="fas fa-times">X</i>
			</label>
			<nav id="sidebar">
				<div className="title">Menu</div>
				<ul className="list-items">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/login">login</a>
					</li>
					<li>
						<a href="/welcome">welcome</a>
					</li>
					<li>
						<a href="/services">Services</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
