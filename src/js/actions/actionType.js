import keyMirror from 'keymirror';

export default keyMirror({
    FETCH_PROJECTS      : null,
    FETCH_PROJECTS_PENDING         : null, //redux-promise-middleware
    FETCH_PROJECTS_REJECTED         : null, //redux-promise-middleware
    FETCH_PROJECTS_FULFILLED         : null, //redux-promise-middleware

    FETCH_PROJECT      : null, //redux-promise-middleware
    FETCH_PROJECT_FULFILLED      : null, //redux-promise-middleware
    FETCH_PROJECT_REJECTED      : null, //redux-promise-middleware
    FILTER_PROJECTS         : null
});
