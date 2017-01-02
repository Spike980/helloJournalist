import { combineReducers } from 'redux';
import * as nameConstants from '../constants/helloWorldConstants';
import { routerReducer } from 'react-router-redux';

// checking setup of react_on_rails 
const name = (state = '', action) => {
  switch (action.type) {
    case nameConstants.HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

// reducer to handle the posts store
const posts = (state='', action) => {
  switch (action.type) {
    // return all the articles fetched from server
    case nameConstants.WELCOME_RECEIVE_ARTICLES:
    	return action.result;

    // update the store with new article posted
    case nameConstants.WELCOME_POST_ARTICLES:
      return [action.result].concat(state);
    // increment the likes count of Article liked  
    case nameConstants.POST_LIKE_ARTICLE:
      return state.map((post) => { 
          if (post.id == action.result.id) // if the id of the post is same as the post liked
          {
             post.likes+=1;
             return post;
           }
          else 
            return post; // return the post without changing if it is not liked
          });
    default:
  		return state;
	}

};

const helloWorldReducer = combineReducers({ name, posts,
		routing: routerReducer });

export default helloWorldReducer;
