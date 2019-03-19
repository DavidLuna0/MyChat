import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image, BackHandler, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat, sendMessage} from '../actions/ChatActions';

import MensagemItem from '../components/ConversaInterna/MensagemItem'

export class ConversaInterna extends Component {

	static navigationOptions = ({navigation}) => ({
		title: navigation.state.params.title,
		tabBarVisible: false,
		headerLeft: (
			<TouchableHighlight onPress={() => {
				navigation.state.params.voltarFunction()
			}} underlayColor={false}>
				<Image source={require('../../node_modules/react-navigation-stack/src/views/assets/back-icon.png')} style={{width: 25, height: 25, marginLeft: 20}} />
			</TouchableHighlight>
		)
	});

	constructor(props) {
		super(props);
		this.state = {
			tmpMsg: [
				{key: 1, date: '2018-01-01', uid: 123, m: "Ola tudo bem?"},
				{key: 2, date: '2018-01-01', uid: "rsFVBjlPgMgmn8z09L6cP4HvQW23", m: "Nao?"},
				{key: 3, date: '2018-01-01', uid: 123, m: "PQ?"},
				{key: 4, date: '2018-01-01', uid: "rsFVBjlPgMgmn8z09L6cP4HvQW23", m: "Vamos tetar com uuma mensagem muit grande exibida?"}
			],
			inputText: ''
		};

		this.voltar = this.voltar.bind(this);
		this.sendMsg = this.sendMsg.bind(this);
	}

	componentDidMount() {
		this.props.navigation.setParams({voltarFunction: this.voltar})
		BackHandler.addEventListener('hardwareBackPress', this.voltar);

	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.voltar);
	}

	voltar() {
		this.props.setActiveChat('');
		this.props.navigation.goBack();

		return true;
	}

	sendMsg() {
		let txt = this.state.inputText;
		let state = this.state;
		state.inputText = '';
		this.setState(state);

		this.props.sendMessage(txt, this.props.uid, this.props.activeChat)
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList 
					style={styles.chatArea}
					data={this.state.tmpMsg}
					renderItem={({item}) => <MensagemItem data={item} me={this.props.uid} />} 
				/>
				<View style={styles.sendArea}>
					<TextInput style={styles.sendInput} value={this.state.inputText} onChangeText={(inputText) => this.setState({inputText})}
							 	underlineColorAndroid='black' />
					<TouchableHighlight style={styles.sendButton} onPress={this.sendMsg}>
						<Image source={require('../assets/images/sendButton.png')} style={styles.sendImage} />
					</TouchableHighlight>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	chatArea: {
		flex: 1,
		backgroundColor: '#CCCCCC'
	},
	sendArea: {
		height: 50,
		backgroundColor: '#EEEEEE',
		flexDirection: 'row'
	},
	sendInput: {
		height: 50,
		flex: 1
	},
	sendButton: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	sendImage: {
		width: 40,
		height: 40,
		marginTop: 5,
		marginRight: 5
	}
});

const mapStateToProps = (state) => {
	return {
		status: state.auth.status,
		uid: state.auth.uid,
		activeChat: state.chat.activeChat
	};
};

const ConversaInternaConnect = connect(mapStateToProps, {setActiveChat, sendMessage})(ConversaInterna);
export default ConversaInternaConnect















