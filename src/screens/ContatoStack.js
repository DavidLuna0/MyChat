import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
//import {connect} from 'react-redux';

import ContatoList from './ContatoList';


const ContatoListNavigator = createStackNavigator({
    ContatoList: {
        screen: ContatoList
    }
});



const ContatoContainer = createAppContainer(ContatoListNavigator);

export default ContatoContainer;