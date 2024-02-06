

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import ListView from './screens/list/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name="ListView" component={ListView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;