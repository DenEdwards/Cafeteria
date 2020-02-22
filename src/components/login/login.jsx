import React from "react";
import loginImg from "./images/login.svg";
import "./style.scss";

export class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="base-container">
				<div className="header">Login</div>
				<div className="content">
					<div className="image">
						<img src={loginImg} alt="Login Image" />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" name="username" placeholder="username" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" placeholder="password" />
						</div>
					</div>
				</div>
				<div className="footer">
					<button type="button" className="lgn-btn">
						Login
					</button>
				</div>
			</div>
		);
	}
}
