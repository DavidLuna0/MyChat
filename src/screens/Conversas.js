import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createNavigationContainer } from 'react-navigation';

import Icons from 'react-native-vector-icons/MaterialIcons';
//import {connect} from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoStack from './ContatoStack';
import ConfigStack from './ConfigStack';


const ConversasNavigator = createMaterialTopTabNavigator({
    ConversasStack: {
        screen: ConversasStack,
        navigationOptions: {
            tabBarIcon: () => {
                return <Icons name={'chat'} size={25} color={'black'} />;
            }
        }

    },
    ContatoStack: {
        screen: ContatoStack,
        navigationOptions: {
            tabBarIcon: () => {
                return <Icons name={'person'} size={25} color={'black'} />;
            }
        }

    },
    ConfigStack: {
        screen: ConfigStack,
        navigationOptions: {
            tabBarIcon: () => {
                return <Icons name={'build'} size={25} color={'black'} />;
            }
        }

    }
}, {
        defaultNavigationOptions: {
            tabBarPosition: 'bottom',
            animationEnabled: false,
            swipeEnabled: false,
            tabBarOptions: {
                showIcon: true,
                showLabel: false,
                upperCaseLabel: false,
                labelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                indicatorStyle: {
                    backgroundColor: '#000000'
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