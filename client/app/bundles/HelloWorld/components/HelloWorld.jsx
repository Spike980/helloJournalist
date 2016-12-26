import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import { Auth } from '../startup/HelloWorldApp';
import {browserHistory} from 'react-router';



export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    console.log(this.props.name);
    this.state = { name: this.props.name };
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    // var store = ReactOnRails.getStore("helloReduxStore");    
    let router = this.context.router
      setTimeout(function() {
        router.push('react-router');
      }, 5000);
  }

  updateName = (name) => {
    this.setState({ name });
  };

  handleSubmit(event) {
    event.preventDefault();

    Auth.emailSignIn({
      email: this.email.value,
      password: this.password.value
    }).then(function(resp) {
      console.log(resp.data.name);
      console.log(Auth.user.name);
      console.log(Auth.user.email);
      router.push('react-router');
    });

  }

  render() {
    return (
          <div>


    <div className="modal fade" id="login">
        <div className="modal-dialog">
            <div className="modal-content">

                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Login</h4>
                </div>
                
                <div className="modal-body">

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
                            <div className="col-md-6 col-md-offset-5">
                                <button type="submit" name="login" className="btn btn-success">
                                    <i className="fa fa-btn fa-sign-in"></i> Login
                                </button>
                            </div>


                            <div className="col-md-6 col-md-offset-4">
                                <a className="btn btn-link" href="">Forgot Your Password?</a>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
            <h3>
              Hello, {this.state.name}!
            </h3>
            <hr />
            <form >
              <label htmlFor="name">
                Say hello to Me:
              </label>
              <input
                id="name"
                type="text"
                value={this.state.name}
                onChange={(e) => this.updateName(e.target.value)}
              />
            </form>

          </div>
    );
  }
}

  HelloWorld.defaultProps = {
    name: 'Strange',
  };