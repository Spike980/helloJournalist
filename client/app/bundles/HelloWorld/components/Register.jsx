import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import { Auth } from '../startup/HelloWorldApp';
import {browserHistory} from 'react-router';

  const divStyle = {
    height: '100%'
  };

  const mainContent = {
  	paddingTop: '70px'
  };

  const formPanel = {
  	width: '50%'
  };

export default class Register extends React.Component {

  componentWillMount() {
    console.log("Register component");
  	if (Auth.user.name)
  		browserHistory.push('/react-router');
  }

  // handle the submission and user registration form and dispatch an action for the same
  handleSubmit(event) {
    event.preventDefault();

    Auth.emailSignUp({
      email: this.email.value,
      password: this.password.value,
      password_confirmation: this.password_confirmation.value
    }).then(function() {   // signIn the new user if the signUp was successful
    	Auth.emailSignIn({
    		email: this.email.value,
    		password: this.password.value
    	});
    	browserHistory.push('/react-router');	 // load the articles page
    }.bind(this));
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
			                <a className="navbar-brand page-scroll" id="page_navbar_brand" href="#page-top">hc</a>
			            </div>

			            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                <ul className="nav navbar-nav navbar-right">
			                    <li>
			                        <a href="/">Login</a>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </nav>

			    <div id="registerForm" style={mainContent}>
				    <div className="panel panel-success center-block" style={formPanel}>
					  <div className="panel-heading">
					    <h3 className="panel-title">Signup</h3>
					  </div>
					  <div className="panel-body">
	                    <form className="form-horizontal" role="form" onSubmit={this.handleSubmit.bind(this)}>

	                        <div className="form-group">
	                            <label htmlFor="email" className="col-xs-2 control-label">E-Mail: </label>

	                            <div className="col-xs-10">
	                                <input type="email" className="form-control" name="email" id="loginId" ref={(input) => 
	                                    { this.email = input; }} />
	                            </div>
	                        </div>

	                        <div className="form-group">
	                            <label htmlFor="password" className="col-xs-2 control-label">Password</label>

	                            <div className="col-xs-10">
	                                <input type="password" className="form-control" name="password" id="password" 
	                                    ref={(input) => { this.password = input; }} />
	                            </div>
	                        </div>

	                        <div className="form-group">
	                            <label htmlFor="password_confirmation" className="col-xs-2 control-label">Password Confirmation</label>

	                            <div className="col-xs-10">
	                                <input type="password" className="form-control" name="password_confirmation" id="password_confirmation" 
	                                    ref={(input) => { this.password_confirmation = input; }} />
	                            </div>
	                        </div>

	                        <div className="form-group">
	                            <div className="col-md-6 col-md-offset-5">
	                                <button type="submit" name="login" className="btn btn-success">
	                                    <i className="fa fa-btn fa-sign-in"></i> Register
	                                </button>
	                            </div>
	                        </div>
	                    </form>
					  </div>
					</div>

			    </div>
			</div>
	    )
	}
}	