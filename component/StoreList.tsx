import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { s, vs } from 'react-native-size-matters';

const stores = [
  { name: 'Food', image: require('../assets/images/icon.png') },
  { name: '7/11', image: require('../assets/images/icon.png') },
  { name: 'Starbucks', image: require('../assets/images/icon.png') },
  { name: 'Hardware', image: require('../assets/images/icon.png') },
  { name: 'Car Washing', image: require('../assets/images/icon.png') },
  { name: 'Medical store', image: require('../assets/images/icon.png') },
  { name: 'Wellness Forever', image: require('../assets/images/icon.png') },
  { name: 'Grocery', image: require('../assets/images/icon.png') },
  { name: 'Laundary', image: require('../assets/images/icon.png') },
  { name: 'Cloth Store', image: require('../assets/images/icon.png') },
];

const { width } = Dimensions.get('window');

const StoreList = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
      {stores.map((store, idx) => (
        <TouchableOpacity key={idx} style={styles.card}>
          <Image source={store.image} style={styles.image} />
          <Text style={styles.label}>{store.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StoreList;

const styles = StyleSheet.create({
  scroll: {
    marginTop: vs(30),
    maxHeight: vs(400), // adjust as needed
  },
  grid: {
    alignItems: 'center',
    paddingHorizontal: s(10),
  },
  card: {
    width: width - s(40),
    height: vs(80),
    backgroundColor: '#f5f5f5',
    borderRadius: s(12),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    marginVertical: s(8),
    elevation: 2,
  },
  image: {
    width: s(50),
    height: s(50),
    marginRight: s(20),
    resizeMode: 'contain',
  },
  label: {
    fontSize: s(18),
    fontWeight: '600',
    color: '#333',
  },
}); 