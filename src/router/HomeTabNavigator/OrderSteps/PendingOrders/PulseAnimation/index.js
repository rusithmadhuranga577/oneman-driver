import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@components';
import { Languages } from '@common';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import Pulse from 'react-native-pulse';

export default class PulseAnimation extends React.Component {
    render(){
        return(
            <Modal 
            visible={this.props.visible}
            animationType={'fade'}
            transparent={true}>
                <View style={[styles.container]}>       
                    <View style={[styles.titleholder]}>
                        <Text style={[styles.title]}>{Languages.YouHavePendingOrder}</Text>
                    </View> 
                    {/* <Pulse color='#26f7a8' numPulses={3} diameter={400} speed={20} duration={2000} /> */}
                    <View style={[styles.buttonholder]}>
                        <Button title={Languages.View} action={()=>this.props.hidePulse(false)}/>
                    </View>
                </View>
            </Modal>
        );
    }
};