import ReactOnRails from 'react-on-rails';

import HelloWorldApp from './HelloWorldApp';

import helloWorldReducer from '../reducers/helloWorldReducer';
import helloReduxStore from '../stores/helloReduxStore';

// This is how react_on_rails can see the HelloWorld in the browser.

ReactOnRails.registerStore({
	helloReduxStore
});

ReactOnRails.register({
  HelloWorldApp,
});
