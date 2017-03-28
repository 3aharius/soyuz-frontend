import AppDispatcher from 'dispatcher';
import keys from 'keys';
import {toSeoName} from 'components/Project';

const _stubProjects = require('data/Projects.json');

export function loadProjects() {
	AppDispatcher.dispatch({
        type: keys.PROJECT_LISTS_LOAD_SUCCESS,
        items: _stubProjects
    });        
}

export function loadProjectBySeoName(seoName) {
	let item = _stubProjects.find(el => seoName === toSeoName(el.title));
	AppDispatcher.dispatch({
        type: keys.PROJECT_LOAD_SUCCESS,
        item
    });        
}