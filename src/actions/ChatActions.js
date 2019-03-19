import firebase from '../FirebaseConnection/';

export const getChatList = (userUid) => {
    return (dispatch) => {
        firebase.database().ref('users').child(userUid).child('chats').on('value', (snapshot) => {
            let chats = [];
            snapshot.forEach((childItem) => {
                chats.push({
                    key: childItem.key,
                    title: childItem.val().title
                })
            });

            dispatch({
                type: 'setChatList',
                payload: {
                    chats: chats
                }
            })

        });

    }
}


export const getContactList = (userUid) => {
    return (dispatch) => {
        firebase.database().ref('users').orderByChild('name').once('value').then((snapshot) => {
            let users = [];
            snapshot.forEach((childItem) => {
                if (childItem.key != userUid) {
                    users.push({
                        key: childItem.key,
                        name: childItem.val().name
                    });
                }
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

export const createChat = (userUid1, userUid2) => {
    return (dispatch) => {

        //Criando o proprio CHAT
        let newChat = firebase.database().ref('chats').push();
        newChat.child('members').child(userUid1).set({
            id: userUid1
        });
        newChat.child('members').child(userUid2).set({
            id: userUid2
        });

        let chatId = newChat.key;

        firebase.database().ref('users').child(userUid2).once('value').then((snapshot) => {
            firebase.database().ref('users').child(userUid1).child('chats').child(chatId).set({
                id: chatId,
                title: snapshot.val().name
            });
        });

        firebase.database().ref('users').child(userUid1).once('value').then((snapshot) => {
            firebase.database().ref('users').child(userUid2).child('chats').child(chatId).set({
                id: chatId,
                title: snapshot.val().name
            });
        });


        dispatch({
            type: 'setActiveChat',
            payload: {
                chatId: chatId,
                title: 'Titulo do chat'
            }
        })
    }
}

export const setActiveChat = (chatId) => {
    return {
        type: 'setActiveChat',
        payload: {
            chatId: chatId
        }
    }
}