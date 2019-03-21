import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changePassword, changeName, signUp } from '../actions/AuthActions';

import { Input } from 'react-native-elements';

import LoadingItem from '../components/LoadingItem';

export class SignUp extends Component {

    static navigationOptions = {
        title: 'Cadastrar'
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentDidUpdate() {
        if (this.props.status == 1) {
            Keyboard.dismiss();
            this.props.navigation.navigate('Conversas');
        }
    }


    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <Input
                        placeholder='Nome'
                        leftIcon={{ type: 'font-awesome', name: 'user' }}
                        value={this.props.name}
                        onChangeText={this.props.changeName}
                    />

                    <Input
                        placeholder='Email'
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        value={this.props.email}
                        onChangeText={this.props.changeEmail}
                    />

                    <Input
                        placeholder='Senha'
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        secureTextEntry={true}
                        value={this.props.password}
                        onChangeText={this.props.changePassword}
                    />

                    <View style={styles.btnArea}>
                        <TouchableHighlight style={styles.button} onPress={() => {
                            this.setState({ loading: true })
                            this.props.signUp(this.props.name, this.props.email, this.props.password, () => {
                                this.setState({ loading: false })
                            })
                        }} underlayColor="#FFFFFF">
                            <Text style={styles.btnText}>Cadastrar</Text>
                        </TouchableHighlight>
                    </View>

                    <LoadingItem visible={this.state.loading} />
                </View>
            </ScrollView >
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
    input: {
        width: '80%',
        fontSize: 23,
        height: 50,
        backgroundColor: '#DDDDDD',
        width: 200
    },
    btnArea: {
        marginTop: 200
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
        elevation: 5,
        shadowRadius: 30,
        shadowOffset: { width: 56, height: 13 }


    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,
        status: state.auth.status

    };
};

const SignUpConnect = connect(mapStateToProps, { checkLogin, changeName, changeEmail, changePassword, signUp })(SignUp);
export default SignUpConnect;
















