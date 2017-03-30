import ActionType from 'actions/actionType';
import {toSeoName} from 'components/Project';
import axios from 'axios';

let _projectsStub = [];

export function fetchProjects() {
	return (dispatch) => {
	    axios.get('/api/projects')
	    .then(responce => {
			let {data: projects} = responce;
			_projectsStub = projects;
		    dispatch({
		        type: ActionType.FETCH_PROJECTS_FULFILLED,
		        projects
		    });
		})
	    .catch(error => {
		    console.error(error);
		    dispatch(fetchDefaultProjects());
		});
  	}     
}

export function fetchDefaultProjects() {
	return (dispatch) => {
		let projects = require('data/Projects.json');
		_projectsStub = projects;
	    dispatch({
	        type: ActionType.FETCH_PROJECTS_FULFILLED,
	        projects
	    });
  	}
}

export function filterProjects(filter) {
	return (dispatch) => {
	    dispatch({
	        type: ActionType.FILTER_PROJECTS,
	        filter
	    });
  	}
}

export function fetchProjectBySeoName(seoName) {
	return (dispatch) => {
		let project = _projectsStub.find(el => seoName === toSeoName(el.title));
	    dispatch({
	        type: ActionType.FETCH_PROJECT_FULFILLED,
	        project
	    });
  	}        
}