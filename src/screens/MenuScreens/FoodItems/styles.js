import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.gray,
    },
    itemseparator  : {
        height : 0.5,
        width : '90%',
        backgroundColor : Colors.black,
    },
    itemcontainer : {
        width: '95%',
        padding : 10,
        backgroundColor : Colors.white,
        elevation : 5,
        marginTop : 8,
        marginBottom : 8,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        alignSelf : 'center',
        borderRadius : 10
    },
    itemname : {
        fontSize : 16,
        fontFamily : Constants.fontFamilybold,
        color : Colors.black,
        width : '100%'
    },
    turnedoff : {
        fontSize : 10,
        fontFamily : Constants.fontFamilynormal,
        color : 'red',
        marginBottom : 5
    },
    imagecontainer : {
        width: 80,
        height : 80,
        borderRadius: 100,
        marginRight : 10,
        backgroundColor : Colors.gray,
        elevation : 5
    },
    itemsecondline : {
        fontSize : 12,
        fontFamily : Constants.fontFamilynormal,
        color : Colors.darkgray
    },
    pagetitle : {
        fontFamily : Constants.fontFamilybold,
        fontSize : 25,
        color : Colors.black,
        marginLeft : 10,
        marginTop : 10,
        marginBottom : 10
    }
})

export default styles;