import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
//import {connect} from 'react-redux';

import Config from './Config';


const ConfigNavigator = createStackNavigator({
    Config: {
        screen: Config,
        navigationOptions: {
            tabBarLabel: null,
            title: 'Configurações'
        }
    }
});

const ConfigContainer = createAppContainer(ConfigNavigator);

export default ConfigContainer;