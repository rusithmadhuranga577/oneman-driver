import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, DeviceEventEmitter, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import BackgroundService from 'react-native-background-actions';
import {Url, Colors, Languages, Store} from '@common';
import { NotificationSound } from '@components';

var SharedPreferences = require('react-native-shared-preferences');

const QueryString = require('query-string');
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
const options = {
    taskName: 'neworder',
    taskTitle: 'Gamigedara - Merchant',
    taskDesc: 'waiting for new order',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'gamigedaradriver://', // See Deep Linking for more info
    parameters: {
        delay: 1000,
    },
};

class BackgroundJob extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            active : null,
            fetching : false
        };
    }

    componentDidUpdate(){
        const state = this.props.state;
        const oldstate = this.state.active;
        if(oldstate != state){
            this.getState(state);
        }
    }

    getState=(state)=>{
        if(state == true){
            console.log('startBackgroundJob')
            this.startBackgroundJob();
        }else if(state == false){
            console.log('stopBackgroundJob')
            this.stopBackgroundJob();
        }
    }

    playNotificationSound = () => {
        console.log('NotificationSound._playing', NotificationSound._playing);
        if(!NotificationSound._playing){
            NotificationSound.play();
        }
    }

    firebaseListnerTask = async (taskDataArguments) => {
        var id = '';
        SharedPreferences.getItem('driverid', (id)=>{
            id = id;
        });
        const { delay } = taskDataArguments;
        await new Promise( async (resolve) => {
            const subscriber = firestore()
            .collection('orders')
            .where('restuarant_id', '==', id)
            .where('status', '==', 0)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot._docs;
                if(data.length != 0){
                    Linking.openURL('gamigedaradriver://')
                    this.playNotificationSound();
                }else{
                    NotificationSound.stop();
                }
            });
                return () => subscriber();
        });
    };

    startBackgroundJob = async () => {
        this.setState({active : true});
        this.props.getState(true);
        await BackgroundService.start(this.firebaseListnerTask, options);
    }

    stopBackgroundJob = async () => {
        this.setState({active : false});
        this.props.getState(false);
        await BackgroundService.stop();
    }

    render(){
        return(
            <View>

            </View>
        );
    }
}

export default BackgroundJob;
