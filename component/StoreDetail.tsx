import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const STORE_ITEMS: Record<string, { name: string }[]> = {
  Food: [
    { name: 'Pizza Palace' },
    { name: 'Burger Haven' },
    { name: 'Sushi World' },
    { name: 'Taco Town' },
    { name: 'Curry Corner' },
  ],
  '7/11': [
    { name: '7/11 Main Street' },
    { name: '7/11 Downtown' },
    { name: '7/11 Express' },
  ],
  Starbucks: [
    { name: 'Starbucks Central' },
    { name: 'Starbucks Mall' },
    { name: 'Starbucks Drive-Thru' },
  ],
  Hardware: [
    { name: 'Ace Hardware' },
    { name: 'Tool Town' },
    { name: 'FixIt Center' },
  ],
  'Car Washing': [
    { name: 'Sparkle Wash' },
    { name: 'Clean Machine' },
    { name: 'AutoShine' },
  ],
  'Medical store': [
    { name: 'HealthPlus Pharmacy' },
    { name: 'MediCare' },
    { name: 'Wellness Drugs' },
  ],
  'Wellness Forever': [
    { name: 'Wellness Forever Main' },
    { name: 'Wellness Forever Express' },
  ],
  Grocery: [
    { name: 'Fresh Mart' },
    { name: 'Daily Grocers' },
    { name: 'Green Basket' },
  ],
  Laundary: [
    { name: 'Quick Clean' },
    { name: 'Laundry Hub' },
    { name: 'Wash & Go' },
  ],
  'Cloth Store': [
    { name: 'Trendy Threads' },
    { name: 'Fashion Point' },
    { name: 'Style Studio' },
  ],
};

const StoreDetail = () => {
  const { storeName } = useLocalSearchParams();
  const items = STORE_ITEMS[storeName as string];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{storeName}</Text>
      {items ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>{item.name}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.subtitle}>No list available for this store.</Text>
      )}
    </View>
  );
};

export default StoreDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  restaurantCard: {
    width: 300,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
}); 