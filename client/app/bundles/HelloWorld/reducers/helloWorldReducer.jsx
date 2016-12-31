import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE, WELCOME_REQUEST_ARTICLES, WELCOME_RECEIVE_ARTICLES } from '../constants/helloWorldConstants';
import { routerReducer } from 'react-router-redux';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const posts = (state='', action) => {
  switch (action.type) {
    case WELCOME_RECEIVE_ARTICLES:
    	return action.result;
    default:
  		return state;
	}

};

const helloWorldReducer = combineReducers({ name, posts,
		routing: routerReducer });

export default helloWorldReducer;
