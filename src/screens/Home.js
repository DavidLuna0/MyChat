import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class Home extends Component {

	static navigationOptions = {
		title: '',
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {};

		this.signinButton = this.signinButton.bind(this);
		this.signupButton = this.signupButton.bind(this);
	}

	signinButton() {
		this.props.navigation.navigate("SignIn")
	}

	signupButton() {
		this.props.navigation.navigate('SignUp')
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../assets/images/ic_launcher.png')} />
				<Text style={styles.appName}>MyChat</Text>

				<View style={styles.buttonArea}>
					<TouchableHighlight style={styles.button} onPress={this.signinButton} underlayColor="#FFFFFF">
						<Text style={styles.btnText}>Entrar</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.button} onPress={this.signupButton} underlayColor="#FFFFFF">
						<Text style={styles.btnText}>Cadastrar</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	appName: {
		fontSize: 30,
		marginTop: 15

	},
	buttonArea: {
		marginTop: 120,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	loadingText: {
		marginBottom: 20,
		fontSize: 16
	},
	button: {
		width: 120,
		height: 60,
		backgroundColor: '#cc0000',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginLeft: 20,
		marginRight: 20,
		shadowColor: 'black',
		shadowOpacity: 0.8,
		elevation: 20,
		shadowRadius: 30,
		shadowOffset: { width: 56, height: 13 },

	},
	btnText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});

const mapStateToProps = (state) => {
	return {
		status: state.auth.status
	};
};

const HomeConnect = connect(mapStateToProps, { checkLogin })(Home);
export default HomeConnect;
















