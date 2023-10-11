import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    summerycardcontainer : {
        width : '95%',
        padding : 10,
        backgroundColor : '#0044a5',
        borderRadius : 20,
        alignSelf : 'center'
    },
    componentrow : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    title : {
        fontFamily : Constants.fontFamilynormal,
        fontSize : 14,
        color : Colors.white
    },
    subtitle : {
        fontFamily : Constants.fontFamilybold,
        fontSize : 20,
        color : Colors.white,
        textAlign : 'center'
    }
})

export default styles;