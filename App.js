import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppState,
} from 'react-native';
import AppStack from './navigation/AppNavigation';
import {Provider} from './src/context/BlogContext';
const App = () => {
  return (
    <>
      <Provider>
        <AppStack />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
