import AppDispatcher from 'dispatcher';
import keys from 'keys';
import {toSeoName} from 'components/Project';
import axios from 'axios';

const _stubProjects = require('data/Projects.json');

export function loadProjects() {
	axios.get('/api/projects')
	.then(responce => {
		let {data: items} = responce;
	    AppDispatcher.dispatch({
	        type: keys.PROJECT_LISTS_LOAD_SUCCESS,
	        items
	    });
	})
	.catch(error => {
	    console.log(error);
	    AppDispatcher.dispatch({
	        type: keys.PROJECT_LISTS_LOAD_FAIL,
	        items: _stubProjects
	    });
	});      
}

export function loadProjectBySeoName(seoName) {
	let item = _stubProjects.find(el => seoName === toSeoName(el.title));
	AppDispatcher.dispatch({
        type: keys.PROJECT_LOAD_SUCCESS,
        item
    });        
}