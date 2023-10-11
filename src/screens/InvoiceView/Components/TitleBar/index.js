import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import {Url, Colors, Languages, Store, Icons} from '@common';
import { Button, LoadingComponent } from '@components';
import styles from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const QueryString = require('query-string');

class TitleBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            driverslist : []
        };
    }

    componentDidMount(){
    }

    render(){
        return(
            <View style={[styles.container]}>
                <TouchableOpacity onPress={()=>this.props.buttonclick()}>
                    <Icon name={'chevron-back-outline'} size={25} style={{alignSelf : 'flex-start'}} color={Colors.black}/>
                </TouchableOpacity>
                <Text style={[styles.title]}>{Languages.AssignDriver}</Text>
                <View></View>
            </View>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <TitleBar {...props} navigation={navigation} />;
} 