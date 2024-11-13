import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Theme from '../../utils/theme';

interface CustomInputProps {
  hasName?: boolean;
  textBoxContainer?: any;
  isLeftImage?: boolean;
  leftImageSource?: any;
  leftImageStyle?: any;
  txtbxstyl?: any;
  plcholder?: string;
  plcholdercolor?: any;
  allowMultiLine?: boolean;
  encryption?: boolean;
  encryptionIconContainer?: any;
  encryptionIconSource?: any;
  encryptionIconStyle?: any;
  rightIcon?: boolean;
  rightIconSource?: any;
  rightIconStyle?: any;
  control?: any;
  errTxt?: any;
  errTxtstyle?: any;
  onChangeTexts?: (e: string) => void;
  fieldName?: any;
  keyboardType?: any;
  autoCap?: boolean;
  value?: string;
  editable?: boolean;
  selectionColor?: string;
  onSubmitEditing?: any;
  returnKeyType?: any;
  reference?: any;
  iconPress?: any;
  maxLength?: any;
}

export const CustomInput = ({
  textBoxContainer,
  isLeftImage,
  leftImageSource,
  leftImageStyle,
  txtbxstyl,
  plcholder,
  allowMultiLine,
  encryption,
  encryptionIconContainer,
  encryptionIconStyle,
  rightIcon,
  rightIconSource,
  rightIconStyle,
  control,
  errTxt,
  onChangeTexts,
  fieldName,
  keyboardType,
  autoCap,
  value,
  editable,
  selectionColor,
  onSubmitEditing,
  returnKeyType,
  reference,
  errTxtstyle,
  iconPress,
  maxLength,
  plcholdercolor,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={textBoxContainer}>
      <Text style={styles.plcholderStyle}>{plcholder}</Text>
      <Controller
        control={control}
        name={fieldName}
        render={({field: {onChange}}) => (
          <View style={txtbxstyl}>
            <TextInput
              removeClippedSubviews={false}
              ref={reference}
              editable={editable}
              style={styles.txtInputStyle}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              multiline={allowMultiLine}
              onChangeText={(e: string) => {
                onChange(e), onChangeTexts && onChangeTexts(e);
              }}
              secureTextEntry={encryption ? showPassword : !showPassword}
              value={value}
              keyboardType={keyboardType}
              selectionColor={selectionColor}
              autoCapitalize={!autoCap ? 'none' : 'words'}
              maxLength={maxLength}></TextInput>
            {encryption && (
              <TouchableOpacity
                style={encryptionIconContainer}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}>
                <Image
                  source={
                    showPassword
                      ? require('../../assets/closedEye.png')
                      : require('../../assets/openEye.png')
                  }
                  style={encryptionIconStyle}
                  resizeMode="cover"></Image>
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      <Text allowFontScaling={false} style={errTxtstyle}>
        {errTxt}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  rightIconStyle: {width: 22, height: 22},
  plcholderStyle: {fontSize: 16, color: Theme.APP_BLACK_COLOR},
  txtInputStyle: {flex: 1, fontSize: 19, color: Theme.APP_BLACK_COLOR},
});
