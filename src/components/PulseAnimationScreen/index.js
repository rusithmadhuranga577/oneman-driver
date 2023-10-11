import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {Url, Colors, Languages, Store} from '@common';
import { BackgroundJob } from '@components';

export default class PulseAnimationScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            show : false,
        };
    }

    componentDidUpdate(){
        console.log('SSSSS',this.props.state)
    }

    render(){
        return(
            <>
            <BackgroundJob getState={(state)=>console.log(state)}/>
            {this.props.state ? 
                <View style={{width : '100%', height : '100%', backgroundColor : 'rgba(0,0,0,0.5)'}}>

                </View> 
            : null}
            </>
        );
    }
}