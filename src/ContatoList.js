import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getContactList } from './actions/ChatActions';

export class ContatoList extends Component {

	static navigationOptions = {
		title: '',
		header: null,
		tabBarLabel: 'Contatos'
	}

	constructor(props) {
		super(props);
		this.state = {};

		this.props.getContactList();
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.props.contacts}
					renderItem={({ item }) => {
						return (
							<View>
								<Text>--> {item.name}</Text>
							</View>
						)}
					}
				/>
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
		uid: state.auth.uid,
		contacts: state.chat.contacts
	};
};

const ContatoListConnect = connect(mapStateToProps, { getContactList })(ContatoList);
export default ContatoListConnect















