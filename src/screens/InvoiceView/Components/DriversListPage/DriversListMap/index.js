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
import {Url, Colors, Languages, Store, Icons} from '@common';
import { Button, LoadingComponent } from '@components';
import styles from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const QueryString = require('query-string');

class DriversListMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            driverslist : []
        };
    }

    componentDidMount(){
        this.getDriversList();
    }

    getDriversList = () => {
        firestore()
        .collection('drivers')
        .onSnapshot(documentSnapshot => {
            var array = [];
            documentSnapshot.forEach(documentSnapshot => {
                array.push(documentSnapshot.data());
            });
            setTimeout(() => {
                this.setState({driverslist : array});
            }, 700);
            console.log(array)
        }) 
    }

    render(){
        const visibility = this.props.visibility;
        const markerslist = this.state.driverslist;
        return(
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 7.392475, 
                        longitude: 80.397274,
                        latitudeDelta: 0.00009,
                        longitudeDelta: 0.7000,
                    }}
                >
                    {markerslist && markerslist.map(driver => (
                        <Marker
                            key={driver.driver_id}
                            coordinate={{ latitude: Number(driver.latitude), longitude: Number(driver.longitude) }}
                            title={driver.driver_name}
                        >
                            <View style={{width : 35, height : 40, alignItems : 'center', justifyContent : 'center', transform : [{ rotate: `${driver.heading}deg` }]}}>
                                <Image
                                    source={Icons.deliveryboymapmarker}
                                    style={{width: '100%', height: '100%'}}
                                />
                            </View>
                        </Marker >
                    ))}
            </MapView>
            </View>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <DriversListMap {...props} navigation={navigation} />;
} 