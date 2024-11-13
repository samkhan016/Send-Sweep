import React, {useRef} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {NavigationContainerRef} from '@react-navigation/native';

import Navigation from './Navigation';

export default function SetupScreen() {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  return (
    <View style={styles.mainCont}>
      <StatusBar barStyle={'dark-content'} />
      <Navigation navigationRef={navigationRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {flex: 1},
});
