import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,SafeAreaView} from 'react-native';
import Main from './src/main/Main';
import CalendarScreen from './src/calendar/CalendarScreen';
import WishMain from './src/wishList/WishMain';
import MemoMain from './src/memo/MemoMain';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E3E1E1' }}>
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName;
                    if (route.name === "Main") {
                        iconName = focused
                            ? "ios-heart-circle-outline"
                            : "ios-heart-circle";
                    } else if (route.name === "Calendar") {
                        iconName = focused
                            ? "ios-calendar-outline"
                            : "ios-calendar";
                    }else if (route.name === "WishList"){
                      iconName = focused ? "ios-list-outline":"ios-list-sharp";
                    }else if (route.name === "Memo"){
                      iconName = focused ? "ios-book-outline":"ios-book-sharp";
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: "#F0D629",
                inactiveTintColor: "#FFEA8A"
            }}>
            <Tab.Screen name="Main" component={Main}/>
            <Tab.Screen name="Calendar" component={CalendarScreen}/>
            <Tab.Screen name="WishList" component={WishMain}/>
            <Tab.Screen name="Memo" component={MemoMain}/>
        </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
);
};

