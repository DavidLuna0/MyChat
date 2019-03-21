import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class Preload extends Component {

	static navigationOptions = {
		title: '',
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {};

		this.props.checkLogin();
		this.directPages = this.directPages.bind(this)

		window.globalNavigator = this.props.navigation;
	}

	directPages() {
		if (this.props.status == 1) {
			this.props.navigation.dispatch(StackActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'Conversas' })
				]
			}));
		} else if (this.props.status == 2) {
			this.props.navigation.dispatch(StackActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'Home' })
				]
			}));
		}
	}

	componentDidMount() {
		this.directPages();
	}

	componentDidUpdate() {
		this.directPages();
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../assets/images/ic_launcher.png')} />
				<Text style={styles.appName}>MyChat</Text>

				<View style={styles.loading}>
					<Text style={styles.loadingText}>Carregando...</Text>
					<ActivityIndicator size="large" />
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	appName: {
		fontSize: 30,
		marginTop: 15

	},
	loading: {
		marginTop: 150
	},
	loadingText: {
		marginBottom: 20,
		fontSize: 16
	}
});

const mapStateToProps = (state) => {
	return {
		status: state.auth.status
	};
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);
export default PreloadConnect;
















