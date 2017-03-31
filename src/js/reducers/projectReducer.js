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
      case ActionType.FETCH_PROJECTS_PENDING: {
        return {...state, fetching: true}
      }
      case ActionType.FETCH_PROJECTS_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          projects: action.payload.data || [],
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
          project: action.payload.data
        }
      }
    }

    return state
}
