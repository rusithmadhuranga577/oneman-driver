import React, {useState, useEffect, Component} from 'react';
import {
    Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { DrawerActions } from "@react-navigation/native";

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');

class DrawerTogleButton extends React.Component {

    togleDrawer = () => {
        const navigation = this.props.navigation;
        navigation.toggleDrawer()
    }

    render(){
        return(
            <TouchableOpacity onPress={this.togleDrawer} style={[styles.buttoncontainer]}>
                <Icon name={'menu'} size={30} color={'#fff'}/>
            </TouchableOpacity>
        );
    }
}

export default DrawerTogleButton;