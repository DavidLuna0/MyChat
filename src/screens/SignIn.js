import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Button, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changePassword, signIn } from '../actions/AuthActions';

import { Input } from 'react-native-elements';

import LoadingItem from '../components/LoadingItem';

export class SignIn extends Component {

    static navigationOptions = {
        title: 'Login'
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

            <ScrollView>
                <View style={styles.container}>


                    <Input
                        placeholder='Email'
                        leftIcon={{ type: 'font-awesome', name: 'user' }}
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
                            this.props.signIn(this.props.email, this.props.password, () => {
                                this.setState({ loading: false })
                            })
                            this.setState({ loading: true })
                        }} underlayColor="#FFFFFF">
                            <Text style={styles.btnText}>Fazer Login</Text>
                        </TouchableHighlight>
                    </View>
                    <LoadingItem visible={this.state.loading} />
                </View>
            </ScrollView>

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
        uid: state.auth.uid,
        email: state.auth.email,
        password: state.auth.password,
        status: state.auth.status

    };
};

const SignIpConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, signIn })(SignIn);
export default SignIpConnect;
















