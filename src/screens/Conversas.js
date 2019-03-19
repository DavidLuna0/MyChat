import React, { Component } from 'react';
import { createBottomTabNavigator, createNavigationContainer } from 'react-navigation';
//import {connect} from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';


const ConversasNavigator = createBottomTabNavigator({
    ConversasStack: {
        screen: ConversasStack,
        navigationOptions: {
            tabBarLabel: 'Conversas'
        }
    },
    ContatoList: {
        screen: ContatoList
    },
    Config: {
        screen: Config
    }
}, {
        defaultNavigationOptions: {
            animationsEnabled: true,
            swipeEnabled: true
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