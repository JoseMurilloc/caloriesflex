import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../screens/Welcome';

const Stack = createNativeStackNavigator();

export function UnauthorizedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
