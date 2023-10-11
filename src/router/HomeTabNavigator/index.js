import React, {useState, useEffect, Component} from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import { Colors } from '@common';

import {Splash} from '@screens';
import {Home} from '@screens';

import {PendingOrders} from '@ordersteps';
import {AssignedOrders} from '@ordersteps';
import {PickedOrders} from '@ordersteps';

const Tab = createMaterialTopTabNavigator();

var SharedPreferences = require('react-native-shared-preferences');

function HomeTabNavigator() {

  useEffect(()=>{
    SharedPreferences.getItem('driverid', (id)=>{

    })
  },[])

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarStyle: [styles.tabBarStyle],
        unmountInactiveRoutes: true,
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'Pending') {
              iconName = focused ? 'time' : 'time-outline';
              color = focused ? Colors.primary : Colors.black;

            }else if (route.name === 'Assigned Orders') {
              iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
              color = focused ? Colors.primary : Colors.black;

            }else if (route.name === 'Picked Orders') {
              iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
              color = focused ? Colors.primary : Colors.black;

            }
    
            return (
              <>
                <Ionicons name={iconName} size={25} color={color} />
                {/* <View style={[styles.badgecontainer]}>
                  <Text>{pending_count}</Text>
                </View> */}
              </>
            );
        },
        })}
        tabBarOptions={{
            labelStyle: [styles.hometabtitle],
        }}
    >
      <Tab.Screen name="Pending" component={PendingOrders} />
      <Tab.Screen name="Assigned Orders" component={AssignedOrders} />
      {/* <Tab.Screen name="Picked Orders" component={PickedOrders} /> */}
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;