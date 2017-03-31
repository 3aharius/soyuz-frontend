import ActionType from 'actions/actionType';
import {toSeoName} from 'components/Project';
import axios from 'axios';

export function fetchProjects() {
	return (dispatch) => {
		dispatch({
	        type: ActionType.FETCH_PROJECTS,
	        payload: axios.get('/api/projects')
	    });
  	}     
}

export function fetchDefaultProjects() {
    let payload = new Promise((resolve, reject) => setTimeout(() => {
        resolve({data: require('data/Projects.json')});
      }, 1000)
    );
    return {
      type: ActionType.FETCH_PROJECTS,
      payload
    };  
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
	let projects = require('data/Projects.json');
	return (dispatch) => {
	    let payload = new Promise((resolve, reject) => setTimeout(() => {
		    resolve({data: projects.find(el => seoName === toSeoName(el.title))});
		  }, 1000)
		);
	    dispatch({
	        type: ActionType.FETCH_PROJECT,
	        payload
	    });
  	}        
}