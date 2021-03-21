import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Footer from './src/footer/Footer';
import Main from './src/main/Main';
import WishList from './src/wishList/WishList';
import Memo from './src/memo/Memo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function App() {
    return (  
      <>
        <Footer/>
      </>
    );
}

