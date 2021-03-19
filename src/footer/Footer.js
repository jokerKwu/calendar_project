import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

function Footer(props) {
  const goToMain = () =>{
    props.navigation.navigate('Main');
  }
    return (  
      <View style={{
        flex:1, alignItems:'center',justifyContent:'center'
      }}>
        <TouchableOpacity onPress={goToMain}>
          <Text>메인 이동하기</Text>
        </TouchableOpacity>
      </View>
           
    );
}



export default Footer;