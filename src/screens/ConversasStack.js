import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
//import {connect} from 'react-redux';

import ConversasList from './ConversasList';
import ConversaInterna from './ConversaInterna';

const ConversasNavigator = createStackNavigator({
    ConversasList: {
        screen: ConversasList
    },
    ConversaInterna: {
        screen: ConversaInterna
    }
});



const ConversasContainer = createAppContainer(ConversasNavigator);

export default ConversasContainer;