import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

interface SearchBarProps {
  onChangeText: (e: string) => void;
}

export default function CustomSearchBar({onChangeText}: SearchBarProps) {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: widthPercentageToDP(90),
    alignSelf: 'center',
    height: heightPercentageToDP(5),
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
});
