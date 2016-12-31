import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import { Router } from 'react-router';
import Post from './Post';

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

  componentDidMount() {
  	this.props.fetchArticles();	
  }

	render() {
		return (
	<div>
		<div className="container">
			<div className="row">
				<div className="col-md-7">

					{this.props.posts.map((post, index) => 
						<Post {...this.props} key={index} index={index} post={post} />
					)}
				</div>
				<div className="col-md-4 col-md-offset-1">
					<div id="fixed">
					<div className="row">
						<button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal" id="add_post"><span className="glyphicon glyphicon-plus"></span> Add Post</button>
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
	</div>
		)
	}
}