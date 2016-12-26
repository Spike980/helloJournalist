import React from 'react';
import { Link } from 'react-router';

const divStyle = {
	height: '100%'
};

const Main = React.createClass({
	render() {
		return (
			<div style={divStyle}>
			    <nav id="primNav" className="navbar navbar-default navbar-fixed-top" style={{ background: '#1BBC9B' }}>
			        <div className="container-fluid">
			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			                    <span className="sr-only">Toggle navigation</span>
			                    <span className="icon-bar"></span>
			                    <span className="icon-bar"></span>
			                    <span className="icon-bar"></span>
			                </button>
			                <a className="navbar-brand page-scroll" href="#page-top">hc</a>
			            </div>

			            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                <ul className="nav navbar-nav navbar-right">
			                    <li>
			                        <a href="#" data-toggle="modal" data-target="#login">Login</a>
			                    </li>
			                    <li>
			                        <a href="/register">Signup</a>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </nav>

				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;