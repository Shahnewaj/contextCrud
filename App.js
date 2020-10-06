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
import {BlogProvider} from './src/context/BlogContext';
const App = () => {
  return (
    <>
      <BlogProvider>
        <AppStack />
      </BlogProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
