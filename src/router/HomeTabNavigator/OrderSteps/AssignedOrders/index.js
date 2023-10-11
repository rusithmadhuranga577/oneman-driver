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
import styles from './styles';
import ListPage from '../Components/ListPage';

const AssignedOrders = () => {

    return(
        <View style={[styles.container]}>
            <ListPage status={1}/>
        </View>
    );
}
export default AssignedOrders;