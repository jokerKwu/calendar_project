  import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

 function Main() {
    return (  
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
      }}>
        <Image style={{
          width: 400,
          height: 500,
        }}
        source={require("../../static/img/사진1.jpg")}
        />
      </View>
    );
}
export default Main;