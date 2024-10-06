import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';

const Stack=createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator