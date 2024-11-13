import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/app/store';
import {ToastProvider} from 'react-native-toast-notifications';
import SetupScreen from './src/navigation/SetupScreen';

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider placement="top">
        <SetupScreen />
      </ToastProvider>
    </Provider>
  );
}
