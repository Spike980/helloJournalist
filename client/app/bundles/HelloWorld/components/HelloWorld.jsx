import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import { Auth } from '../startup/HelloWorldApp';
import {browserHistory} from 'react-router';

  const divStyle = {
    height: '100%'
  };


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
    this.state = { name: this.props.name };
  }

  componentWillMount() {
    console.log("HelloWorld component");
  }

  navigation_style() {
         var scroll_start = 0;
         var startchange = $('#about');
         var offset = startchange.offset();
         if (startchange.length){
             $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if(scroll_start > offset.top) {
                    $("#mainNav").css('background-color', '#1BBC9B');
                 } else {
                    $('#mainNav').css('background-color', 'transparent');
                 }
             });
         }
  }

  componentDidMount() {
    var store = ReactOnRails.getStore("helloReduxStore");    
    this.navigation_style();
  }

  componentWillUnmount() {
    $(document).off('scroll'); 
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
      $("#login").modal('hide');
      console.log(resp.data.name);
      console.log(Auth.user.name);
      console.log(Auth.user.email);
      location.reload();
      // browserHistory.push('/react-router');
    }.bind(this));

  }

  render() {
    return (

  <div style={divStyle}>


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

    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top" style={{ background: 'transparent' }}>
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">hj</a>
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
    <header>
        <div className="header-content">
            <div className="header-content-inner">
                <h1>hello<span style={{ color: 'yellow' }}>-</span>Journalist</h1>
                <hr/>
                <p><em>A platform to voice your opinion!</em></p>
                <a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
            </div>
        </div>
    </header>

    <section className="bg-primary" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Bringing your city closer to you!</h2>
                    <hr className="light"/>
                    <p className="text-faded">Know everything your city has for you by joining us. <br/>Or you can search directly from here.</p> 

                  <form action="" method="POST" role="form" className="form-inline">
                    
                        <div className="form-group">
                            <input type="text" className="form-control set-width" placeholder="Searching for..." />
                        </div>

                        <div className="form-group">
                            <select className="form-control set-width" defaultValue="Choose your city" placeholder="select your city">
                                <option disabled>Choose your city</option>
                                <option>New Delhi</option>
                                <option>Dhanbad</option>
                            </select>
                        </div>
                    
                        <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">What&#39;s In Here!</h2>
                    <hr className="primary"/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-users bounceIn text-primary" aria-hidden="true"></i>
                        <h3>Meet People</h3>
                        <p className="text-muted">Make new friends in a strange city and get to know more about the city from them.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-info-circle bounceIn text-primary" aria-hidden="true" ></i>
                        <h3>Stay Informed</h3>
                        <p className="text-muted">Get answer to questions like "Where can I find X?", "How can I reach X place"</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-newspaper-o bounceIn text-primary" aria-hidden="true"></i>
                        <h3>Up to Date</h3>
                        <p className="text-muted">Keep yourself updated with your city events and happenings.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-share-square-o bounceIn text-primary" aria-hidden="true" ></i>
                        <h3>Share</h3>
                        <p className="text-muted">Have something to share with your citi-<i>ites</i>! You are at the right place.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <aside className="bg-dark">
        <div className="container text-center">
            <div className="call-to-action">
                <h2>Select the city you are from!</h2>
            </div>
        </div>
    </aside>

    <section className="no-padding" id="portfolio">
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-lg-4 col-sm-6">
                    <a href="#" className="portfolio-box">
                        <img src="/images/portfolio/1.jpg" className="img-responsive" alt="Nothing" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-name">
                                    New Delhi
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="#" className="portfolio-box">
                        <img src="/images/portfolio/2.jpg" className="img-responsive" alt="Nothing" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-name">
                                    Dhanbad
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="#" className="portfolio-box">
                        <img src="/images/portfolio/3.jpg" className="img-responsive" alt="Nothing" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-name">
                                    Bengaluru
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="#" className="portfolio-box">
                        <img src="/images/portfolio/4.jpg" className="img-responsive" alt="Nothing" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-name">
                                    Ranchi
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="#" className="portfolio-box">
                        <img src="/images/portfolio/5.jpg" className="img-responsive" alt="Nothing" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-name">
                                    Kolkata
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="#" className="portfolio-box">
                        <img src="/images/portfolio/6.jpg" className="img-responsive" alt="Nothing" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-name">
                                    Bhubaneswar
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>


    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Let&#39;s Get In Touch!</h2>
                    <hr className="primary" />
                    <p>Need any more information! Have something to say! Any Complaints! Any Suggestions! <br/>Just mail me at:</p>
                </div>
                <div className="col-lg-offset-4 col-lg-4 text-center">
                    <i className="fa fa-envelope-o fa-3x bounceIn"></i>
                    <p><a href="mailto:your-email@your-domain.com">anandmallick980@gmail.com</a></p>
                </div>
            </div>
        </div>
    </section>
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