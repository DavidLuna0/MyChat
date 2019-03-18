import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export class ConversaInterna extends Component {

	static navigationOptions = {
		title: 'Conversa Interna'
	}

	constructor(props) {
		super(props);
		this.state = {};
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

const ConversaInternaConnect = connect(mapStateToProps, {})(ConversaInterna);
export default ConversaInternaConnect















