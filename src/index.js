import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import About from './components/views/About';
import Home from './components/views/Home';
import StandardPipes from './components/views/Pipes/StandardPipes';
import CustomPipes from './components/views/Pipes/CustomPipes';
import ProShop from './components/views/Pipes/ProShop';
import Swag from './components/views/Swag';
import Contact from './components/views/Contact';
import Events from './components/views/Events';
import Gallery from './components/views/Gallery';

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
            <Route path="/about" render={() => (<About />)} />
            <Route path="/standardpipes" render={() => (<StandardPipes />)} />
            <Route path="/custompipes" render={() => (<CustomPipes />)} />
            <Route path="/proshop" render={() => (<ProShop />)} />
            <Route path="/swag" render={() => (<Swag />)} />
            <Route path="/contact" render={() => (<Contact />)} />
            <Route path="/events" render={() => (<Events />)} />
            <Route path="/gallery" render={() => (<Gallery />)} />
          </Switch>
        </div>
      </ConnectedRouter>
    </App>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
