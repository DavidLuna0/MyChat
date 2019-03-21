import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createNavigationContainer } from 'react-navigation';
//import {connect} from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoStack from './ContatoStack';
import ConfigStack from './ConfigStack';


const ConversasNavigator = createMaterialTopTabNavigator({
    ConversasStack: {
        screen: ConversasStack,
        navigationOptions: {
            tabBarLabel: 'Conversas'
        }
    },
    ContatoStack: {
        screen: ContatoStack,
        navigationOptions: {
            tabBarLabel: 'Contatos'
        }
    },
    ConfigStack: {
        screen: ConfigStack,
        navigationOptions: {
            tabBarLabel: 'Config'
        }
    }
}, {
    defaultNavigationOptions: {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            showIcon: false,
            showLabelFalse: true,
            upperCaseLabel: true,
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            indicatorStyle: {
                backgroundColor: '#FFFFFF'
            }
        }
    }
});

ConversasStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

const ConversasContainer = createNavigationContainer(ConversasNavigator);

export default ConversasContainer;