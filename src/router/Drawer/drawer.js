import React, {useState, useEffect, Component} from 'react';
import DrawerComponent from './index';
import { DrawerTogleButton } from '@components';
import { useNavigation } from '@react-navigation/native';

class MainDrawer extends React.Component{
    render(){
      const {navigation} = this.props;
      return(
        <>
          <DrawerComponent/>
        </>
      );
    }
  }
  
  export default function(props){
    const navigation = useNavigation();
    return <MainDrawer {...props} navigation={navigation} />;
  }