import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const WishHeader = ({
}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>할 일 목록</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#E3E1E1',
    },
    title: {
        padding:15,
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
    }
})


export default WishHeader 