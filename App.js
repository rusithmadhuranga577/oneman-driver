/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import Router from './src/router/Router';
import { LogBox, View,PermissionsAndroid } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { BackgroundJob, PulseAnimationScreen } from '@components';
import { DrawerTogleButton } from '@components';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import RNLocation from 'react-native-location';

const App = () => {

  useEffect(()=>{
    LogBox.ignoreAllLogs();
    // ReactNativeForegroundService.start({
    //   id: 144,
    //   title: "One Man Kitchen Driver App",
    //   message: "you are online!",
    // });

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
          detail: 'fine',
      },
      }).then((granted) => {
          console.log("Permissions ---------",granted)
      if (granted) {
          // var hours = new Date().getHours(); //To get the Current Hours
          // var min = new Date().getMinutes(); //To get the Current Minutes
          // var sec = new Date().getSeconds(); //To get the Current Seconds
          // locationSubscription && locationSubscription();
          // locationSubscription = RNLocation.subscribeToLocationUpdates(
          // ([locations]) => {
          //     locationSubscription();
          //     locationTimeout && clearTimeout(locationTimeout);
          //     SharedPreferences.getItem('userid', id => {
          //         // firebase.database()
          //         // .ref('/driver/'+id)
          //         // .update({
          //         //     latitude: locations.latitude,
          //         //     longitude: locations.longitude,
          //         //     lastupdatedtime : hours+':'+min+':'+sec,
          //         //     drivername : name
          //         // })
          //         // .then(() => console.log('Data updated.'));
          //     })
          // },
          // );
          } else {
              // locationSubscription && locationSubscription();
              // locationTimeout && clearTimeout(locationTimeout);
              // console.log('no permissions to obtain location');
          }
    });

    const backgroundgranted = PermissionsAndroid.request(
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

      return ()=> backgroundgranted;
  },[])

  return (
    <>
      <Router/>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
