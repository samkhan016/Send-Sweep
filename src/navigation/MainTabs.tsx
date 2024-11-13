import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/customTabBar/CustomTabBar';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import BlackList from '../screens/BlackList';
import AppSetting from '../screens/AppSetting';

export default function MainTabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="BlackList" component={BlackList} />
      <Tab.Screen name="AppSetting" component={AppSetting} />
    </Tab.Navigator>
  );
}
