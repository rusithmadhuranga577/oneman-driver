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
import { DrawerTogleButton } from '@components';
import Icon from 'react-native-vector-icons/Ionicons';
import { Url, Languages, Colors } from '@common';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');

class SummeryCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item : [],
            loading : false
        };
    }

    componentDidMount(){
        const {navigation} = this.props;
        this._unsubscribe = navigation.addListener('focus', () => {
            SharedPreferences.getItem('driverid', (id)=>{
                console.log(id);
                this.getAllOrders(id)
            })
        });
        SharedPreferences.getItem('driverid', (id)=>{
            console.log(id);
            this.getAllOrders(id)
        })
    }

    getAllOrders(id){
        this.setState({loading : true});
        axios.post(Url.getdriversummeryurl, 
        QueryString.stringify({
            driver_id : id
        }),
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        })
        .then(response => {
            console.log(response.data)
            this.setState({item : response.data.summery})
            this.setState({loading : false});
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
        const {navigation} = this.props;
        const item = this.state.item;
        return(
            <View>
                <LinearGradient colors={['#000', '#3b5998', '#000']}  style={[styles.summerycardcontainer]}>
                    {this.state.loading ? null :
                    <>
                    <View style={[styles.componentrow]}>
                        <View style={{alignItems : 'center'}}>
                            <Icon name={'reorder-four-outline'} size={25} color={Colors.white}/>
                            <Text style={[styles.title]}>{Languages.TotalOrders}</Text>
                            <Text style={[styles.subtitle]}>{item.TotalOrders}</Text>
                        </View>
                        <View style={{alignItems : 'center'}}>
                            <Icon name={'cash-outline'} size={25} color={Colors.white}/>
                            <Text style={[styles.title]}>{Languages.Deposits}</Text>
                            <Text style={[styles.subtitle]}>{Number(item.Deposits).toFixed(2)}</Text>
                        </View>
                    </View>

                    <View style={{alignItems : 'center'}}>
                            <Icon name={'wallet-outline'} size={40} color={Colors.white}/>
                        <Text style={[styles.title, {fontSize : 20}]}>{Languages.Balance}</Text>
                        <Text style={[styles.subtitle, {fontSize : 28}]}>{Number(item.Balance).toFixed(2)}</Text>
                    </View>

                    <View style={[styles.componentrow, {marginTop : 20}]}>
                        <View style={{alignItems : 'center'}}>
                            <Icon name={'alert-circle-outline'} size={25} color={Colors.white}/>
                            <Text style={[styles.title]}>{Languages.CreditLimit}</Text>
                            <Text style={[styles.subtitle]}>{Number(item.CreditLimit).toFixed(2)}</Text>
                        </View>
                        <View style={{alignItems : 'center'}}>
                            <Icon name={'add-circle-outline'} size={25} color={Colors.white}/>
                            <Text style={[styles.title]}>{Languages.TotalEarnings}</Text>
                            <Text style={[styles.subtitle]}>{Number(item.TotalEarnings).toFixed(2)}</Text>
                        </View>
                    </View>
                    </>}
                </LinearGradient>
            </View>
        );
    }

}
export default function(props){
    const navigation = useNavigation();
    return <SummeryCard {...props} navigation={navigation} />;
}