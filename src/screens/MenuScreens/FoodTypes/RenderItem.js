import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Url, Colors, Languages, Store} from '@common';
import ToggleSwitch from 'toggle-switch-react-native';
import { Button, CustomAlert, CustomAlertButton } from '@components';
import axios from 'axios';
import styles from './styles';

class RenderItem extends Component {

    togleItem = (active) => {
        const item = this.props.item;
        var status = null;
        if(active == true){
            status = 1;
        }else{
            status = 0;
        }
        this.props.togleItem(item.id, status);
    }

    render(){
        const item = this.props.item;
        return(
            <View style={[styles.itemcontainer]}>
                <View style={{flexDirection : 'row', alignItems : 'center', width : '60%'}}>
                    <Image source={{uri : item.image}} style={[styles.imagecontainer]}/>
                    <View style={{width: '65%',}}>
                        <Text numberOfLines={2} style={[styles.itemname]}>{item.category_name}</Text>
                        <Text numberOfLines={2} style={[styles.itemsecondline]}>{item.second_line}</Text>
                    </View>
                </View>
                <View>
                    {item.active == 2 ? <Text style={[styles.turnedoff]}>{Languages.TurnedOffUntilTommorow}</Text>:null}
                    <View style={{alignSelf : 'flex-end'}}>
                    <ToggleSwitch
                        isOn={item.active == 1 ? true : false}
                        onColor="green"
                        offColor= {item.active == 2 ? "orange" : "red"}
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={(active)=>this.togleItem(active)}
                    />
                    </View>
                </View>
            </View>
        );
    }

}

export default RenderItem;