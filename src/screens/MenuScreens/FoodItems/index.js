import React, {useState, useEffect, Component} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Url, Colors, Languages, Store} from '@common';
import { Button, CustomAlert, CustomAlertButton, LoadingComponent, DrawerTogleButton } from '@components';
import axios from 'axios';
import styles from './styles';
import RenderItem from './RenderItem';

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');

class FoodTypes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            foodlist : [],
            loading : false,
            hidebutton : false,
            driverid : '',
            turnoffalert : false,
            clickeditem_id : null,
        };
    }

    componentDidMount(){
        SharedPreferences.getItem('driverid', (id)=>{
            this.setState({driverid : id});
            this.getFoodList();
        });
    }

    getFoodList = () => {
        this.setState({loading : true});
        axios.post(Url.getfoodlisturl, 
        QueryString.stringify({
            restaurant_id : this.state.driverid,
        }), 
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        }).then(response => {
            this.setState({foodlist : response.data.foods});
            this.setState({loading : false});
        }).catch(err => {
            alert(err);
            this.setState({loading : false});
        })
    }

    updateItem = (id, status) => {
        this.setState({loading : true});
        axios.post(Url.updatefoodavailabilityurl, 
        QueryString.stringify({
            foodid : id,
            status : status
        }), 
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        }).then(response => {
            console.log(response.data);
            this.getFoodList();
            this.closeTurnOffAlert();
            this.setState({loading : false});
        }).catch(err => {
            alert(err);
            this.setState({loading : false});
        })
    }

    onClickFunction = (id, status) => {
        console.log(id, status);
        if(status == 0){
            this.setState({clickeditem_id : id});
            this.openTurnOffAlert();
        }else{
            this.updateItem(id, status);
        }
    }

    openTurnOffAlert = () => {
        this.setState({turnoffalert : true});
    }

    closeTurnOffAlert = () => {
        this.setState({turnoffalert : false});
    }

    render(){
        const items = this.state.foodlist;
        const turnoffalert = this.state.turnoffalert;
        const clickeditem_id = this.state.clickeditem_id;
        const {navigation} = this.props;
        return(
            <View style={[styles.container]}>
                <LoadingComponent visibility={this.state.loading}/>
                <Text style={[styles.pagetitle]}>{Languages.FoodItems}</Text>
                <FlatList
                    itemDimension={80}
                    staticDimension={300}
                    fixed
                    spacing={5}
                    // ItemSeparatorComponent={()=>(<View style={[styles.itemseparator]}/>)}
                    data={items}
                    key={item => item.id}
                    spacing={3}
                    renderItem={({ item, index }) => <RenderItem item={item} togleItem={(id, status)=>this.onClickFunction(id, status)}/>}
                />

                {/* Turn Off Item Alert*/}
                <CustomAlert
                    displayMode={'info'}
                    displayMsg={Languages.AreYouSureTurnOff}
                    displaymsgtitle={'Info'}
                    visibility={turnoffalert}
                    dismissAlert={this.closeTurnOffAlert}
                    cancellable={false}
                    buttons={(
                    <>
                        <CustomAlertButton buttontitle={Languages.TurnOff} theme={'alert'} buttonaction={()=>this.updateItem(clickeditem_id, 0)}/>
                        <CustomAlertButton buttontitle={Languages.TurnOffUntilTomorrow} theme={'error'} buttonaction={()=>this.updateItem(clickeditem_id, 2)}/>
                        <CustomAlertButton buttontitle={Languages.Cancel} theme={'inverse'} buttonaction={this.closeTurnOffAlert}/>
                    </>
                    )}
                />
                <DrawerTogleButton navigation={navigation}/>
            </View>
        );
    }

}

export default function(props){
    const navigation = useNavigation();
    return <FoodTypes {...props} navigation={navigation} />;
}