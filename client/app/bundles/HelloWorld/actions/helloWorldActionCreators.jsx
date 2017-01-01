/* eslint-disable import/prefer-default-export */

import * as nameConstants from '../constants/helloWorldConstants';
import { Auth } from '../startup/HelloWorldApp';

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

export function likeArticle(id) {
	return function(dispatch) {
	  	$.ajaxSetup({
		  beforeSend: function(xhr, settings) {
		    // append outbound auth headers
		    Auth.appendAuthHeaders(xhr, settings);
		  }
		});

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


export function postArticle(data) {
	return function(dispatch) {
	  	$.ajaxSetup({
		  beforeSend: function(xhr, settings) {
		    // append outbound auth headers
		    Auth.appendAuthHeaders(xhr, settings);
		  }
		});

		$.ajax({
 
		    // The URL for the request
		    url: "http://localhost:3000/articles",
		 
		    // Whether this is a POST or GET request
		    type: "POST",

		    data: data,
		 
		    // The type of data we expect back
		    dataType : "json",
		 
		}).done(function(result) {
			dispatch(postedArticle(result));
		});
	}
}


export function fetchArticles() {
	return function (dispatch) {
		dispatch(requestArticles)

	  	$.ajaxSetup({
		  beforeSend: function(xhr, settings) {
		    // append outbound auth headers
		    Auth.appendAuthHeaders(xhr, settings);
		  }
		});
		$.ajax({
 
		    // The URL for the request
		    url: "http://localhost:3000/articles",
		 
		    // Whether this is a POST or GET request
		    type: "GET",
		 
		    // The type of data we expect back
		    dataType : "json",
		 
		}).done(function(result) {
			dispatch(receiveArticles(result));
		});

	}
}