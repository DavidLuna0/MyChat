import firebase from '../FirebaseConnection';

export const checkLogin = () => {

	return (dispatch) => {

		let user = firebase.auth().currentUser;

		if(user) {
			dispatch({
				type:'changeStatus',
				payload:{
					status:1
				}
			});
		} else {
			dispatch({
				type:'changeStatus',
				payload:{
					status:2
				}
			});
		}

	}

};