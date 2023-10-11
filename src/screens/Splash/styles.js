import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width: '100%', 
        height: '100%',
        backgroundColor: '#fff',
    },
    halfround : {
        height: '70%',
        width: '150%',
        backgroundColor: Colors.primary,
        elevation: 10,
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        borderColor: Colors.secondary,
        borderWidth: 12,
        alignSelf: 'center',
        position: 'absolute',
        top: -40,
        alignItems : 'center',
        justifyContent : 'center'
    },
    image : {
        alignSelf: 'center',
        height : '100%',
        width : '100%',
    },
    logo : {
        width : '100%',
        height : '100%',
        resizeMode: 'contain',
        alignSelf : 'center'
    },
    imagecontainer : {
        width : '100%',
        height : '80%',
        resizeMode: 'contain',
    },
    merchanttext : {
        fontSize : 45,
        fontFamily: Constants.fontFamilybold,
        color : Colors.white,
        position: 'absolute',
        alignSelf : 'center',
        bottom : 20
    }
})

export default styles;