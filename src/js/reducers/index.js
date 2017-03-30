import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import projects from 'reducers/projectReducer';

export default combineReducers({
  projects,
  routing
});
