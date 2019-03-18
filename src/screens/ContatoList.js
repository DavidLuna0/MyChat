import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getContactList } from '../actions/ChatActions';
import ContatoItem from '../components/ContatoList/ContatoItem';

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
		this.contatoClick = this.contatoClick.bind(this);
	}

	contatoClick(item) {
		alert('clicou em: ' + item.name + " (" + item.key + ")")
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.props.contacts}
					renderItem={({ item }) => <ContatoItem
						data={item}
						onPress={this.contatoClick}
					/>
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















