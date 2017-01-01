import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../store/helloWorldStore';
// import helloReduxStore from '../stores/helloReduxStore';
import HelloWorldContainer from '../containers/HelloWorldContainer';
import HelloWorld from '../components/HelloWorld';
import Register from '../components/Register';
import Welcome from '../components/Welcome';

export const Auth = require('j-toker');

Auth.configure({apiUrl: 'http://localhost:3000/'});


function authenticateUser(nextState, replace) {
	Auth.validateToken()
      .done(function(user) {
      	console.log(user);
      	console.log("already signin");
        browserHistory.push('/react-router');
      }.bind(this))
      .fail(function(data) {
      	console.log(data);
      	console.log("need to signin")
        browserHistory.push('/');
      });
}

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext

export default (props, _railsContext) => {
	const store = configureStore(props);
	const history = syncHistoryWithStore(browserHistory, store);

	return (
	  <Provider store={store}>
	  	<Router history={history}>
	  		<Route path="/" component={HelloWorld} onEnter={authenticateUser}></Route>
	  		<Route path="/register" component={Register}></Route>
	  		<Route path="/react-router" component={HelloWorldContainer} onEnter={authenticateUser}>
	  			<IndexRoute component={Welcome}></IndexRoute>
	  		</Route>
	  	</Router>
	  </Provider>
	);
};

