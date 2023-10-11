import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import ToggleSwitch from 'toggle-switch-react-native';
import {Url, Colors, Languages, Store} from '@common';
import { BackgroundJob, PulseAnimationScreen } from '@components';
import { showMessage, hideMessage } from "react-native-flash-message";

const QueryString = require('query-string');
var SharedPreferences = require('react-native-shared-preferences');

export default class ToggleButton extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            active : false,
            fetching : false,
            showpulse : false,
            driverid : '',
        };
    }

    componentDidMount(){
        this.getDriverState();
        SharedPreferences.getItem('driverid', (id)=>{
            this.setState({driverid : id});
        })
    }

    togleMode=()=>{
        const active = this.state.active
        this.setState({active : !active})
        if(active){
            this.updateDriverState(0);
        }else{
            this.updateDriverState(1);
        }
    }

    updateDriverState=(status)=>{
        this.setState({fetching : true});
        axios.post(Url.driverstatusupdateurl, 
        QueryString.stringify({
            driver_id  : this.state.driverid,
            status : status
        }), 
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        }).then(response => {
            console.log(response.data)
            this.setState({fetching : false});
        })
    }

    getDriverState=()=>{
        this.setState({fetching : true});
        const driverid = 1;
        axios.post(Url.getdriverdetailsurl, 
        QueryString.stringify({
            driver_id : driverid
        }),
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded",}
        })
        .then(response => {
            const state = response.data.active;
            if(state == 1){
                this.setState({active : true});
                this.setState({fetching : false});
            }else if(state == 0){
                this.setState({active : false});
                this.setState({fetching : false});
                showMessage({
                    message: Languages.YouAreOffline,
                    type: "danger",
                    icon: "danger",
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        const active = this.state.active;
        const fetching = this.state.fetching;
        return(
            <View style={{marginRight : 10}}>
                {fetching ? 
                <ActivityIndicator
                    size={28}
                    color={Colors.Primary}
                />
                :
                <ToggleSwitch
                    isOn={active}
                    onColor="green"
                    offColor="red"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="small"
                    onToggle={this.togleMode}
                />}
                <BackgroundJob state={this.state.active} getState={(state)=>this.setState({showpulse : state})}/>
            </View>
        );
    }
}