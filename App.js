import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shows from './src/pages/Shows';
import NewShow from './src/pages/NewShow';
import HomePage from './src/pages/HomePage';
import TabBar from './src/components/TabBar';


export default function App() {
  const TabNav = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <TabNav.Navigator tabBar={props => <TabBar {...props}/>}>
        <TabNav.Screen name="Home" component={HomePage} />
        <TabNav.Screen name="Shows" component={Shows} />
        <TabNav.Screen name="NewShow" component={NewShow} />
      </TabNav.Navigator>
    </NavigationContainer>
  )
}


