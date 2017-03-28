import ProjectStore, {onProjectsLoaded} from './ProjectStore';
import AppDispatcher from 'dispatcher';


const projectStore = new ProjectStore();

AppDispatcher.register(function(action) {
    projectStore.handleActions(action);
});

export { projectStore as ProjectStore };