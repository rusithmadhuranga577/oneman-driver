import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import { Colors, Constants } from '@common';
import StopWatchComponent from '../StopWatchComponent';

class ListContainer extends Component {

    constructor(props) {
        super(props);
        this.currentTime = '',
        this.state = {
            timerStart: false,
            stopwatchStart: true,
            totalDuration: 90000,
            timerReset: false,
            stopwatchReset: false,
        };
    }

    render(){
        const {navigation} = this.props;
        const item = this.props.item;
        const status = this.props.status;
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('InvoiceView', {title : `#${item.order_id} Order`, order_id : item.order_id, status : status})} style={[styles.container]}>
            <View style={{marginTop: 10, flexDirection : 'row', justifyContent : 'space-between', marginRight : 10}}>
                <View>
                    <Text style={[styles.customername]}>#{item.order_id}</Text>
                    <Text style={[styles.customername]}>{item.customer_name}</Text>
                </View>
                <View style={[styles.ordertypecontainer, {backgroundColor : item.payment_mode == 'COD' ? Colors.successgreen : Colors.primary}]}>
                    <Text style={[styles.payment_typetext]}>{item.payment_mode == 'COD' ? 'Cash' : 'Card'}</Text>
                </View>
            </View>
            
            <View style={{marginTop: 0, flexDirection : 'row', justifyContent : 'space-between', width : '100%'}}>
                <View style={[styles.ordercountcontainer]}>
                    <Text style={[styles.ordercounttext]}>{item.ordercount}</Text>
                </View>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginRight : 10}}>
                    <Icon name={'time'} size={20} color={'#ff8700'} style={{marginRight : 10}}></Icon>
                    <Text style={[styles.customername]}>{item.createdtime}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <ListContainer {...props} navigation={navigation} />;
} 