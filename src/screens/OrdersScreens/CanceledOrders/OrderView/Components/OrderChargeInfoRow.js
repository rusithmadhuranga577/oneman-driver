import React, { useEffect, useRef, useState } from 'react';
import { View, BackHandler, Text, Image, ScrollView } from 'react-native';
import { Store, Languages, Images } from '@common';
import styles from '../styles';

const OrderChargeInfoRow = ({title, value}) => {
    return(
        <View style={[styles.orderchargeinforow]}>
            <Text style={[styles.orderchargeinfotext, {width : '50%'}]} numberOfLines={1}>{title}</Text>
            <Text style={[styles.orderchargeinfotext, {width : '50%', textAlign : 'right'}]} numberOfLines={1}>{Languages.Rs}{value}</Text>
        </View>
    );
}

export default OrderChargeInfoRow;