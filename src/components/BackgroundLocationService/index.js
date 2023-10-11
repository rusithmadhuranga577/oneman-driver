import React, {useState, useEffect, Component} from 'react';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import RNLocation from 'react-native-location';
import { PermissionsAndroid } from 'react-native';
// import firebase from '../Config/common/firebase';
var SharedPreferences = require('react-native-shared-preferences');

const BackgroundService = async () => {

    const [name, setname] = useState('');
    
        const backgroundgranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
            {
            title: 'Background Location Permission',
            message:
                'We need access to your location ' +
                'so you can get live quality updates.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
            },
        );

        useEffect(()=>{
            backgroundgranted();
        },[])

        SharedPreferences.getItem('name', name=>{
            setname(name);
        })

        RNLocation.configure({
        distanceFilter: 100, // Meters
        desiredAccuracy: {
            ios: 'best',
            android: 'balancedPowerAccuracy',
        },
        // Android only
        androidProvider: 'auto',
        interval: 2000, // Milliseconds
        fastestInterval: 2000, // Milliseconds
        maxWaitTime: 2000, // Milliseconds
        // iOS Only
        activityType: 'other',
        allowsBackgroundLocationUpdates: false,
        headingFilter: 1, // Degrees
        headingOrientation: 'portrait',
        pausesLocationUpdatesAutomatically: false,
        showsBackgroundLocationIndicator: false,
        });
        let locationSubscription = null;
        let locationTimeout = null;

        ReactNativeForegroundService.add_task(
        () => {
            RNLocation.requestPermission({
                ios: 'whenInUse',
                android: {
                    detail: 'fine',
                },
                }).then((granted) => {
                    console.log("Permissions ---------")
                if (granted) {
                    var hours = new Date().getHours(); //To get the Current Hours
                    var min = new Date().getMinutes(); //To get the Current Minutes
                    var sec = new Date().getSeconds(); //To get the Current Seconds
                    locationSubscription && locationSubscription();
                    locationSubscription = RNLocation.subscribeToLocationUpdates(
                    ([locations]) => {
                        locationSubscription();
                        locationTimeout && clearTimeout(locationTimeout);
                        SharedPreferences.getItem('userid', id => {
                            // firebase.database()
                            // .ref('/driver/'+id)
                            // .update({
                            //     latitude: locations.latitude,
                            //     longitude: locations.longitude,
                            //     lastupdatedtime : hours+':'+min+':'+sec,
                            //     drivername : name
                            // })
                            // .then(() => console.log('Data updated.'));
                        })
                    },
                    );
                    } else {
                        locationSubscription && locationSubscription();
                        locationTimeout && clearTimeout(locationTimeout);
                        console.log('no permissions to obtain location');
                    }
                });
            },
                {
                    delay: 1000,
                    onLoop: true,
                    taskId: 'taskid',
                    onError: (e) => console.log('Error logging:', e),
                },
        );
}

export default BackgroundService;