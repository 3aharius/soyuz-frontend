require('styles/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import DevTools from 'config/devtools';
import initStore from 'config/store';

import Layout from 'layout/Layout';

import HomePage from './pages/Home/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectPage from './pages/Project/ProjectPage';
import AboutPage from './pages/About/AboutPage';
import BlogPage from './pages/Blog/BlogPage';
import ContactPage from './pages/Contact/ContactPage';

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;
const store = initStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      {devTools}
      <Router history={history}>
        <Route path="/" component={Layout}>
        	<IndexRoute component={HomePage}></IndexRoute>
          	<Route path="/projects" name="projects" component={ProjectsPage}></Route>
          	<Route path="/projects/:project" name="project" component={ProjectPage}></Route>
          	<Route path="/about" name="about" component={AboutPage}></Route>
          	<Route path="/blog" name="blog" component={BlogPage}></Route>
          	<Route path="/contact" name="contact" component={ContactPage}></Route>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('mount-point')
);