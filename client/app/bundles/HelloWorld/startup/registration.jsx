import ReactOnRails from 'react-on-rails';

import HelloWorldApp from './HelloWorldApp';

import helloWorldReducer from '../reducers/helloWorldReducer';
import helloReduxStore from '../stores/helloReduxStore';

// This is how react_on_rails can see the HelloWorld in the browser.
// implement hot-reloading 
// fix server rendering

// register all available stores
ReactOnRails.registerStore({
	helloReduxStore
});

// register the root page of the application
ReactOnRails.register({
  HelloWorldApp,
});
