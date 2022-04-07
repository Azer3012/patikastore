import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const RenderStoreItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.imgURL}} />
      </View>
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      {!item.inStock ? <Text style={styles.inStock}>Stokda Yok</Text> : null}
    </View>
  );
};

export default RenderStoreItem;

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    width: width / 2 - 30,
    marginRight: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
  },
  imageContainer: {
    height: height / 4,
    width: '80%',
    alignSelf: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  price: {
    fontWeight: '700',
  },
  inStock: {
    color: 'red',
  },
});
