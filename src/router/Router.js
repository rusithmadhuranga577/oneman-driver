import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TransitionPresets } from '@react-navigation/stack';

import ToggleButton from './ToggleButton';

import {Splash} from '@screens';
import {InvoiceView} from '@screens';
import {Orders} from '@screens';
import {OrderView} from '@screens';
import {Login} from '@screens';
import {ProfilePage} from '@screens';

import { BackgroundJob, DrawerTogleButton } from '@components';
import { Colors } from '@common';

import MainDrawer from './Drawer/drawer';

const Stack = createStackNavigator();

function Router() {

  const Back = () => {
    return(
      <View>
        <Ionicons name={'chevron-back-outline'} size={25} color={Colors.black}/>
      </View>
    );
  }

  const linking = {
    prefixes: ['https://app.gamigedaradriver.net'],
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
       screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { height: 50, elevation: 10} ,
        headerRight : ()=>(<ToggleButton/>),
        headerBackTitleVisible: false,
        animationEnabled : true,
        ...TransitionPresets.SlideFromRightIOS ,
        headerTitleStyle : {fontSize : 17},
        headerBackImage: ()=>(<Back/>),
      }}
      >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}}/>
        <Stack.Screen name="MainDrawer" component={MainDrawer} options={{headerShown : true, title : 'Gamigedara Restaurant'}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
        <Stack.Screen name="InvoiceView" component={InvoiceView} options={({ route })=>({headerShown : true, title : route.params.title})}/>
        <Stack.Screen name="Orders" component={Orders} options={{headerShown : false}}/>
        <Stack.Screen name="OrderView" component={OrderView} options={({ route })=>({headerShown : true, title : route.params.title})}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown : false}}/>
        <Stack.Screen name="BackgroundJob" component={BackgroundJob} options={{headerShown : false}}/>
        <Stack.Screen name="DrawerTogleButton" component={DrawerTogleButton} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;