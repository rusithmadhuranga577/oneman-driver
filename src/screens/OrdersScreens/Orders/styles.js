import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.white,
    },
    itemcontainer : {
        width : '95%',
        padding : 10,
        backgroundColor: Colors.alertlightgreen,
        elevation : 5,
        marginTop : 10,
        marginBottom : 10,
        alignSelf : 'center',
        borderRadius : 10
    },
    orderid : {
        fontFamily : Constants.fontFamilybold,
        color : Colors.black
    },
    toprow : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    datetime : {
        fontFamily : Constants.fontFamilynormal,
        color : Colors.black,
        fontSize : 12
    },
    name : {
        fontFamily : Constants.fontFamilybold,
        color : Colors.black,
        fontSize : 15,
        width : '100%'
    },
    address : {
        fontFamily : Constants.fontFamilynormal,
        color : Colors.black,
        fontSize : 13,
        width : '100%'
    },
    ordertypecontainer : {
        paddingTop : 5,
        paddingBottom : 5,
        paddingLeft : 15,
        paddingRight : 15,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        elevation : 5,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'flex-start',
        marginTop : 10
    },
    ordertype : {
        fontFamily : Constants.fontFamilynormal,
        color : Colors.white,
        fontSize : 13,
    }
})

export default styles;