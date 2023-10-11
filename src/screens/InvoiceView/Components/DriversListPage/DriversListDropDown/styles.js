import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    overlay : {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.white,
    },
    fieldcontainer : {
        width : '95%',
        height : 50,
        backgroundColor : Colors.white,
        elevation: 5,
        justifyContent : 'space-between',
        alignSelf : 'center',
        alignItems : 'center',
        borderRadius : 10,
        marginTop : 10,
        marginBottom : 10,
        padding : 10,
        flexDirection : 'row'
    },
    optionContainer : {
        width : '95%',
        backgroundColor : Colors.white,
        elevation: 5,
        justifyContent : 'center',
        alignSelf : 'center',
        borderRadius : 10,
        marginTop : 10,
        marginBottom : 10,
        padding : 10,
    },
    optiontitle : {
        fontFamily : Constants.fontFamilynormal,
        color : Colors.black,
        fontSize : 15
    },
    optionsubtitle : {
        fontFamily : Constants.fontFamilybold,
        color : Colors.black,
        fontSize : 15
    },
    selectdeitemtext : {
        fontFamily : Constants.fontFamilybold,
        color : Colors.black,
        fontSize : 15
    }
})

export default styles;