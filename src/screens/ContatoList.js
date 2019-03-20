import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getContactList, createChat } from '../actions/ChatActions';
import ContatoItem from '../components/ContatoList/ContatoItem';

export class ContatoList extends Component {

	static navigationOptions = {
		title: '',
		header: null,
		tabBarLabel: 'Contatos'
	}

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};

		this.props.getContactList(this.props.uid, () => {
			this.setState({loading: false})
		});
		this.contatoClick = this.contatoClick.bind(this);
	}

	contatoClick(item) {
		this.props.createChat(this.props.uid, item.key);

		this.props.navigation.navigate('ConversasStack');
	}

	render() {
		return (
			<View style={styles.container}>
			{this.state.loading && <ActivityIndicator size="large" />}
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

const ContatoListConnect = connect(mapStateToProps, { getContactList, createChat })(ContatoList);
export default ContatoListConnect















