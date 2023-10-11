import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.white,
        padding : 15
    },
    bottomcard : {
        width: '100%',
        backgroundColor: Colors.white,
        padding : 20,
        elevation: 7,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        zIndex: 98,
    },
    title : {
        fontSize: 15,
        color : Colors.black,
        fontFamily : Constants.fontFamilybold
    },
    subtitle : {
        fontSize: 13,
        color : Colors.black,
        marginTop : 5,
        fontFamily : Constants.fontFamilynormal
    },
    button : {
        width : '98%',
        padding : 10,
        backgroundColor: Colors.white,
        marginTop : 10,
        borderRadius : 8,
        flexDirection : 'row',
        alignItems : 'center',
        elevation : 5,
        alignSelf : 'center',
    },
    buttoncontainer : {
        marginTop : 15,
        zIndex: 99,
        marginBottom : 30
    },
    bottonimage : {
        width: 25, 
        height: 25
    },
    buttontitle : {
        fontSize : 13,
        color : '#000',
        marginLeft : 15,
        fontFamily : Constants.fontFamilybold
    },
    pickercontainer : {
        width: 70,
        height : 50,
        backgroundColor: Colors.gray,
        alignItems: 'center',
        justifyContent : 'center',
        borderRadius : 8
    },
    pickeroptioncontainer : {
        width: '100%',
        height : 50,
        backgroundColor: Colors.white,
        justifyContent : 'space-between',
        padding : 10,
        flexDirection : 'row',
    },
    componentrow : {
        flexDirection: 'row',
        height : 60,
        alignItems : 'center',
        alignSelf : 'center' ,
    },
    countrycodeholder : {
        width: 50,
        height : 50,
        backgroundColor: Colors.gray,
        alignItems: 'center',
        justifyContent : 'center',
        borderTopLeftRadius : 8,
        borderBottomLeftRadius : 8,
        marginLeft : 10,
    },
    input: {
        height: 50,
        padding: 10,
        backgroundColor: Colors.gray,
        width : 200,
        borderTopRightRadius : 8,
        borderBottomRightRadius : 8,
        color : Colors.black
    },
    logoimage : {
        width : '95%',
        height : '30%',
        position : 'absolute',
        top : 20,
        zIndex : 100,
        alignSelf : 'center',
        resizeMode: 'contain',
    },

    // Phone number login
    phonenumbertitle : {
        fontSize : 15,
        alignSelf : 'center',
        fontFamily : Constants.fontFamilybold
    },

    // Otp input
    otpinput: {
        width: 60, 
        height: 60, 
        borderRadius: 100, 
        backgroundColor: Colors.gray
    },

    otppagedescriptiontext : {
        alignSelf : 'center',
        fontFamily : Constants.fontFamilynormal,
        width : '70%',
        textAlign : 'center',
        marginTop : 30,
        fontSize : 15
    },

    didntrecievedcodetext : {
        alignSelf : 'center',
        fontFamily : Constants.fontFamilybold,
        width : '70%',
        textAlign : 'center',
        marginTop : 40,
        fontSize : 20
    },

    sendagainbutton : {
        width : 100,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        borderWidth : 1,
        borderColor : Colors.primary,
        borderRadius : 10,
        marginTop  :20
    },

    sendagainbuttontext : {
        fontFamily : Constants.fontFamilynormal,
        fontSize : 15
    },

    // Username & Password Login
    logintitle : {
        fontSize : 30,
        fontFamily : Constants.fontFamilybold,
        color : Colors.black,
    },
    textinputtitle : {
        fontSize : 15,
        fontFamily : Constants.fontFamilybold,
        color : Colors.darkgray,
    },
    textinputviewrow : {
        flexDirection : 'row',
        width : '98%',
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'center'
    },
    iconholder : {
        width: 50, 
        backgroundColor: Colors.gray, 
        height: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        borderTopLeftRadius : 8,
        borderBottomLeftRadius : 8,
    },
    checkboxcontainer : {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 8,
        alignSelf : 'flex-end'
    },
    checkboxcontainertext: {
        fontSize : 12,
        fontFamily : Constants.fontFamilynormal,
        color : Colors.black,
    }
})

export default styles;