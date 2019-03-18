import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export class ContatoList extends Component {

	static navigationOptions = {
		title: '',
        header: null,
        tabBarLabel: 'Contatos'
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Pagina Contato</Text>
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

const ContatoListConnect = connect(mapStateToProps, {})(ContatoList);
export default ContatoListConnect















