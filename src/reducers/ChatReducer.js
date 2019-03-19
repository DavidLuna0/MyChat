const initialState = {
    chats: [],
    contacts: [],
    activeChat: '',
    activeChatTitle: ''
};

const ChatReducer = (state = initialState, action) => {
    
    if(action.type == 'setContactList') {
        return { ...state, contacts: action.payload.users}
    }

    if (action.type == 'setActiveChat') {
        let chatTitle = '';
        for(var i in state.chats) {
            if(state.chats[i].key == action.payload.chatId) {
                chatTitle = state.chats[i].title
            }
        }
        
        return { ...state, activeChat:action.payload.chatId, activeChatTitle: chatTitle}
    }

    if(action.type == 'setChatList') {
        return { ...state, chats: action.payload.chats}
    }

	return state;

};

export default ChatReducer;