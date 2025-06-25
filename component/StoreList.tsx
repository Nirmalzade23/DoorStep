import { router } from 'expo-router';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { s, vs } from 'react-native-size-matters';

export type Store = {
  name: string;
  image: any;
};

type StoreListProps = {
  stores: Store[];
};

const { width } = Dimensions.get('window');
const CARD_MARGIN = s(10);
const NUM_COLUMNS = 2;
const CARD_SIZE = (width - CARD_MARGIN * (NUM_COLUMNS * 2 + 2)) / NUM_COLUMNS;

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  const handlePress = (store: Store) => {
    router.push({ pathname: '/StoreDetail', params: { storeName: store.name } });
  };

  return (
    <FlatList
      data={stores}
      numColumns={NUM_COLUMNS}
      keyExtractor={(_, idx) => idx.toString()}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default StoreList;

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: CARD_MARGIN,
    paddingTop: vs(5),
    alignItems: 'center',
  },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    backgroundColor: '#f5f5f5',
    borderRadius: s(12),
    alignItems: 'center',
    justifyContent: 'center',
    margin: CARD_MARGIN,
    elevation: 2,
  },
  image: {
    width: s(100),
    height: s(100),
    marginBottom: s(10),
    resizeMode: 'contain',
  },
  label: {
    fontSize: s(16),
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
}); 