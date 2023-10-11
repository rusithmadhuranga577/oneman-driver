import React, {useState, useEffect, Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '@common';
import Icon from 'react-native-vector-icons/Ionicons';

import {Splash} from '@screens';
import {Home} from '@screens';
import {Orders} from '@screens';
import {DriverSummery} from '@screens';
import {CanceledOrders} from '@screens';
import {Addons} from '@screens';
import {FoodItems} from '@screens';
import {FoodTypes} from '@screens';
import {ProfilePage} from '@screens';

import HomeTabNavigator from '../HomeTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
        drawerType={'permanent'}
        drawerStyle={{
          backgroundColor: '#000',
        }}
        drawerContentOptions={{
          activeTintColor: '#000',
          activeBackgroundColor: '#fff',
          inactiveTintColor: '#fff'
        }}
        activeTintColor={'#000'}
        labelStyle={{
          color: '#000'
        }}
    >
      <Drawer.Screen name="Live" component={HomeTabNavigator}  options={{headerShown : false, drawerIcon: ({focused, size}) => (<Icon name="list-circle" size={size} color={focused ? Colors.primary : Colors.black}/>)}}/>
      {/* <Drawer.Screen name="Driver Summery" component={Orders}  options={{headerShown : false, drawerIcon: ({focused, size}) => (<Icon name="checkmark-circle" size={size} color={focused ? Colors.primary : Colors.black}/>)}}/> */}
      {/* <Drawer.Screen name="Canceled Orders" component={CanceledOrders}  options={{headerShown : false, drawerIcon: ({focused, size}) => (<Icon name="close-circle" size={size} color={focused ? Colors.primary : Colors.black}/>)}}/> */}
      {/* <Drawer.Screen name="Addons" component={Addons}  options={{headerShown : false}}/> */}
      {/* <Drawer.Screen name="Food Items" component={FoodItems}  options={{headerShown : false, drawerIcon: ({focused, size}) => (<Icon name="fast-food" size={size} color={focused ? Colors.primary : Colors.black}/>)}}/>
      <Drawer.Screen name="Food Categories" component={FoodTypes}  options={{headerShown : false, drawerIcon: ({focused, size}) => (<Icon name="pizza" size={size} color={focused ? Colors.primary : Colors.black}/>)}}/> */}
      <Drawer.Screen name="Driver Summery" component={DriverSummery}  options={{headerShown : false, drawerIcon: ({focused, size}) => (<Icon name="person-circle-outline" size={size} color={focused ? Colors.primary : Colors.black}/>)}}/>
      <Drawer.Screen name="Profile" component={ProfilePage}  options={{headerShown : false, drawerIcon: ({focused, size}) => (<Icon name="person-circle-outline" size={size} color={focused ? Colors.primary : Colors.black}/>)}}/>
    </Drawer.Navigator>
  );
}

export default DrawerComponent;