import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screens/home';
import details from './screens/details';

export default function App() {

  const stack = createStackNavigator();
  return (
    <NavigationContainer>

      <stack.Navigator>

        <stack.Screen name = 'home' component ={home}></stack.Screen>
        <stack.Screen name = 'details' component ={details}></stack.Screen>


      </stack.Navigator>

    </NavigationContainer>

  );
}
