import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
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
                <Button
                    icon={
                        <Icon
                            name="comment"
                            size={20}
                            color="#555555"


                        />
                    }
                    type="outline"
                    iconRight
                    title={this.props.data.title}
                    onPress={this.onClick} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnArea: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        margin: 5

    }
})