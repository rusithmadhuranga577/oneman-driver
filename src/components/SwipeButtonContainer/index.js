import React, {useState, useEffect, Component} from 'react';
import {View} from 'react-native';
import {Url, Colors, Languages, Store, Icons, Constants} from '@common';
import Icon from 'react-native-vector-icons/Ionicons';
import SwipeButton from 'rn-swipe-button';

class SwipeButtonContainer extends React.Component {

    CheckoutButton = () => {
        return(
            <View style={{width: 40, height: 40, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius : 100}}>
                <Icon name={'arrow-forward-outline'} color={'#000'} size={25}/>
            </View>
        );
    } 

    render(){
        return(
            <View>
                <SwipeButton
                    containerStyles={{borderRadius: 100}}
                    height={40}
                    onSwipeFail={() => console.log('Incomplete swipe!')}
                    onSwipeStart={() => console.log('Swipe started!')}
                    onSwipeSuccess={() => this.props.action()}
                    railBackgroundColor={Colors.white}
                    railStyles={{borderRadius: 100}}
                    thumbIconComponent={this.CheckoutButton}
                    thumbIconStyles={{borderRadius: 100}}
                    thumbIconWidth={40} 
                    railBorderColor={Colors.primary}
                    title={this.props.title}
                    railFillBackgroundColor={Colors.primary}
                    railFillBorderColor={Colors.primary}
                    thumbIconBorderColor={Colors.primary}
                    titleStyles={{fontFamily : Constants.fontFamilybold, fontSize : 15}}
                    railStyles={{borderWidth : 0.8}}
                    disabled={this.props.disabled}
                />
            </View>
        );
    }
}
export default SwipeButtonContainer;