import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ConversasItem extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onPress(this.props.data);
    }

    render() {
        return (

            <View style={styles.btnArea}>
                <TouchableHighlight style={styles.btn} underlayColor="#F5F5F5" activeOpacity={0.6} onPress={this.onClick}>
                    <View style={styles.btnInt}>
                        <MIcon style={styles.accIcon} name="account-circle" size={50} color="#555555" />
                        <Text style={styles.name}>{this.props.data.title}</Text>
                        <MIcon style={styles.addIcon} name="chat" size={25} color="#555555" />
                    </View>
                </TouchableHighlight>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    btnArea: {
        height: 55,
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        margin: 5,
        borderBottomWidth:1,
		borderBottomColor:'#CCCCCC'

    }, btnInt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    accIcon: {
        marginRight: 80
    },
    name: {
        marginRight: 100,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    addIcon: {
        marginRight: 20
    },
    btn: {
        width: '100%',
        height: '100%'
    }
})