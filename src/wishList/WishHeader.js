import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WishHeader = ({
    show,
}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>할 일 목록</Text>
        <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={show}
            >
                <Ionicons name='ios-add' color='#FFFFFF' size={24} />
            </TouchableOpacity>
      </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'tomato',
    },
    title: {
        padding:15,
        fontSize:18,
        textAlign:'center'
    },
    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        padding:15,
        marginRight:10,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default WishHeader 