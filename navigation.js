import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "./redux/store";
const store = configureStore();


export default function RootNavigation(){
    const Stack = createNativeStackNavigator()

    const screenOptions = {
        headerShown:false,
    }


    return(
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}