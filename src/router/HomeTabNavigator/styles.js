import { StyleSheet } from "react-native"
import { Colors } from '@common';

const styles = StyleSheet.create({
    hometabtitle : {
        fontSize : 10,
        color : Colors.black,
        marginBottom : 10
    },
    tabBarStyle : {
        height : 80,
        paddingTop : 10
    },
    badgecontainer : {
        height : 18,
        width: 18,
        backgroundColor : 'red',
        alignItems : 'center',
        justifyContent: 'center',
        borderRadius : 30,
        position : 'absolute',
        top : -3,
        right : -8
    }
})

export default styles;