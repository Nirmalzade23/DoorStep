import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { s, vs } from 'react-native-size-matters';

export type Store = {
  name: string;
  image: any;
};

type StoreListProps = {
  stores: Store[];
};

const { width } = Dimensions.get('window');

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
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
    marginTop: vs(10),
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