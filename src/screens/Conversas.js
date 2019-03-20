import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createNavigationContainer } from 'react-navigation';
//import {connect} from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';


const ConversasNavigator = createMaterialTopTabNavigator({
    ConversasStack: {
        screen: ConversasStack,
        navigationOptions: {
            tabBarLabel: 'Conversas'
        }
    },
    ContatoList: {
        screen: ContatoList,
        navigationOptions: {
            tabBarLabel: 'Contatos'
        }
    },
    Config: {
        screen: Config,
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
            upperCaseLabel: false,
            labelStyle: {
                fontSize: 16
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