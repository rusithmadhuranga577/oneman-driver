/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { connect } from "react-redux";
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';
import { Languages } from '@common';
import { LogoutPopup, DrawerTogleButton } from '@components';
import RNRestart from 'react-native-restart';
import Button from './button';

var SharedPreferences = require('react-native-shared-preferences');
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const Account =() => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [user, setuser] = useState('');
  const [showlogoutpopup, setshowlogoutpopup] = useState(false);

  useEffect(() => {
    SharedPreferences.getItems(['profilepicture', 'name', 'lname', 'email'], (user)=>{
      setuser(user);
    });
  }, [isFocused]);

  const LogoutFunction = () => {
    setshowlogoutpopup(false);
    SharedPreferences.clear();
    RNRestart.Restart();
  }

  return(
    <View>
    <View style={[styles.container]}>
      <Text style={[styles.pagetitle]}>{Languages.Account}</Text>
      <View style={styles.topcard}>
      </View>
      <View style={[styles.floatingcard]}>
        <TouchableOpacity style={styles.imageholder} >
          <Image source={{uri : user[0]}} style={styles.image}/>
        </TouchableOpacity>
        <Text style={[styles.name]}>{user[1]}</Text>
        <Text style={[styles.email]}>{user[3]}</Text>
        <ScrollView>
          {/* <Button icon={'person-circle-outline'} title={Languages.MyProfile} screen={'UpdateUserInfo'} navigation={navigation}/> */}
          <Button icon={'log-out-outline'} title={Languages.LogOut} screen={'Logout'} navigation={navigation} logoutstate={(state)=>setshowlogoutpopup(state)}/>
        </ScrollView>
      </View>
    </View>
    {showlogoutpopup ?
      <View style={{width : '100%', height : '100%', position : 'absolute'}}>
        <LogoutPopup Logout={LogoutFunction} CancelLogout={()=>setshowlogoutpopup(false)} visibility={showlogoutpopup}/>
      </View>:null}
    <DrawerTogleButton navigation={navigation}/>
    </View>
  );
}
export default Account;