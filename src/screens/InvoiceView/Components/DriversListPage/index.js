import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import DropDownPicker from 'react-native-dropdown-picker';
import {Url, Colors, Languages, Store} from '@common';
import { Button, LoadingComponent, SwipeButtonContainer } from '@components';
import DriversListMap from './DriversListMap';
import DriversListDropDown from './DriversListDropDown';
import TitleBar from '../TitleBar';
import styles from './styles';
import { showMessage, hideMessage } from "react-native-flash-message";

const QueryString = require('query-string');

const items = ([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

class DriversListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selecteddriver : [],
            loading : false,
            hidebutton : false
        };
    }

    componentDidMount(){
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
         );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    backAction = () => {
        this.hideComponent();
    };


    assignOrderToDriver=()=>{
        this.setState({loading : true});
        axios.post(Url.assignordertodriverurl, 
        QueryString.stringify({
            driver_id : this.state.selecteddriver.id,
            order_id : this.props.orderid,
        }), 
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        }).then(response => {
            console.log(response.data.status);
            if(response.data.status == 1){
                showMessage({
                    message: Languages.DriverUpdated,
                    type: "success",
                    icon: "success",
                });
                setTimeout(() => {
                    this.hideComponent();
                    this.setState({loading : false});
                }, 800);
            }else{
                alert('Something went wrong, please try again');
                this.setState({loading : false});
            }
        }).catch(err => {
            alert(err), 
            this.setState({loading : false})
        })
    }

    hideComponent=()=>{
        this.props.hideComponent(false)
    }

    render(){
        const visibility = this.props.visibility;
        return(
            <View>
                <Modal
                    visible={visibility}
                    animationIn={'slideInUp'}
                    useNativeDriver={true}
                    transparent={true}
                    onRequestClose={() => this.hideComponent()}
                >
                    <View style={[styles.overlay]}>
                        <LoadingComponent visibility={this.state.loading}/>
                        <TitleBar buttonclick={()=>this.hideComponent()}/>
                        <DriversListDropDown orderid={this.props.orderid} getselecteddriverinfo={(value)=>this.setState({selecteddriver : value})}/>
                        <DriversListMap/>
                        {this.state.selecteddriver.length == 0 ?
                            <Text style={[styles.pleaseselect]}>{Languages.PleaseSelectDriver}</Text>:null
                        }
                        <SwipeButtonContainer title={Languages.AssignDriver} action={()=>this.assignOrderToDriver()} disabled={this.state.selecteddriver.length == 0 ? true : false}/> 
                    </View>                    
                </Modal>
            </View>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <DriversListPage {...props} navigation={navigation} />;
} 