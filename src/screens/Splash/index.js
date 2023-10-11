/** @format */

import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  PermissionsAndroid,
  Text,
  Dimensions,
  View,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Images, Url } from '@common';
import axios from 'axios';

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const Splash =() => {

  const slideanimation = useRef(new Animated.Value(0)).current;
  const bordernimation = useRef(new Animated.Value(0)).current;
  const imageheight = useRef(new Animated.Value(ScreenHeight)).current;
  const imagewidth = useRef(new Animated.Value(ScreenWidth)).current;

  const navigation = useNavigation();

  const initMethod = () => {
    animatein(),
    borderin(),
    animatebg();
    nav();
  }

  useEffect(() => {
    initMethod();
  }, [])

  const nav = () => {
    SharedPreferences.getItem('logged', logged=>{
        console.log(logged);
        if(logged == null){
            setTimeout(() => {
                navigation.replace('Login');
            }, 3000);
        }else{
            setTimeout(() => {
               navigation.replace('MainDrawer');
            }, 3000);
        }
    });
  }

  const animatein = () => {
    Animated.timing(slideanimation, {
      toValue: ScreenHeight/1.7,
      duration: 700
    }).start();
  };

  const animatebg = () => {
    Animated.timing(imageheight, {
      toValue: ScreenHeight+80,
      duration: 2000
  }).start();

    Animated.timing(imagewidth, {
      toValue: ScreenWidth+80,
      duration: 2000
    }).start();
  };

  const borderin = () => {
    Animated.timing(bordernimation, {
      toValue: 15,
      duration: 1500
    }).start();
  };

  return(
    <View style={[styles.container]}>
      <Animated.View style={[styles.halfround, {height : slideanimation, borderWidth : bordernimation}]}>
        <View style={[styles.imagecontainer]}>
          <Image source={Images.Logo} style={[styles.logo]}/>
        </View>
      </Animated.View>
      <Animated.Image source={Images.SplashBg} style={[styles.image]}></Animated.Image>
      <Text style={[styles.merchanttext]}>DRIVER</Text>
    </View>
  );
}
export default Splash;