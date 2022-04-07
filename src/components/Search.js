import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View style={styles.search}>
      <TextInput placeholder="Ara.." style={styles.input} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {},
  input: {
    borderRadius: 10,
    height: 40,
    backgroundColor: '#EFF2F3',
    paddingLeft: 20,
  },
});
