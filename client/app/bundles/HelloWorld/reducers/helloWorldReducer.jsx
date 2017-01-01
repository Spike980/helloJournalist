import { combineReducers } from 'redux';
import * as nameConstants from '../constants/helloWorldConstants';
import { routerReducer } from 'react-router-redux';

const name = (state = '', action) => {
  switch (action.type) {
    case nameConstants.HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const posts = (state='', action) => {
  switch (action.type) {
    case nameConstants.WELCOME_RECEIVE_ARTICLES:
    	return action.result;
    case nameConstants.WELCOME_POST_ARTICLES:
      console.log([action.result].concat(state));
      return [action.result].concat(state);
    default:
  		return state;
	}

};

const helloWorldReducer = combineReducers({ name, posts,
		routing: routerReducer });

export default helloWorldReducer;
