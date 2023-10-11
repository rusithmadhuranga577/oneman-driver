/** @format */

import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import { Images, Colors, Languages, Url } from '@common';
import Icon from 'react-native-vector-icons/Ionicons';


var SharedPreferences = require('react-native-shared-preferences');
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

class Button extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logoutstate : false
    };
    this.logoutstate = this.logoutstate.bind(this);
  }

  logoutstate(){
    this.props.logoutstate(this.state.logoutstate);
  }

  NavigateFunction = (page) => {
    if(page == 'LocationSettings'){
      this.props.navigation.navigate(page, {logged : 1})
    }else if(page == 'UpdateUserInfo'){
      this.props.navigation.navigate(page)
    }else if(page == 'Logout'){
      this.setState({logoutstate : true});
      setTimeout(() => {
        this.logoutstate();
      }, 100);
    }else if(page == 'WebViewPage'){
      this.props.navigation.push('WebViewPage', {title : Languages.RateUs, url : Url.rateusurl})
    }else if(page == 'PrivacyPolicy'){
      this.props.navigation.navigate('WebViewPage', {title : Languages.PrivacyPolicy, url : Url.privacypolicyurl})
    }else if(page == 'OrdersPage'){
      this.props.navigation.navigate(page)
    }
  }

  render(){
    return(
      <>
      <TouchableOpacity onPress={()=>this.NavigateFunction(this.props.screen)} style={[styles.buttoncontainer]}>
          <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
            <Icon name={this.props.icon} size={25} color={Colors.darkgray}/>
            <Text style={[styles.buttontitle]}>{this.props.title}</Text>
          </View>
          <Icon name={'chevron-forward-outline'} size={30} color={Colors.darkgray}/>
      </TouchableOpacity>
      </>
    );
  }
}
export default Button;