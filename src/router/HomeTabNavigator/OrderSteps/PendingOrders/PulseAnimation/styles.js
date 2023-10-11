import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        backgroundColor : Colors.pulsebackground,
        alignItems : 'center',
        justifyContent : 'center'
    },
    buttonholder : {
        width : '50%',
        position : 'absolute',
        bottom : 20,
        alignSelf : 'center'
    },
    titleholder : {
        position : 'absolute',
        alignSelf : 'center',
        top : 30
    },
    title : {
        fontSize : 25,
        fontFamily : Constants.fontFamilybold,
        color : Colors.white
    }
})

export default styles;