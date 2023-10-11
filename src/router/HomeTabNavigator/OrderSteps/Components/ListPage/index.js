import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import ListContainer from '../ListContainer';
import BackgroundService from 'react-native-background-actions';
import { BackgroundJob, DrawerTogleButton } from '@components';
import { Languages } from '@common';

var SharedPreferences = require('react-native-shared-preferences');

class ListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items : [],
            driverid : ''
        };
    }

    componentDidMount(){
        SharedPreferences.getItem('driverid', (id)=>{
            this.setState({driverid : id});
            this.getFirestoreData(id);
        });
    }

    getFirestoreData=(id)=>{
        const status = this.props.status;
        const subscriber = firestore()
        .collection('orders')
        .where('driver_id', '==', Number(id))
        .where('driver_assinged', '==', status)
        .onSnapshot(querySnapshot => {
            var data = [];
            if(querySnapshot != null){
                querySnapshot.forEach(documentSnapshot => {
                    data.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                this.setState({items : data});
            }
        });
        return () => subscriber();
    }

    render(){
        const {navigation} = this.props;
        const items = this.state.items;
        const status = this.props.status;
        return(
            <View style={[styles.container]}>
                {items.length == 0 ? 
                <View style={[styles.emptycontainer]}>
                    <Text style={[styles.noorders]}>No Orders</Text>
                </View>
                :
                <View style={[styles.container]}>
                <FlatList
                    itemDimension={80}
                    data={this.state.items}
                    spacing={3}
                    renderItem={({ item }) => (
                        <>
                            <ListContainer item={item} status={status}/>
                        </>
                    )}
                />
                </View>}
                <BackgroundJob state={this.state.active} getState={(state)=>console.log(state)}/>
                <DrawerTogleButton action={()=>navigation.toggleDrawer()} navigation={navigation}/>
            </View>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <ListPage {...props} navigation={navigation} />;
} 