import firebase from '../FirebaseConnection';

export const checkLogin = () => {

	return (dispatch) => {

		let user = firebase.auth().currentUser;

		if (user) {
			dispatch({
				type: 'changeStatus',
				payload: {
					status: 1
				}
			});
		} else {
			dispatch({
				type: 'changeStatus',
				payload: {
					status: 2
				}
			});
		}

	}

};

export const signUp = (name, email, password) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {
				let uid = firebase.auth().currentUser.uid;
				firebase.database().ref('users').child(uid).set({
					name: name
				});

				dispatch({
					type: 'changeUid',
					payload: {
						uid: uid
					}
				});
			})
			.catch((error) => {
				switch (error.code) {
					case 'auth/email-already-in-use':
						alert("E-mail já está sendo utilizado!");
						break;
					case 'auth/invalid-email':
						alert("O E-mail digitado é inválido");
						break;
					case 'auth/operation-not-allowed':
						alert("Ocorreu um erro, tente novamente mais tarde");
						break;
					case 'auth/weak-password':
						alert("Digite uma senha mais segura");
						break;
				}
			})
	}
};

export const signIn = (email, password) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {
				let uid = firebase.auth().currentUser.uid;

				dispatch({
					type: 'changeUid',
					payload: {
						uid: uid
					}
				});
				
			})
			.catch((error) => {
				switch (error.code) {
					case 'auth/invalid-email':
						alert("O E-mail digitado é invalido")
						break;
					case 'auth/user-disabled':
						alert("O usuario está desativado em nosso sistema");
						break;
					case 'auth/user-not-found':
						alert("O usuario não foi encontrado no banco de dados");
						break;
					case 'auth/wrong-password':
						alert("E-mail ou senha Incorretos");
						break;

				}
			})
	};
};

export const changeEmail = (email) => {
	return {
		type: 'changeEmail',
		payload: {
			email: email
		}
	}
}

export const changePassword = (password) => {
	return {
		type: 'changePassword',
		payload: {
			password: password
		}
	}
}

export const changeName = (name) => {
	return {
		type: 'changeName',
		payload: {
			name: name
		}
	}
}