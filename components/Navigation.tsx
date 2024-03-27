import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import ListView from '../screens/list/index';

function Navigation() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="List" component={ListView} />
    </Drawer.Navigator>
  );
}
export default Navigation;
