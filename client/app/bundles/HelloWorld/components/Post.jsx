import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import { Router } from 'react-router';


// disable the Appreciate button once user has clicked
const appreciateButtonDisabled = {
   pointerEvents: 'none',
   cursor: 'default',
   color: "#333",
};

// default state of appreciate button with no specific styling
const appreciateButtonEnabled = {
};

export default class Post  extends React.Component {
  static propTypes = {
    post: PropTypes.object.isRequired, 
    index: PropTypes.number.isRequired,
    likeArticle: PropTypes.func.isRequired,
  };

	constructor(props) {
		super(props);

		this.state = { likeButton: appreciateButtonEnabled }
	}

	// increment likes of a post and dispatch an action for the same
	// task - "implement feature that a user can only like a post once"
	addLikes(event) {
		event.preventDefault();
		this.props.likeArticle(this.props.post.id);
		// change the state of Appreciate button when it is clicked to change the styling
		this.setState({
			likeButton: appreciateButtonDisabled
		});
	}

	render() {
		return (
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
					    <h3 className="media-heading">{this.props.post.heading}</h3>
					    <small>By {this.props.post.user.name}</small>
					  </div>
					</div>
					<hr/>
					<p>
						{this.props.post.post}
					</p>
				</div>
				<div className="panel-footer">
					<div className="row">
						<span className="col-md-4 text-center options">
							<a href="#" onClick={this.addLikes.bind(this)} id={this.props.index} style={this.state.likeButton}>
								<i className="fa fa-thumbs-up" aria-hidden="true"></i> Appreciate <strong>({this.props.post.likes})</strong>
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
	)	
	}																																				
}