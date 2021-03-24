import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const CalendarHeader = ({
}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>캘린더</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E3E1E1',
    },
    title: {
        padding:15,
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
    }
})


export default CalendarHeader 