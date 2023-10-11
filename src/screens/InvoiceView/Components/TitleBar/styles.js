import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width: '100%', 
        height: 50,
        backgroundColor: Colors.white,
        padding : 10,
        alignItems : 'center',
        justifyContent : 'space-between',
        elevation : 10,
        flexDirection : 'row'
    },
    title : {
        fontFamily : Constants.fontFamilybold,
        fontSize : 18,
        color : Colors.black
    }
})

export default styles;