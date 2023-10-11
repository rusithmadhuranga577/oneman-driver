import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    buttoncontainer : {
        width: 60, 
        height: 60,
        backgroundColor: Colors.primary,
        borderRadius : 100,
        alignItems : 'center',
        justifyContent: 'center',
        position : 'absolute',
        zIndex: 200,
        bottom : 20,
        right : 20,
        elevation : 8
    },
})

export default styles;