import React, {useState, useEffect, Component} from 'react';
import firestore from '@react-native-firebase/firestore';

const FireStoreStatusUpdate = ({orderid, status}) => {

    firestore()
    .collection('orders')
    .doc(orderid.toString())
    .update({
        status: status,
    })
    .then(() => {
        console.log('User updated!');
    });
}

export default FireStoreStatusUpdate;