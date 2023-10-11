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
import { useIsFocused } from '@react-navigation/native';
import { DrawerTogleButton, LoadingComponent } from '@components';
import { Url } from '@common';
import axios from 'axios';
import styles from './styles';
import ItemContainer from './itemcontainer';
import SummeryCard from './SummeryCard';

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');

class DriverSummery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items : [],
            loading : false,
            refreshing : false
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

    componentWillUnmount() {
        this._unsubscribe();
    }

    getAllOrders(id){
        this.setState({loading : true});
        axios.post(Url.getallordersurl, 
        QueryString.stringify({
            driver_id : id,
            status : 6
        }),
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        })
        .then(response => {
            this.setState({items : response.data.orders})
            this.setState({loading : false});
            this.setState({refreshing : false});
        }).catch(error => {
            console.log(error);
        })
    }

    onRefresh=()=>{
        this.setState({refreshing : true});
        SharedPreferences.getItem('driverid', (id)=>{
            this.getAllOrders(id)
        })
    }

    render(){
        const {navigation} = this.props;
        return(
            <View style={[styles.container]}>
                <LoadingComponent visibility={this.state.loading}/>
                <SummeryCard/>
                <FlatList
                    itemDimension={80}
                    data={this.state.items}
                    spacing={3}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.refreshing}
                    renderItem={({ item }) => (
                        <>
                            <ItemContainer item={item}/>
                        </>
                    )}
                />
                <DrawerTogleButton navigation={navigation}/>
            </View>
        );
    }

}
export default function(props){
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    return <DriverSummery {...props} navigation={navigation} isFocused={isFocused}/>;
}