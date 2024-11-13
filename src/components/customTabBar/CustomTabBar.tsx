import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Theme from '../../utils/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function CustomTabBar({state, descriptors, navigation}: any) {
  const getTabInfo = (route: any) => {
    const {options} = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;
    const focusedScreenName = state.routes[state.index]?.name;
    const isFocused = label === focusedScreenName;
    return {
      isFocused,
      label,
      options,
    };
  };
  const onLongPress = (route: any, isFocused: boolean) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };
  const onPress = (route: any, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };
  return (
    <View style={styles().tabView}>
      {state.routes.map((route: any) => {
        const {isFocused, label} = getTabInfo(route);
        return (
          <TouchableOpacity
            key={route.key}
            style={styles(isFocused).tab}
            onPress={() => onPress(route, isFocused)}
            onLongPress={() => onLongPress(route, isFocused)}>
            <Text style={styles(isFocused).tabTxt}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = (props?: any) =>
  StyleSheet.create({
    tabTxt: {
      color: props ? Theme.APP_CARD_SPACE_GREY : Theme.APP_HELP_BlUE,
    },
    tabView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: Theme.APP_FB_BLUE,
    },
    tab: {
      height: heightPercentageToDP(8),
      justifyContent: 'center',
      alignItems: 'center',
      width: widthPercentageToDP(25),
      backgroundColor: props ? Theme.APP_RECORDER_BLUE : Theme.APP_FB_BLUE,
    },
  });
