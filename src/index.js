import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/views/About';
import Home from './components/views/Home';

import WebPortalApp from './reducers';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { getRoutes } from './routes';

const store = createStore(WebPortalApp, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    {
      // <App>
      //   <Router>
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route path="/about" component={About} />
      //     </Switch>
      //   </Router>
      // </App>
    }
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
