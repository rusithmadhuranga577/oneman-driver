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
import { Url } from '@common';
import axios from 'axios';
import styles from './styles';
import ItemContainer from './itemcontainer';

const QueryString = require('query-string');

class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items : [],
            loading : false
        };
    }

    componentDidMount(){
        this.getAllOrders();
    }

    getAllOrders=()=>{
        axios.post(Url.getallcompletedordersurl, 
        QueryString.stringify({
            restaurant_id : 1,
            status : 6
        }),
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        })
        .then(response => {
            this.setState({items : response.data.orders});
            this.setState({loading : false});
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
        const {navigation} = this.props;
        return(
            <View style={[styles.container]}>
                <FlatList
                    itemDimension={80}
                    data={this.state.items}
                    spacing={3}
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
    const navigation = useNavigation();
    return <Orders {...props} navigation={navigation} />;
}