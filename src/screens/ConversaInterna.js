import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat} from '../actions/ChatActions';

export class ConversaInterna extends Component {

	static navigationOptions = ({navigation}) => ({
		title: 'Conversa Interna',
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
		this.state = {};

		this.voltar = this.voltar.bind(this);
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

	render() {
		return (
			<View style={styles.container}>
				<Text>Pagina Conversa interna</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		margin: 10
	}
});

const mapStateToProps = (state) => {
	return {
		status: state.auth.status,
		uid: state.auth.uid
	};
};

const ConversaInternaConnect = connect(mapStateToProps, {setActiveChat})(ConversaInterna);
export default ConversaInternaConnect















