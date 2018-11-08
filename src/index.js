import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import Home from './components/views/Home';

import WebPortalApp from './reducers';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(WebPortalApp), // new root reducer with router state
  // initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunkMiddleware,
    ),
  ),
);

render(
  <Provider store={store}>
    <App>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" render={() => (<Home />)} />
            {
              // stanard routes go here
              // <Route path="/about" render={() => (<About />)} />
            }
          </Switch>
        </div>
      </ConnectedRouter>
    </App>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
