import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import Search from '../../component/searchBar';

const STORE_LISTS: Record<string, { name: string; image: any }[]> = {
  'car washing': [
    { name: 'Sparkle Wash', image: require('../../assets/images/carwash.jpg') },
    { name: 'Clean Machine', image: require('../../assets/images/carwash.jpg') },
    { name: 'AutoShine', image: require('../../assets/images/carwash.jpg') },
    { name: 'WashPro', image: require('../../assets/images/carwash.jpg') },
    { name: 'Quick Car Wash', image: require('../../assets/images/carwash.jpg') },
  ],
  'food': [
    { name: 'Pizza Palace', image: require('../../assets/images/food.jpg') },
    { name: 'Burger Haven', image: require('../../assets/images/food.jpg') },
    { name: 'Sushi World', image: require('../../assets/images/food.jpg') },
    { name: 'Taco Town', image: require('../../assets/images/food.jpg') },
    { name: 'Curry Corner', image: require('../../assets/images/food.jpg') },
  ],
  '7/11': [
    { name: '7/11 Main Street', image: require('../../assets/images/7eleven.jpg') },
    { name: '7/11 Downtown', image: require('../../assets/images/7eleven.jpg') },
    { name: '7/11 Express', image: require('../../assets/images/7eleven.jpg') },
    { name: '7/11 City Center', image: require('../../assets/images/7eleven.jpg') },
    { name: '7/11 Quick Stop', image: require('../../assets/images/7eleven.jpg') },
  ],
  'starbucks': [
    { name: 'Starbucks Central', image: require('../../assets/images/starbucks.jpg') },
    { name: 'Starbucks Mall', image: require('../../assets/images/starbucks.jpg') },
    { name: 'Starbucks Drive-Thru', image: require('../../assets/images/starbucks.jpg') },
    { name: 'Starbucks Plaza', image: require('../../assets/images/starbucks.jpg') },
    { name: 'Starbucks Corner', image: require('../../assets/images/starbucks.jpg') },
  ],
  'hardware': [
    { name: 'Ace Hardware', image: require('../../assets/images/Hardware.jpg') },
    { name: 'Tool Town', image: require('../../assets/images/Hardware.jpg') },
    { name: 'FixIt Center', image: require('../../assets/images/Hardware.jpg') },
    { name: 'BuildPro', image: require('../../assets/images/Hardware.jpg') },
    { name: 'Handy Depot', image: require('../../assets/images/Hardware.jpg') },
  ],
  'medical store': [
    { name: 'HealthPlus Pharmacy', image: require('../../assets/images/medical.jpg') },
    { name: 'MediCare', image: require('../../assets/images/medical.jpg') },
    { name: 'Wellness Drugs', image: require('../../assets/images/medical.jpg') },
    { name: 'PharmaQuick', image: require('../../assets/images/medical.jpg') },
    { name: 'Care Chemist', image: require('../../assets/images/medical.jpg') },
  ],
  'wellness forever': [
    { name: 'Wellness Forever Main', image: require('../../assets/images/icon.png') },
    { name: 'Wellness Forever Express', image: require('../../assets/images/icon.png') },
    { name: 'Wellness Forever Plus', image: require('../../assets/images/icon.png') },
    { name: 'Wellness Forever 24x7', image: require('../../assets/images/icon.png') },
    { name: 'Wellness Forever Care', image: require('../../assets/images/icon.png') },
  ],
  'grocery': [
    { name: 'Fresh Mart', image: require('../../assets/images/grocery.jpg') },
    { name: 'Daily Grocers', image: require('../../assets/images/grocery.jpg') },
    { name: 'Green Basket', image: require('../../assets/images/grocery.jpg') },
    { name: 'SuperMart', image: require('../../assets/images/grocery.jpg') },
    { name: 'Quick Grocery', image: require('../../assets/images/grocery.jpg') },
  ],
  'laundry': [
    { name: 'Quick Clean', image: require('../../assets/images/laundry.jpg') },
    { name: 'Laundry Hub', image: require('../../assets/images/laundry.jpg') },
    { name: 'Wash & Go', image: require('../../assets/images/laundry.jpg') },
    { name: 'Fresh Laundry', image: require('../../assets/images/laundry.jpg') },
    { name: 'Laundry Express', image: require('../../assets/images/laundry.jpg') },
  ],
  'cloth store': [
    { name: 'Trendy Threads', image: require('../../assets/images/cloths.jpg') },
    { name: 'Fashion Point', image: require('../../assets/images/cloths.jpg') },
    { name: 'Style Studio', image: require('../../assets/images/cloths.jpg') },
    { name: 'Cloth House', image: require('../../assets/images/cloths.jpg') },
    { name: 'Dress Gallery', image: require('../../assets/images/cloths.jpg') },
  ],
};

// Flatten all stores into a single array with category
const ALL_STORES = Object.entries(STORE_LISTS).flatMap(([category, stores]) =>
  stores.map(store => ({ ...store, category }))
);

const explore = () => {
  const [search, setSearch] = useState('');
  const searchKey = search.trim().toLowerCase();
  // Filter stores by name or category
  const filteredStores = ALL_STORES.filter(store =>
    store.name.toLowerCase().includes(searchKey) ||
    store.category.toLowerCase().includes(searchKey)
  );
  return (
    <View style={styles.container}>
      <Text style={{fontSize:s(25), marginBottom: vs(15)}}>explore</Text>
      <Search value={search} onChangeText={setSearch} />
      <View style={styles.filterRow}>
        <View style={styles.filterButton}><Text style={styles.filterText}>Price</Text></View>
        <View style={styles.filterButton}><Text style={styles.filterText}>Rating</Text></View>
        <View style={styles.filterButton}><Text style={styles.filterText}>Distance</Text></View>
        <View style={styles.filterButton}><Text style={styles.filterText}>offers</Text></View>
      </View>
      {filteredStores.length > 0 && (
        <FlatList
          data={filteredStores}
          keyExtractor={(item) => item.name + item.category}
          style={{marginTop: vs(20)}}
          renderItem={({ item }) => (
            (item.name === 'Sparkle Wash' || item.name === 'Clean Machine' || item.name === 'AutoShine'  || item.name === 'WashPro') ? (
              <TouchableOpacity
                style={styles.storeCard}
                onPress={() => router.push({ pathname: '/StoreDetail', params: { storeName: item.name } })}
                activeOpacity={0.8}
              >
                <Image source={item.image} style={styles.storeImage} />
                <View>
                  <Text style={styles.storeName}>{item.name}</Text>
                  <Text style={{ color: '#888', fontSize: s(14) }}>{item.category}</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.storeCard}>
                <Image source={item.image} style={styles.storeImage} />
                <View>
                  <Text style={styles.storeName}>{item.name}</Text>
                  <Text style={{ color: '#888', fontSize: s(14) }}>{item.category}</Text>
                </View>
              </View>
            )
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
      {filteredStores.length === 0 && (
        <Text style={{marginTop: vs(30), color: '#888'}}>No results found.</Text>
      )}
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(10),
    width: '100%',
    paddingHorizontal: s(10),
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    padding: s(10),
    borderRadius: s(20),
  },
  filterText: {
    fontSize: s(16),
    fontWeight: 'bold',
  },
  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: s(12),
    padding: s(10),
    marginBottom: vs(10),
    width: s(320),
  },
  storeImage: {
    width: s(60),
    height: s(60),
    borderRadius: s(10),
    marginRight: s(15),
    resizeMode: 'cover',
  },
  storeName: {
    fontSize: s(18),
    fontWeight: '600',
    color: '#333',
  },
});