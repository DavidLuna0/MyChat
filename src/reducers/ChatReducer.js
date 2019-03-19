const initialState = {
    chats: [],
    contacts: [],
    activeChat: ''
};

const ChatReducer = (state = initialState, action) => {
    
    if(action.type == 'setContactList') {
        return { ...state, contacts: action.payload.users}
    }

    if (action.type == 'setActiveChat') {
        return { ...state, activeChat:action.payload.chatId}
    }

    if(action.type == 'setChatList') {
        return { ...state, chats: action.payload.chats}
    }

	return state;

};

export default ChatReducer;