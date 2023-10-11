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
import {Url, Colors, Languages, Store, Icons, Constants} from '@common';
import { CustomPicker } from 'react-native-custom-picker'
import { Button, LoadingComponent } from '@components';
import styles from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SwipeButton from 'rn-swipe-button';

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');

const items = ([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

class DriversListDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            driverslist : [],
            driverid : '',
            loading : false,
            selectedDriver : [],
        };
    }

    componentDidMount(){
      SharedPreferences.getItem('driverid', (id)=>{
        this.setState({driverid : id});
      })
      console.log('Order ID', this.props.orderid)
      setTimeout(() => {
        this.getDriversList();
      }, 650);
    }

    getDriversList = () => {
      this.setState({loading : true});
      axios.post(Url.finddriversurl, 
      QueryString.stringify({
        restaurant_id : this.state.driverid,
        order_id : this.props.orderid,
      }), 
      {
          headers: {"Content-Type": "application/x-www-form-urlencoded",}
      }).then(response => {
        console.log(response.data.status)
        const res_status = response.data.status;
        if(res_status == 1){
            this.setState({driverslist : response.data.drivers});
            this.setState({loading : false});
        }else{
            this.setState({loading : false});
            alert('Something went wrong, Please try again')
        }
      }).catch(err => {
          alert(err), 
          this.setState({loading : false})
      })
    }

    renderField(settings) {
        const { selectedItem, defaultText, getLabel, clear } = settings
        return (
          <View style={styles.fieldcontainer}>
            <View>
              {!selectedItem && <Text style={[styles.text, { color: 'grey' }]}>{defaultText}</Text>}
              {selectedItem && (
                <View style={styles.innerContainer}>
                  <Text style={[styles.selectdeitemtext]}>
                    {getLabel(selectedItem)}
                  </Text>
                </View>
              )}
            </View>
            <View>
                <Icon name={'chevron-down-outline'} size={20}/>
            </View>
          </View>
        )
    }

    renderOption(settings) {
        const { item, getLabel } = settings
        return (
          <View style={styles.optionContainer}>
            <View style={{width : '90%', flexDirection : 'row', justifyContent : 'space-between', alignSelf : 'center'}}>
              <View style={{flexDirection : 'row', alignItems : 'center'}}>
                <Icon name={'person-circle-outline'} size={18} style={{marginRight : 10}}/>
                <Text style={[styles.optiontitle]}>{Languages.Name}</Text>
              </View>
              <Text style={[styles.optionsubtitle]}>{getLabel(item)}</Text>
            </View>

            <View style={{width : '90%', flexDirection : 'row', justifyContent : 'space-between', alignSelf : 'center', marginTop : 10}}>
              <View style={{flexDirection : 'row', alignItems : 'center'}}>
                <Icon name={'car-outline'} size={18} style={{marginRight : 10}}/>
                <Text style={[styles.optiontitle]}>{Languages.LicensePlate}</Text>
              </View>
              <Text style={[styles.optionsubtitle]}>{item.bike_no}</Text>
            </View>

            <View style={{width : '90%', flexDirection : 'row', justifyContent : 'space-between', alignSelf : 'center', marginTop : 10}}>
              <View style={{flexDirection : 'row', alignItems : 'center'}}>
                <Icon name={'call'} size={16} style={{marginRight : 10}}/>
                <Text style={[styles.optiontitle]}>{Languages.Phone}</Text>
              </View>
              <Text style={[styles.optionsubtitle]}>{item.phone_number}</Text>
            </View>
          </View>
        )
    }

    CheckoutButton = () => {
        return(
            <View style={{width: 40, height: 40, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius : 100}}>
                <Icon name={'arrow-forward-outline'} color={'#000'} size={25}/>
            </View>
        );
    }  

    
    setSelectedDriverInfo=(value)=>{
      this.props.getselecteddriverinfo(value);
    }

    render(){
        const value = this.state.selected_value;
        const driverslist = this.state.driverslist;
        return(
            <View>
                <CustomPicker
                    options={driverslist}
                    fieldTemplate={this.renderField}          
                    placeholder='Select a driver...'
                    optionTemplate={this.renderOption}
                    onValueChange={value => {
                        this.setState({selectedDriver : value});
                        this.setSelectedDriverInfo(value);
                    }}
                    getLabel={item => item.displayname}
                />
            </View>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <DriversListDropdown {...props} navigation={navigation} />;
} 