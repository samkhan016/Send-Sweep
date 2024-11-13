import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Theme from '../utils/theme';

export default function AppSetting() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.setting}>
      <Text>Set app as default</Text>
      <Switch
        trackColor={{
          false: Theme.APP_DARK_GREY,
          true: Theme.APP_STARBOARD_GREEN,
        }}
        thumbColor={isEnabled ? Theme.APP_WHITE_COLOR : Theme.APP_DROP_GREY}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  setting: {
    width: widthPercentageToDP(95),
    backgroundColor: Theme.APP_WHITE_COLOR,
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2),
    height: heightPercentageToDP(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
