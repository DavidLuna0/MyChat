import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyCjVJ_igrvQbWS9cdQLV8dkEc_hjViLSwU",
	authDomain: "mychat-9f489.firebaseapp.com",
	databaseURL: "https://mychat-9f489.firebaseio.com",
	projectId: "mychat-9f489",
	storageBucket: "mychat-9f489.appspot.com",
	messagingSenderId: "389137561698"
};
firebase.initializeApp(config);

export default firebase;