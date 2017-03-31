import ActionType from 'actions/actionType';
import {fetchDefaultProjects} from 'actions/projectActions';

export default function produce(action) {
    switch (action.type) {
      case ActionType.FETCH_PROJECTS_REJECTED: {
        return fetchDefaultProjects();
      }
    }
}
