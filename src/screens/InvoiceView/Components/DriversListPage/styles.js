import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    overlay : {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.gray,
    },
    pleaseselect : {
        fontFamily : Constants.fontFamilynormal,
        color : 'red',
        fontSize : 13,
        alignSelf : 'center'
    }
})

export default styles;