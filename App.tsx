import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Home';
import QRScreen from './src/screens/QR';
import Logo from './src/components/Logo';

const Stack = createStackNavigator();

export default function App() {

	return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerTitle: () => <Logo /> }}
        />
        <Stack.Screen 
          name="QRScreen" 
          component={QRScreen} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
	)
}


