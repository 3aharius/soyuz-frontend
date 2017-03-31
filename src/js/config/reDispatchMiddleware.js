
export default function reDispatchMiddleware(produce) {

	return ({dispatch, getState}) => (next) => (action) => {
		let newAction = produce(action);
		if(newAction) {
			dispatch(newAction);	
		}
		next(action);
	};
}