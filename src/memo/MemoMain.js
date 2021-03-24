// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Memo from './Memo';
import MemoContent from './MemoContent';

const Stack = createStackNavigator();

function MemoMain() {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#E3E1E1',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}> 
        <Stack.Screen name="메모장" component={Memo}/>
		    <Stack.Screen name="MemoContent" component={MemoContent}  options={{
          title:'글내용'
        }}/>
      </Stack.Navigator>
  );
}

export default MemoMain;