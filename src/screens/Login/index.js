/** @format */

import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { Colors, Constants, Url, Languages } from '@common';
import { Button, LoadingComponent, CustomAlert, CustomAlertButton } from '@components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { showMessage, hideMessage } from "react-native-flash-message";

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');

const Login =() => {

  const navigation = useNavigation();
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [loading, setloading] = useState(false);
  const [passwordvisible, setpasswordvisible] = useState(false);
  const [loginfailederror, setloginfailederror] = useState(false);
  const [nouseralert, setnouseralert] = useState(false);
  const [oldsessionalert, setoldsessionalert] = useState(false);
  const [errormsg, seterrormsg] = useState('');

  useEffect(() => {
  })

  const NewAccountFunction = () => {
    SharedPreferences.getItem('createaccountstep', step => {
      if(step == null){
        navigation.navigate('CreateNewAccount');
      }else{
        setoldsessionalert(true);
      }
    })
  }

  const showpopup = () => {
    showMessage({
      message: "Login Success !",
      type: "success",
      icon : 'success',
      duration : 2500
    });
  }

  const NaviigateFunction = () => {
    setoldsessionalert(false)
    SharedPreferences.getItem('createaccountstep', step => {
      console.log(step)
      if(step == null){
        navigation.navigate('CreateNewAccount')
      }else if(step == 2){
        navigation.navigate('SetProfileImage')
      }else if(step == 3){
        navigation.navigate('LocationSettings', {logged : 0})
      }
    })
  }

  const Closeoldsessionalert = () => {
    SharedPreferences.clear();
    setoldsessionalert(false);
    navigation.push('CreateNewAccount');
  }

  const ErrorMsgFunction = (msg) => {
    var errormsg = '';

    if(msg.email){
      errormsg = msg.email[0];
    }if(msg.email && msg.password){
      errormsg = '* '+msg.email[0]+`\n`+'* '+msg.password[0];
    }if(msg.password){
      errormsg = msg.password[0];
    }
    console.log(errormsg);
    seterrormsg(errormsg)
  }

  const LoginFunction = () => {
    console.log(Url.loginurl);
    if(email == '' || password == ''){
      alert('Details you entered are incorrect, please check again and retry');
    }else{
      setloading(true);
      axios.post(Url.loginurl, 
      QueryString.stringify({
        email : email,
        password : password
      }), 
      {
        headers: {"Content-Type": "application/x-www-form-urlencoded",}
      }).then(response => {
        console.log(response.data.merchant)
        if(response.data.status == 1){
          SharedPreferences.setItem('driverid', response.data.driver.id+'');
          SharedPreferences.setItem('email', response.data.driver.email+'');
          SharedPreferences.setItem('name', response.data.driver.first_name+''+response.data.driver.last_name);
          // SharedPreferences.setItem('profilepicture', response.data.driver.profile_photo_url+'');
          // SharedPreferences.setItem('usertype', response.data.driver.user_type+'');
          SharedPreferences.setItem('logged', 1+'');
          showpopup();
          setTimeout(() => {
            navigation.replace('MainDrawer');
            setloading(false);
          }, 1500);
        }else if(response.data.status == 2){
          setnouseralert(true);
          setloading(false);
        }else{
          seterrormsg(response.data.error);
          setloading(false);
          setloginfailederror(true);
        }
      })
    }
  }

  return(
    
    <View>
      <LoadingComponent visibility={loading}/>
      <ScrollView style={styles.container}>
      <View style={[styles.container, {alignItems : 'center', justifyContent : 'center'}]}>
        <Text style={[styles.logintitle, {alignSelf : 'flex-start'}]}>{Languages.Login}</Text>

          <Text style={[styles.textinputtitle, {marginTop: 20, marginBottom: 8, alignSelf : 'flex-start'}]}>{Languages.Email}</Text>
          <View style={[styles.textinputviewrow]}>
              <View style={[styles.iconholder]}>
                  <Icon name={'at'} size={25} color={Colors.black}/> 
              </View>
              <TextInput 
                  value={email}
                  placeholder={Languages.Emailplaceholder}
                  onChangeText={text => setemail(text)}
                  style={[styles.input, {fontFamily: Constants.fontFamilynormal, width: '90%'}]}
                  placeholderTextColor={'rgba(0,0,0,0.4)'}
              />
          </View>

          <Text style={[styles.textinputtitle, {marginTop: 20, marginBottom: 8, alignSelf : 'flex-start'}]}>{Languages.Password}</Text>
          <View style={[styles.textinputviewrow]}>
              <View style={[styles.iconholder]}>
                  <Icon name={'lock'} size={25} color={Colors.black}/>
              </View>
              <TextInput 
                  value={password}
                  secureTextEntry={!passwordvisible}
                  placeholder={Languages.Passwordplaceholder}
                  onChangeText={text => setpassword(text)}
                  style={[styles.input, {fontFamily: Constants.fontFamilynormal, width: '90%'}]}
                  placeholderTextColor={'rgba(0,0,0,0.4)'}
              />
          </View>

          <View style={[styles.checkboxcontainer]}>
            <CheckBox
              disabled={false}
              value={passwordvisible}
              tintColors={{ true: Colors.primary, false: 'black' }}
              onValueChange={(newValue) => setpasswordvisible(newValue)}
            />
            <Text style={[styles.checkboxcontainertext]}>{Languages.ShowHidePassword}</Text>
          </View>

        <View style={{marginTop : 20, width : '100%'}}>
          <Button title={Languages.Login} action={LoginFunction}/>
        </View>
        <Text style={[styles.textinputtitle, {marginTop: 20, alignSelf: 'center'}]}>{Languages.ForgetPassword}</Text>
      </View>
      </ScrollView>

      {/* Something Went Wrong*/}
      <CustomAlert
        displayMode={'error'}
        displayMsg={errormsg}
        displaymsgtitle={'Error'}
        visibility={loginfailederror}
        dismissAlert={setloginfailederror}
        cancellable={true}
        buttons={(
          <>
            <CustomAlertButton buttontitle={'Ok'} theme={'error'} buttonaction={()=>setloginfailederror(false)}/>
          </>
        )}
      />

      {/* No User Found Alert*/}
      <CustomAlert
        displayMode={'alert'}
        displayMsg={Languages.NoUserFound}
        displaymsgtitle={'Alert'}
        visibility={nouseralert}
        dismissAlert={setnouseralert}
        cancellable={true}
        buttons={(
          <>
            <CustomAlertButton buttontitle={Languages.Retry} theme={'alert'} buttonaction={()=>setnouseralert(false)}/>
            <CustomAlertButton buttontitle={Languages.CreateNewAccount} theme={'inverse'} buttonaction={()=>setnouseralert(false)}/>
          </>
        )}
      />

      {/* Old Session */}
      <CustomAlert
        displayMode={'alert'}
        displayMsg={Languages.FoundIncolmpleteSession}
        displaymsgtitle={'Alert'}
        visibility={oldsessionalert}
        dismissAlert={setoldsessionalert}
        cancellable={true}
        buttons={(
          <>
            <CustomAlertButton buttontitle={Languages.Yes} theme={'alert'} buttonaction={NaviigateFunction}/>
            <CustomAlertButton buttontitle={Languages.No} theme={'inverse'} buttonaction={Closeoldsessionalert}/>
          </>
        )}
      />
    </View>
  );
}
export default Login;