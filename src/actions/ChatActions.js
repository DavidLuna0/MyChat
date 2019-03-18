import firebase from '../FirebaseConnection/';

export const getContactList = () => {
    return (dispatch) => {
        firebase.database().ref('users').once('value').then((snapshot) => {
            let users = [];
            snapshot.forEach((childItem) => {
                users.push({
                    key: childItem.key,
                    name: childItem.val().name
                });
            });

            dispatch({
                type: 'setContactList',
                payload: {
                    users: users
                }
            })
        })
    }
}