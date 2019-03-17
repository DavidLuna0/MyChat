const initialState = {
	email:'',
	password:'',
	status:0
};

const AuthReducer = (state = initialState, action) => {

	if(action.type == 'changeStatus') {
		return { ...state, status:action.payload.status};
	}

	return state;

};

export default AuthReducer;