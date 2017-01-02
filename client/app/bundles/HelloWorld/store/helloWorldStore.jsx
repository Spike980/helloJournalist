import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import helloWorldReducer from '../reducers/helloWorldReducer';

// for Redux-Dev Tools in browser
const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);		

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store with thunk middleware
// and ReduxDevTools integration
const configureStore = (railsProps) => (
  createStore(helloWorldReducer, railsProps, composeEnhancers(applyMiddleware(thunk)))
);

export default configureStore;
