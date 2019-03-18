import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export class Conversas extends Component {

	static navigationOptions = {
		title: '',
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Pagina Conversas{this.props.status}   -   {this.props.uid}</Text>
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

const ConversasConnect = connect(mapStateToProps, {})(Conversas);
export default ConversasConnect















