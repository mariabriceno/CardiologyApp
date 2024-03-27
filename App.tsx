import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './components/Navigation';
import {data} from './data';
import ListProvider from './providers/ListProvider';

function App() {
  return (
    <ListProvider content={data}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ListProvider>
  );
}

export default App;
