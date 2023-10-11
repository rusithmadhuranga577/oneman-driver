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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import OrderInfoRow from './Components/OrderInfoRow';
import OrderChargeInfoRow from './Components/OrderChargeInfoRow';
import Separator from './Components/Separator';
import OrderItemsList from './Components/OrderItemsList';
import PaymentInfo from './Components/PaymentInfo';
import {Url, Colors, Languages, Store} from '@common';
import { Button, LoadingComponent } from '@components';
import styles from './styles';
import FireStoreStatusUpdate from './Components/firestorestatusupdate';

const QueryString = require('query-string');

class CanceledOrders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data : [],
            loading : true
        };
    }

    componentDidMount(){
        this.setState({loading : true});
        this.getOrderData();
        const route = this.props.route.params;
        const orderid = route.order_id;
        console.log(orderid)
    }

    getOrderData = () => {
        const route = this.props.route.params;
        const orderid = route.order_id;
        console.log(orderid)
        axios.post(Url.getorderdetailsurl, 
        QueryString.stringify({
            orderid : orderid
        }),
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        })
        .then(response => {
            console.log(response.data)
            this.setState({data : response.data.order})
            this.setState({loading : false});
        }).catch(error => {
            console.log(error);
        })
    }

    OpenMapsFunction = (lat, lan) => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat},${lan}`;
        const label = 'Custom Label';
        const url = Platform.select({
          ios: `${scheme}${label}@${latLng}`,
          android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    }

    updatteStatus=(status)=>{
        const route = this.props.route.params;
        const orderid = route.order_id;
        FireStoreStatusUpdate({orderid : orderid, status : status});
    }

    render(){
        const orderdata = this.state.data;
        const route = this.props.route.params;
        const orderid = route.order_id;
        return(
            <View>
                <LoadingComponent visibility={this.state.loading}/>
                <View style={[styles.container]}>
                {orderdata.length == 0 ? null :
                <ScrollView>
                    <View style={[styles.row]}>
                        <Text style={[styles.appname]} numberOfLines={1}>{orderdata.delivery_name}</Text>
                    </View>
                    <View style={[styles.ordercountcontainer]}>
                        <Text style={[styles.ordercounttext]}>1st Order</Text>
                    </View>
                    <View style={{marginTop : 15}}>
                        <OrderInfoRow title={Languages.OrderId} value={`#${orderid}`}/>
                        <OrderInfoRow title={Languages.OrderDate} value={orderdata.created_at}/>
                        <OrderInfoRow title={Languages.DeliveryAddress} value={orderdata.delivery_address}/>
                    </View>
                    <View style={{flexDirection : 'row', alignItems : 'center', marginTop : 20, alignSelf : 'flex-end'}}>
                        <TouchableOpacity onPress={()=>Linking.openURL(`tel:${orderdata.delivery_phone}`)}>
                            <Icon name={'call'} size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.OpenMapsFunction(orderdata.delivery_lat, orderdata.delivery_lon)}>
                            <Icon name={'navigate-circle'} size={30} style={{marginLeft : 20}}/>
                        </TouchableOpacity>
                    </View>
                    <Separator/>
                    <View style={[styles.row]}>
                        <Text style={[styles.total]}>{Languages.Total}</Text>
                        <Text style={[styles.total]}>{Languages.Rs} {Number(orderdata.order_total).toFixed(2)}</Text>
                    </View>
                    <Separator/>
                    <OrderItemsList items={orderdata.orderitems}/>
                    <Separator/>
                    <View >
                        <OrderChargeInfoRow title={Languages.SubTotal} value={Number(orderdata.food_amount).toFixed(2)}/>
                        {orderdata.small_order == 0 ? null : <OrderChargeInfoRow title={Languages.ServiceCharge} value={Number(orderdata.small_order).toFixed(2)}/>}
                        {orderdata.discount == 0 ? null : <OrderChargeInfoRow title={Languages.Promotion} value={Number(orderdata.discount).toFixed(2)}/>}
                        {orderdata.delivery == 0 ? null : <OrderChargeInfoRow title={Languages.DeliveryCharge} value={Number(orderdata.delivery).toFixed(2)}/>}
                    </View>
                    <Separator/>
                    <Text style={[styles.paidby]}>{Languages.PaymentMethod}</Text>
                    <PaymentInfo type={orderdata.paymentmode}/>
                </ScrollView>}
                {/* <View style={[styles.buttonholder]}>
                    {status == 3 ?
                    <View>
                        {orderdata.driver_confirmed == 0 ? 
                            <View style={{marginBottom : 10}}>
                                <Button title={orderdata.driver_id != null && orderdata.driver_confirmed == 0 ? Languages.AssignNewDriver : Languages.AssignDriver}/>
                            </View>
                            :null
                        }
                    </View>:null}
                    <Button 
                        title={
                            status == 0 ? Languages.MarkAsConfirmed : null ||
                            status == 1 ? Languages.MarkAsPrepared : null ||
                            status == 3 ? Languages.MarkAsOnDelivery : null ||
                            status == 4 ? Languages.MarkAsDelivered : null 
                        }
                        action={()=>
                            status == 0 ? this.updatteStatus(1) : null ||
                            status == 1 ? this.updatteStatus(3) : null ||
                            status == 3 ? this.updatteStatus(4) : null ||
                            status == 4 ? this.updatteStatus(6) : null 
                        }
                    />
                </View> */}
                </View>
            </View>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <CanceledOrders {...props} navigation={navigation} />;
} 