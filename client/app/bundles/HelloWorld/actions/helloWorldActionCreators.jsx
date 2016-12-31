/* eslint-disable import/prefer-default-export */

import { HELLO_WORLD_NAME_UPDATE, WELCOME_REQUEST_ARTICLES, WELCOME_RECEIVE_ARTICLES } from '../constants/helloWorldConstants';

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text,
});

export const requestArticles = () => ({
	type: WELCOME_REQUEST_ARTICLES
});

export const receiveArticles = (result) => ({
	type: WELCOME_RECEIVE_ARTICLES,
	result
});


export function fetchArticles() {
	return function (dispatch) {
		dispatch(requestArticles)

		$.ajax({
 
		    // The URL for the request
		    url: "/articles",
		 
		    // Whether this is a POST or GET request
		    type: "GET",
		 
		    // The type of data we expect back
		    dataType : "json",
		 
		}).done(function(result) {
			dispatch(receiveArticles(result));
		});

	}
}