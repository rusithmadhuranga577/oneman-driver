import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.white,
        padding : 10
    },
    appname : {
        fontSize : 25,
        fontFamily : Constants.fontFamilybold,
        color : Colors.black
    },
    thanksfororder : {
        fontSize : 20,
        fontFamily : Constants.fontFamilynormal,
        marginTop : 30
    },
    hereisyour : {
        fontSize : 15,
        fontFamily : Constants.fontFamilynormal,
        marginTop : 5
    },
    subtextholder : {
        width : '100%', 
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 2
    },
    subtext : {
        fontFamily : Constants.fontFamilynormal,
        color : Colors.darkgray,
        fontSize : 12,
        color : Colors.black
    },
    row : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    vectorimage : {
        width : 60,
        height : 60
    },
    total : {
        fontSize : 20,
        fontFamily : Constants.fontFamilybold,
        color : Colors.black
    },
    orderchargeinforow : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    orderchargeinfotext : {
        fontFamily : Constants.fontFamilynormal,
        fontSize : 15,
        color : Colors.black
    },
    separator : {
        width : '100%',
        height : 1.5,
        backgroundColor : Colors.darkgray,
        marginTop : 15,
        marginBottom : 15
    },
    paidby : {
        fontSize : 15,
        fontFamily : Constants.fontFamilybold
    },
    ordercountcontainer : {
        padding : 8, 
        borderRadius : 10, 
        backgroundColor : Colors.primary,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'flex-start',
        elevation: 5,
        marginTop : 5
    },
    ordercounttext : {
        fontFamily : Constants.fontFamilybold,
        color : Colors.black
    },

    // Item List Styles
    orderitemcontainer : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    orderitemqtyholder : {
        width : 30,
        height : 30,
        backgroundColor : Colors.gray,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 5,
        marginRight : 10
    },
    itemseparator : {
        width : '90%',
        alignSelf : 'center',
        height : 1.5,
        backgroundColor : Colors.gray,
        marginTop : 8,
        marginBottom : 8
    },
     
    // Button
    buttonholder : {
        width : '100%',
        position : 'absolute',
        bottom : 20,
        alignSelf : 'center'
    }
})

export default styles;