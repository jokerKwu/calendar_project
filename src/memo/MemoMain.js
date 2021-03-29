// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Memo from './Memo';
import MemoContent from './MemoContent';

const Stack = createStackNavigator();

export default function MemoMain() {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#E3E1E1',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}> 
        <Stack.Screen name="Memo" component={Memo} options={{
          headerShown:false
        }}/>
		    <Stack.Screen name="MemoContent" component={MemoContent}  options={{
          title:'내용'
        }}/>
      </Stack.Navigator>
  );
}