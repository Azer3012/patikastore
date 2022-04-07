import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import Search from '../components/Search';

import store from '../data/StoreData';
import RenderStoreItem from '../components/RenderStoreItem';
const PatikaStore = () => {
  const renderStore = ({item}) => <RenderStoreItem item={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PatikaStore</Text>
      <Search />
      <View style={styles.list}>
        <FlatList
          data={store}
          keyExtractor={item => item.id}
          renderItem={renderStore}
          style={styles.flatList}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default PatikaStore;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingBottom: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'indigo',
    marginBottom: 15,
  },

  flatList: {
    width: width,
    marginTop: 20,
  },
});
