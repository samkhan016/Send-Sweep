import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Theme from '../../utils/theme';

interface CustomAddButtonProps {
  onPress: (e: any) => void;
}

export default function CustomAddButton({onPress}: CustomAddButtonProps) {
  return (
    <TouchableOpacity
      style={styles.plusIconCont}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image
        source={require('../../assets/plus.png')}
        style={styles.plusIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  plusIconCont: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: Theme.APP_SETTING_PINK,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusIcon: {
    width: 30,
    height: 30,
  },
});
