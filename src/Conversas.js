import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
//import {connect} from 'react-redux';

import ConversasList from './ConversasList';
import ContatoList from './ContatoList';
import Config from './Config';


const ConversasNavigator = createBottomTabNavigator({
    ConversasList: {
        screen: ConversasList
    },
    ContatoList: {
        screen: ContatoList
    },
    Config: {
        screen: Config
    }
});

const ConversasContainer = createAppContainer(ConversasNavigator);

export default ConversasContainer;