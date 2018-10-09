import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import config from './config';
import mail from './mail';

const WebPortalApp = combineReducers({
  visibilityFilter,
  config,
  mail,
});

export default WebPortalApp;
