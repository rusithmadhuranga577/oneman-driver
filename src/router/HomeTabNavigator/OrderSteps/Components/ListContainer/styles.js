import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        height: 110, 
        backgroundColor: Colors.white, 
        flexDirection: 'column', 
        paddingLeft: 10, 
        width: '98%', 
        justifyContent: 'space-between',
        elevation : 5,
        marginTop : 10,
        marginBottom : 5,
        borderRadius : 10,
        alignSelf : 'center'
    },
    orderidtext  : {
        fontFamily : Constants.fontFamilybold,
        color : Colors.black
    },
    ordercountcontainer : {
        padding: 5, 
        backgroundColor: Colors.alertyellow, 
        bottom: 10, 
        borderRadius: 5, 
    },
    ordercounttext : {
        fontFamily : Constants.fontFamilybold,
        fontSize : 12,
        color : Colors.black
    },
    customername : {
        fontFamily : Constants.fontFamilybold,
        fontSize : 15,
        color : Colors.black
    },
    ordertypecontainer : {
        padding : 5,
        backgroundColor: 'green',
        borderRadius : 15,
        paddingLeft : 15,
        paddingRight : 15,
        alignItems : 'center',
        justifyContent : 'center'
    },
    payment_typetext : {
        fontFamily : Constants.fontFamilybold,
        color : Colors.white,
        fontSize : 15
    }
})

export default styles;