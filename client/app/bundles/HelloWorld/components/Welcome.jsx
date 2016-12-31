import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import { Router } from 'react-router';

export default class Welcome extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {  };
  }

  componentWillUpdate(nextProps, nextState) {
  	console.log(nextProps.posts[0]);
  }

  componentDidMount() {
  	this.props.fetchArticles();	
  }

	render() {
		return (
			<div>
<div className="container">
	<div className="row">
		<div className="col-md-7">

			<div className="row">
				<div className="panel panel-default">
					<div className="panel-body content">

						<div className="dropdown right-menu">
						  <a href="#" className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						    <span className="glyphicon glyphicon-menu-down"></span>
						  </a>
						  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <li><a href="#">Action</a></li>
						    <li><a href="#">Another action</a></li>
						    <li><a href="#">Something else here</a></li>
						    <li role="separator" className="divider"></li>
						    <li><a href="#">Separated link</a></li>
						  </ul>
						</div>

						<div className="media posts-info">
						  <div className="media-left media-top">
						    <a href="#">
						      <img className="media-object" src="dp.png" alt="..." />
						    </a>
						  </div>
						  <div className="media-body">
						    <h3 className="media-heading">Politics in India</h3>
						    <small>By Author1</small>
						  </div>
						</div>

						<hr/>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum architecto libero eaque ratione odio a esse illo veniam dolor, sequi quisquam voluptatem velit harum fugiat temporibus! Et, reprehenderit, distinctio.
						</p>
					</div>
					<div className="panel-footer">
						<div className="row">
							<span className="col-md-4 text-center options">
								<a href="#">
									<i className="fa fa-thumbs-up" aria-hidden="true"></i> Appreciate
								</a>
							</span>
							<span className="col-md-4 text-center options">
								<a href="#">
									<i className="fa fa-comment" aria-hidden="true"></i> Comment
								</a>
							</span>
							<span className="col-md-4 text-center">
								<a href="#">
								<i className="fa fa-user-plus" aria-hidden="true"></i>	Follow Writer
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="panel panel-default">
					<div className="panel-body content">

						<div className="dropdown right-menu">
						  <a href="#" className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						    <span className="glyphicon glyphicon-menu-down"></span>
						  </a>
						  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <li><a href="#">Action</a></li>
						    <li><a href="#">Another action</a></li>
						    <li><a href="#">Something else here</a></li>
						    <li role="separator" className="divider"></li>
						    <li><a href="#">Separated link</a></li>
						  </ul>
						</div>

						<div className="media posts-info">
						  <div className="media-left media-top">
						    <a href="#">
						      <img className="media-object" src="dp.png" alt="..." />
						    </a>
						  </div>
						  <div className="media-body">
						    <h3 className="media-heading">Machine Learning</h3>
						    <small>By Author2</small>
						  </div>
						</div>
						<hr/>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, atque numquam fugit quibusdam voluptatibus nulla obcaecati, necessitatibus ipsam soluta libero laborum enim odio maxime dignissimos vitae aliquam vel quas!

						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam culpa dolores earum, minus exercitationem ex doloribus, qui, rem atque recusandae impedit odit itaque expedita autem suscipit architecto quidem nulla natus.

						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam cupiditate recusandae atque sint doloremque. Eligendi nesciunt ex labore earum blanditiis nulla, harum impedit perferendis vero beatae! Sint corporis harum provident.
						</p>
					</div>
					<div className="panel-footer">
						<div className="row">
							<span className="col-md-4 text-center options">
								<a href="#">
									<i className="fa fa-thumbs-up" aria-hidden="true"></i> Appreciate
								</a>
							</span>
							<span className="col-md-4 text-center options">
								<a href="#">
									<i className="fa fa-comment" aria-hidden="true"></i> Comment
								</a>
							</span>
							<span className="col-md-4 text-center">
								<a href="#">
									<i className="fa fa-user-plus" aria-hidden="true"></i>	Follow Writer
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="col-md-4 col-md-offset-1">
			<div id="fixed">
			<div className="row">
				<button type="submit" className="btn btn-success" data-toggle="modal" id="add_post"><span className="glyphicon glyphicon-plus"></span> Add Post</button>
			</div>
				<br/>
				<div className="row">
					<div className="panel panel-success">
						<div className="panel-heading">Weather</div>
						<div className="panel-body">
							<h3>Weather</h3>
							<hr/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="panel panel-success">
						<div className="panel-heading">Alerts &amp; Events</div>
						<div className="panel-body">
							<h3>Alerts &amp; Events</h3>
							<hr/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>
	

<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Add Article</h4>
      </div>
      <div className="modal-body">
      	  <form className="form">
	      	  <input type="text" className="form-control" placeholder="Heading" />
	      	  <hr/>
		      <textarea className="form-control" name="post" id="post-box" placeholder="Your content..."></textarea>
		      <br/>
		      <label className="btn btn-default btn-file">
			      Upload Image<input type="file" className="form-control" style={{display:"none"}} placeholder="Upload image" multiple="" />
			  </label>
		  </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
	<h1>Hello Welcome</h1>
</div>
		)
	}
}