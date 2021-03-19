import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Footer from './src/footer/Footer';
import Main from './src/main/Main';
import Calendar from './src/calendar/Calendar';
import WishList from './src/wishList/WishList';
import Memo from './src/memo/Memo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (  
      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="WishList" component={WishList} />
            <Stack.Screen name="Memo" component={Memo} />
          </Stack.Navigator>
        </NavigationContainer>
        <Footer/>
      </View>
    );
}

