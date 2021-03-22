import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Main from './src/main/Main';
import CalendarScreen from './src/calendar/CalendarScreen';
import WishMain from './src/wishList/WishMain';
import Memo from './src/memo/Memo';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const MainStack = createStackNavigator();
function MainStackScreen() {
    return (
        <MainStack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:"transparent"},
          headerTintColor:"trnasparent"}}
        >
            <MainStack.Screen name="Main" component={Main}/>
        </MainStack.Navigator>
    );
}

const CalendarStack = createStackNavigator();
function CalendarStackScreen() {
    return (
        <CalendarStack.Navigator>
            <CalendarStack.Screen name="CalendarScreen" component={CalendarScreen}/>
        </CalendarStack.Navigator>
    );
}
const WishMainStack = createStackNavigator();
function WishMainStackScreen() {
    return (
        <WishMainStack.Navigator>
            <WishMainStack.Screen name="WishMain" component={WishMain}/>
        </WishMainStack.Navigator>
    );
}
const MemoStack = createStackNavigator();
function MemoStackScreen() {
    return (
        <MemoStack.Navigator>
            <MemoStack.Screen name="Memo" component={Memo}/>
        </MemoStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
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
                    }else if (route.name === "WishMain"){
                      iconName = focused ? "ios-list-outline":"ios-list-sharp";
                    }else if (route.name === "Memo"){
                      iconName = focused ? "ios-book-outline":"ios-book-sharp";
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: "#ff5722",
                inactiveTintColor: "#d9c6a5"
            }}>
            <Tab.Screen name="Main" component={MainStackScreen}/>
            <Tab.Screen name="Calendar" component={CalendarStackScreen}/>
            <Tab.Screen name="WishMain" component={WishMainStackScreen}/>
            <Tab.Screen name="Memo" component={MemoStackScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
);
}

