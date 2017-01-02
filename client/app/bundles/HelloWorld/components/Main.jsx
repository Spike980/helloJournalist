import React, { PropTypes } from 'react';
import { Auth } from '../startup/HelloWorldApp';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';

const divStyle = {
	height: '100%'
};

export default class HelloWorld extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
  }

  componentWillMount() {
  	console.log("Main component");
  }


  	// handle the logout of the user session
	logout(event) {
		event.preventDefault();

		Auth.signOut().then(function(data) {
			console.log(data);
			console.log("logout");
			location.reload('/')
			// browserHistory.push('/');
		});
	}	

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
			                <a className="navbar-brand page-scroll" id="page_navbar_brand" href="#page-top">hj</a>
			            </div>

			            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                <ul className="nav navbar-nav navbar-right">
			                    <li>
			                        <a href="#" onClick={this.logout.bind(this)}>Logout</a>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </nav>
				<nav className="navbar navbar-default" id="secondary-nav" role="navigation">

						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav ">
								<li><a href="#"><i className="fa fa-flag" aria-hidden="true"></i> National</a></li>
								<li><a href="#"><i className="fa fa-plane" aria-hidden="true"></i> International</a></li>
								<li><a href="#"><i className="fa fa-inr" aria-hidden="true"></i> Business</a></li>
								<li><a href="#"><i className="fa fa-futbol-o" aria-hidden="true"></i> Sports</a></li>
								<li><a href="#"><i className="fa fa-home" aria-hidden="true"></i> Local</a></li>
								<li><a href="#"><i className="fa fa-film" aria-hidden="true"></i> Entertainment</a></li>
								<li><a href="#"><i className="fa fa-random" aria-hidden="true"></i> Misc</a></li>
								<li><a href="#"><i className="fa fa-line-chart" aria-hidden="true"></i> Trending</a></li>
								<li><a href="#"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Personalized</a></li>
								<li><a href="#"><i className="fa fa-users" aria-hidden="true"></i> Followed Authors</a></li>
							</ul>
						</div>					
				</nav>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}
