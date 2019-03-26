import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import { signOut } from '../actions/AuthActions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Config extends Component {

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

                <View style={styles.btn}>
                    <TouchableHighlight>
                        <View style={styles.btnInt}>
                            <Icon style={{marginLeft: 5}} name="at" color='#444444' size={25} />
                            <Text style={styles.btnsTxt}>Alterar Email</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.btn}>
                    <TouchableHighlight>
                        <View style={styles.btnInt}>
                            <Icon style={{marginLeft: 5}} name="key" color='#444444' size={25} />
                            <Text style={styles.btnsTxt}>Alterar Senha</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.btnArea}>
                    <TouchableHighlight style={styles.button} onPress={this.sair} underlayColor="#FFFFFF">
                        <Text style={styles.btnText}>Sair</Text>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnArea: {
        marginTop: 200
    },
    button: {
        width: 120,
        height: 60,
        backgroundColor: '#4388d6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 5,
        shadowRadius: 30,
        shadowOffset: { width: 56, height: 13 }
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    btn: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 7,
        backgroundColor: '#DFDFDF',
        borderRadius: 6,
        height: 40,
        width: 300

    },
    btnInt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7
    },
    btnsTxt: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 65
    }
});

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        uid: state.auth.uid
    };
};

const ConfigConnect = connect(mapStateToProps, { signOut })(Config);
export default ConfigConnect















