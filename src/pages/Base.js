import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';

import NavigationUser from '../navigations/NavigationUser';
import NavigationRoot from '../navigations/NavigationRoot';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{ headerTintColor:'pink', headerStyle: { backgroundColor:'tomato'}, }}
                >
        <Stack.Screen
            name='Splash'
            component={Splash}
            options={{ headerShown: false}}
        /> 
        <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false}}
        />
        <Stack.Screen
            name='Register'
            component={Register}
            options={{ headerShown: false}}
        />
        <Stack.Screen
            name='Verify'
            component={Verify}
            options={{ headerShown: false}}
        />
        {/* <Stack.Screen
            name='PassReset'
            component={PassReset}
            options={{ headerShown: false}}
        /> 
        <Stack.Screen
            name='TelVerify'
            component={TelVerify}
            options={{ headerShown: false}}
        /> */}
        <Stack.Screen
            name='NavigationRoot'
            component={NavigationRoot}
            options={{ headerShown: false}}
        />
        <Stack.Screen
            name='NavigationUser'
            component={NavigationUser}
            options={{ headerShown: false}}
        />       
        </Stack.Navigator>
    </NavigationContainer>
  )
}