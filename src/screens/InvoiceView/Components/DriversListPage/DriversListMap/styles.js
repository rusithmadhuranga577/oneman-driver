import { StyleSheet } from "react-native"
import { Colors, Constants } from '@common';

const styles = StyleSheet.create({
    container : {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.white,
        padding : 10
    },
    map : {
        height: '70%',
        width: '95%',
        alignSelf : 'center',
    }
})

export default styles;