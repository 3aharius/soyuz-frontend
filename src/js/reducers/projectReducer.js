import ActionType from 'actions/actionType';


export default function reducer(state = {
    projects: [],
    fetching: false,
    fetched: false,
    error: null,
    filter: '',
    project: {}
  }, action) {
    switch (action.type) {
      case ActionType.FETCH_PROJECTS: {
        return {...state, fetching: true}
      }
      case ActionType.FETCH_PROJECTS_REJECTED: {
        return {...state, fetching: false, error: action.err}
      }
      case ActionType.FETCH_PROJECTS_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          projects: action.projects || [],
        }
      }
      case ActionType.FETCH_DEFAULT_PROJECTS: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          projects: action.projects || [],
        }
      }
      case ActionType.FILTER_PROJECTS: {
        return {
          ...state,
          filter: action.filter || '',
        }
      }
      case ActionType.FETCH_PROJECT_FULFILLED: {
        return {
          ...state,
          project: action.project,
        }
      }
    }

    return state
}
