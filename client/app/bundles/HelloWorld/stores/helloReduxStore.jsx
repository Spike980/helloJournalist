import { createStore } from 'redux';
import helloWorldReducer from '../reducers/helloWorldReducer';


/*
 *  Export a function that takes the props and returns a Redux store
 *  This is used so that 2 components can have the same store.
 */
export default (props, railsContext) => {
	console.log(props);
  return createStore(helloWorldReducer, props);
};