import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PatikaStore from './screens/PatikaStore';

const App = () => {
  return (
    <View style={styles.container}>
      <PatikaStore />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
