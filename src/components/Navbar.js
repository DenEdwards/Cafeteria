import React, { Component } from "react";
import Logo from "../images/foodLogo.png";
import { FaCookieBite } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	state = {
		isOpen: false //By default have Navbar won't be open
	};

	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={Logo} alt="Bites for Bytes " />
						</Link>
						<button
							type="button"
							className="nav-btn"
							onClick={this.handleToggle}
						>
							<FaCookieBite className="nav-icon" />
						</button>
					</div>
					<ul
						className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
					>
						<li onClick={this.handleToggle}>
							<Link to="/">Home</Link>
						</li>
						<li onClick={this.handleToggle}>
							<Link to="/menu">Menu</Link>
						</li>
						<li onClick={this.handleToggle}>
							<Link to="/login">Login</Link>
						</li>
						<li onClick={this.handleToggle}>
							<Link to="/menu/:items">Items</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
