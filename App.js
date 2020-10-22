import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shows from './src/pages/Shows';
import NewShow from './src/pages/NewShow';
import HomePage from './src/pages/HomePage';
import TabBar from './src/components/TabBar';
import { AppContext, appReducer, initialState } from './src/context/AppContext';


export default function App() {
  const TabNav = createBottomTabNavigator();
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <TabNav.Navigator tabBar={props => <TabBar {...props} />}>
          <TabNav.Screen name="Home" component={HomePage} />
          <TabNav.Screen name="Shows" component={Shows} />
          <TabNav.Screen name="NewShow" component={NewShow} />
        </TabNav.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}


