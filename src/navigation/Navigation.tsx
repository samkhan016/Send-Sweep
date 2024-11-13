import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Theme from '../utils/theme';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../screens/Chat';
import MainTabScreen from './MainTabs';

interface NavigationProps {
  navigationRef: any;
}

export default function Navigation({navigationRef}: NavigationProps) {
  const Stack = createStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Theme.APP_BACKGROUND_COLOR,
    },
  };

  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabScreen}
          options={{headerShown: false}} // Hide the header for the main tabs
        />
        <Stack.Screen
          name="CHAT"
          component={Chat}
          options={{
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
