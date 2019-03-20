import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform, Text, Modal, StyleSheet, TextInput, TouchableHighlight, Image, BackHandler, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat, sendMessage, monitorChat, monitorChatOff, sendImage } from '../actions/ChatActions';

import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

import MensagemItem from '../components/ConversaInterna/MensagemItem'

export class ConversaInterna extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title,
		tabBarVisible: false,
		headerLeft: (
			<TouchableHighlight onPress={() => {
				navigation.state.params.voltarFunction()
			}} underlayColor={false}>
				<Image source={require('../../node_modules/react-navigation-stack/src/views/assets/back-icon.png')} style={{ width: 25, height: 25, marginLeft: 20 }} />
			</TouchableHighlight>
		)
	});

	constructor(props) {
		super(props);
		this.state = {
			inputText: '',
			pct: 0,
			modalVisible: false,
			modalImage: null
		};

		this.voltar = this.voltar.bind(this);
		this.sendMsg = this.sendMsg.bind(this);
		this.chooseImage = this.chooseImage.bind(this);
		this.setModalVisible = this.setModalVisible.bind(this);
		this.imagePress = this.imagePress.bind(this);
	}

	componentDidMount() {
		this.props.navigation.setParams({ voltarFunction: this.voltar })
		BackHandler.addEventListener('hardwareBackPress', this.voltar);

		this.props.monitorChat(this.props.activeChat);

	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.voltar);
	}

	setModalVisible(status) {
		let state = this.state;
		state.modalVisible = status;
		this.setState(state);
	}

	imagePress(img) {
		let state = this.state;
		state.modalImage = img;
		this.setState(state);

		this.setModalVisible(true);
	}

	voltar() {
		this.props.monitorChatOff(this.props.activeChat);

		this.props.setActiveChat('');
		this.props.navigation.goBack();

		return true;
	}

	sendMsg() {
		let txt = this.state.inputText;
		let state = this.state;
		state.inputText = '';
		this.setState(state);

		this.props.sendMessage('text', txt, this.props.uid, this.props.activeChat)
	}

	chooseImage() {
		ImagePicker.showImagePicker(null, (r) => {
			if (r.uri) {
				let uri = r.uri.replace('file://', '');
				RNFetchBlob.fs.readFile(uri, 'base64')
					.then((data) => {
						return RNFetchBlob.polyfill.Blob.build(data, { type: 'image/jpeg;BASE64' });
					})
					.then((blob) => {
						this.props.sendImage(blob,

							(snapshot) => {
								let pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
								let state = this.state;
								state.pct = pct;
								this.setState(state);
							}, (imgName) => {
								let state = this.state;
								state.pct = 0;
								this.setState(state);
								
								this.props.sendMessage('image', imgName, this.props.uid, this.props.activeChat);
							})
					});
			}
		})
	}

	render() {

		let AreaBehavior = Platform.select({ ios: 'padding', android: 'null' });
		let AreaOffset = Platform.select({ ios: '64', android: null });

		return (
			<KeyboardAvoidingView style={styles.container} behavior={AreaBehavior} keyboardVerticalOffset={AreaOffset}>
				<FlatList
					ref={(ref) => { this.chatArea = ref }}
					onContentSizeChange={() => { this.chatArea.scrollToEnd({ animated: true }) }}
					onLayout={() => { this.chatArea.scrollToEnd({ animated: true }) }}
					style={styles.chatArea}
					data={this.props.activeChatMessages}
					renderItem={({ item }) => <MensagemItem data={item} me={this.props.uid} onImagePress={this.imagePress} />}
				/>
				{this.state.pct > 0 &&
					<View style={styles.imageTmp}>
						<View style={[{ width: this.state.pct + '%' }, styles.imageTmpBar]}></View>
					</View>
				}

				<View style={styles.sendArea}>
					<TouchableHighlight style={styles.imageButton} onPress={this.chooseImage}>
						<Image style={styles.imageBtnImage} source={require('../assets/images/insert_photo.png')} />
					</TouchableHighlight>
					<TextInput style={styles.sendInput} value={this.state.inputText} onChangeText={(inputText) => this.setState({ inputText })}
						underlineColorAndroid='black' />
					<TouchableHighlight style={styles.sendButton} onPress={this.sendMsg}>
						<Image source={require('../assets/images/send_button.png')} style={styles.sendImage} />
					</TouchableHighlight>
				</View>
				<Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
					<TouchableHighlight style={styles.modalView} onPress={() => {this.setModalVisible(false)}}>
						<Image resizeMode="contain" style={styles.modalImage} source={{uri: this.state.modalImage}} />
					</TouchableHighlight>
				</Modal>
			</KeyboardAvoidingView>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#CCCCCC'
	},
	chatArea: {
		flex: 1,
		backgroundColor: '#CCCCCC'
	},
	sendArea: {
		height: 50,
		backgroundColor: '#EEEEEE',
		flexDirection: 'row',
		borderRadius: 20,
		margin: 5
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
	},
	imageButton: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20
	},
	imageBtnImage: {
		width: 35,
		height: 35,
		marginTop: 5,
		marginLeft: 5,
		marginBottom: 5
	},
	imageTmp: {
		height: 10
	}, 
	imageTmpBar: {
		height: 10,
		backgroundColor: '#cc0000'
	},
	modalView: {
		backgroundColor: '#000000',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalBtn: {
		color: "#FFFFFF"
	},
	modalImage: {
		width: '100%',
		height: '100%'
	}
});

const mapStateToProps = (state) => {
	return {
		status: state.auth.status,
		uid: state.auth.uid,
		activeChat: state.chat.activeChat,
		activeChatMessages: state.chat.activeChatMessages
	};
};

const ConversaInternaConnect = connect(mapStateToProps, { setActiveChat, sendMessage, monitorChat, monitorChatOff, sendImage })(ConversaInterna);
export default ConversaInternaConnect















