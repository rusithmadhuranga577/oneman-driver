import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Languages } from '@common';
import styles from './styles';

class ItemContainer extends Component {

    getDate(value){
        const timestemp = new Date(value);
        var day = timestemp.getDay();
        var date = timestemp.getDate();
        var month = timestemp.getMonth() + 1;
        var year = timestemp.getFullYear();
        var returnvalue = `${year} - ${month} - ${date}`

        return returnvalue;
    }

    getTime(value){
        const timestemp = new Date(value);
        var hours = timestemp.getHours();
        var minutes = timestemp.getMinutes();
        var newformat = timestemp.getHours() >= 12 ? 'PM' : 'AM';  
        var returnvalue = `${hours}:${minutes} ${newformat}`

        return returnvalue;
    }

    render(){
        const {navigation} = this.props;
        const item = this.props.item;
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('OrderView', {order_id : item.id, title : `#${item.id} Order`})} style={[styles.itemcontainer]}>
                <View style={[styles.toprow]}>
                    <Text style={[styles.orderid]}>#{item.id} {Languages.Order}</Text>
                    <View>
                        <Text style={[styles.datetime]}>{this.getDate(item.created_at)}</Text>
                        <Text style={[styles.datetime, {alignSelf : 'flex-end'}]}>{this.getTime(item.created_at)}</Text>
                    </View>
                </View>
                <View>
                    <Text numberOfLines={1} style={[styles.name]}>{item.delivery_name}</Text>
                    <Text numberOfLines={1} style={[styles.address]}>{item.delivery_address}</Text>
                </View>
                <View style={[styles.toprow]}>
                    <View style={[styles.ordertypecontainer, {backgroundColor: item.ordertype == 'Delivery' ? Colors.primary : Colors.darkgray}]}>
                        <Text style={[styles.ordertype]}>{item.ordertype}</Text>
                    </View>
                    <View style={[styles.ordertypecontainer, {backgroundColor: item.paid == 0 ? Colors.alertred : Colors.successgreen}]}>
                        <Text style={[styles.ordertype]}>{item.paid == 0 ? Languages.Unpaid : Languages.Paid}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <ItemContainer {...props} navigation={navigation} />;
} 