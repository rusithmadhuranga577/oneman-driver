import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        padding : 5
    },
    emptycontainer : {
        width : '100%',
        height : '100%',
        backgroundColor : Colors.white,
        alignItems : 'center',
        justifyContent : 'center'
    },
    noorders : {
        fontSize: 20,
        fontFamily: Constants.fontFamilybold,
        color : Colors.darkgray
    },
    shopclosedcontainer : {
        width : '100%',
        height : 50,
        backgroundColor : Colors.alertred,
        alignItems : 'center',
        justifyContent : 'center'
    },
    merchantclosedtext : {
        fontFamily : Constants.fontFamilybold,
        fontSize : 18,
        color : Colors.white
    },
})

export default styles;