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
        source={{uri:"https://images.unsplash.com/photo-1478265409131-1f65c88f965c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
        />
      </View>
    );
}
export default Main;