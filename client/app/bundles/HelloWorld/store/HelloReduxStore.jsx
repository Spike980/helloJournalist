import { createStore } from 'redux';
import helloWorldReducer from '../reducers/helloWorldReducer';

export default HelloReduxStore = (props, railsContext) => {
  return createStore(helloWorldReducer, props);
};



// var store = createStore(helloWorldReducer);
