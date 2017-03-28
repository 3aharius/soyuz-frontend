import CommonEventEmitter from "./CommonEventEmitter";
import keys from 'keys';

let _projects = [];
let _project = {};

export default class ProjectStore extends CommonEventEmitter {

	getAll() {
		return _projects;
	};

	getProject() {
		return _project;
	}

	handleActions(action) {
	    switch(action.type) {
		    case keys.PROJECT_LISTS_LOAD_SUCCESS: {
	        	_projects = action.items;
	            this.emitChange();
	            break;
	        }
		    case keys.PROJECT_LOAD_SUCCESS: {
	        	_project = action.item;
	            this.emitChange();
	            break;
	        }
    	}
  	}

}
