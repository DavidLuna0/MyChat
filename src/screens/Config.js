import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import {signOut} from '../actions/AuthActions';

export class Config extends Component {

	static navigationOptions = {
		title: '',
        header: null,
        tabBarLabel: 'Config'
	}

	constructor(props) {
		super(props);
        this.state = {};
        
        this.sair = this.sair.bind(this);
    }
    
    sair() {
		this.props.signOut();
		
		window.globalNavigator.navigate('Home')
        /* this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Home'})
            ]
        })); */
        
    };

	render() {
		return (
			<View style={styles.container}>
				<Text>Pagina Config</Text>

                <Button title="Sair" onPress={this.sair} />
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

const ConfigConnect = connect(mapStateToProps, {signOut})(Config);
export default ConfigConnect















