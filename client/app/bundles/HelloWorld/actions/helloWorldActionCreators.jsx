/* eslint-disable import/prefer-default-export */

import * as nameConstants from '../constants/helloWorldConstants';
import { Auth } from '../startup/HelloWorldApp';

// a fix to make the j-toker send authentication header with every request
function sendAuthHeaders() {
  	$.ajaxSetup({
	  beforeSend: function(xhr, settings) {
	    // append outbound auth headers
	    Auth.appendAuthHeaders(xhr, settings);
	  }
	});
}

export const updateName = (text) => ({
  type: nameConstants.HELLO_WORLD_NAME_UPDATE,
  text,
});

export const requestArticles = () => ({
	type: nameConstants.WELCOME_REQUEST_ARTICLES
});

export const receiveArticles = (result) => ({
	type: nameConstants.WELCOME_RECEIVE_ARTICLES,
	result
});

export const postedArticle = (result) => ({
	type: nameConstants.WELCOME_POST_ARTICLES,
	result
});


export const likedArticle = (result) => ({
	type: nameConstants.POST_LIKE_ARTICLE,
	result
});

// thunk action creator to send request to server to like article
// accepts id of the post to increment likes of 
export function likeArticle(id) {
	return function(dispatch) {
		sendAuthHeaders();
		$.ajax({
 
		    // The URL for the request
		    url: `http://localhost:3000/articles/${id}/like`,
		 
		    // Whether this is a POST or GET request
		    type: "GET",

		 
		    // The type of data we expect back
		    dataType : "json",
		 
		}).done(function(result) {
			dispatch(likedArticle(result));
		});
	}

}

// post an article to the server
// accepts the data(heading and post_content) to be posted
export function postArticle(data) {
	return function(dispatch) {
		sendAuthHeaders();
		$.ajax({
 
		    // The URL for the request
		    url: "http://localhost:3000/articles",
		 
		    // Whether this is a POST or GET request
		    type: "POST",

		    data: data,
		 
		    // The type of data we expect back
		    dataType : "json",
		 
		}).done(function(result) {
			dispatch(postedArticle(result)); // dispatch an action - articles receiver form the server alongwith results
		});
	}
}

// fetch all available articles from the server
export function fetchArticles() {
	return function (dispatch) {
		// dispatch an action to signify that the articles are loading
		dispatch(requestArticles)
		sendAuthHeaders();

		$.ajax({
 
		    // The URL for the request
		    url: "http://localhost:3000/articles",
		 
		    // Whether this is a POST or GET request
		    type: "GET",
		 
		    // The type of data we expect back
		    dataType : "json",
		 
		}).done(function(result) {
			dispatch(receiveArticles(result)); // dispatch an action - articles received from the server alongwith results
		});

	}
}