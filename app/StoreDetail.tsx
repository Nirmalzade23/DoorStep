import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SparkleWashDetail from '../component/SparkleWashDetail';

const STORE_ITEMS: Record<string, { name: string }[]> = {
  Food: [
    { name: 'Margherita Pizza' },
    { name: 'Veggie Burger' },
    { name: 'California Roll' },
    { name: 'Chicken Tacos' },
    { name: 'Chicken Biryani' },
    { name: 'Chicken Rolls' },
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

const STORE_OVERVIEWS: Record<string, { type: 'delivery' | 'service', text: string }> = {
  Food: {
    type: 'delivery',
    text: 'Enjoy fast and reliable food delivery from your favorite local restaurants. Browse a variety of cuisines, track your order in real-time, and get exclusive offers. Our food delivery service ensures your meal arrives hot and fresh, right at your doorstep!'
  },
  '7/11': {
    type: 'delivery',
    text: 'Get your daily essentials, snacks, and beverages delivered quickly from your nearest 7/11 store. Enjoy 24/7 convenience and exclusive deals with our reliable delivery service.'
  },
  Starbucks: {
    type: 'delivery',
    text: 'Order your favorite Starbucks coffee, beverages, and treats for delivery. Enjoy the Starbucks experience at home or work, with fast and fresh delivery.'
  },
  Hardware: {
    type: 'delivery',
    text: 'Need tools or hardware supplies? Get them delivered to your doorstep from trusted hardware stores. Fast, convenient, and hassle-free delivery for all your DIY needs.'
  },
  'Medical store': {
    type: 'delivery',
    text: 'Order medicines and health essentials from your local medical store. Safe, secure, and quick delivery for your health and wellness needs.'
  },
  'Wellness Forever': {
    type: 'delivery',
    text: 'Get wellness products, supplements, and essentials delivered from Wellness Forever. Your health and well-being, delivered to your door.'
  },
  Grocery: {
    type: 'delivery',
    text: 'Shop for fresh groceries and daily essentials online. Fast and reliable grocery delivery from your favorite local stores.'
  },
  'Cloth Store': {
    type: 'delivery',
    text: 'Discover the latest fashion and clothing trends. Get your favorite outfits delivered from top cloth stores, right to your home.'
  },
  'Car Washing': {
    type: 'service',
    text: 'Book a professional car washing service at your convenience. Our experts ensure your car is spotless, inside and out, with quick and reliable service.'
  },
  Laundry: {
    type: 'service',
    text: 'Enjoy hassle-free laundry service. Schedule a pickup and get your clothes washed, dried, and delivered fresh to your doorstep.'
  },
};

const StoreDetail = () => {
  const { storeName } = useLocalSearchParams();
  if (storeName === 'Sparkle Wash') {
    return <SparkleWashDetail />;
  }
  const items = STORE_ITEMS[storeName as string];
  const overview = STORE_OVERVIEWS[storeName as string];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{storeName}</Text>
      {overview && (
        <View style={styles.overviewBox}>
          <Text style={styles.overviewTitle}>
            {overview.type === 'delivery' ? 'Delivery Overview' : 'Service Overview'}
          </Text>
          <Text style={styles.overviewText}>{overview.text}</Text>
        </View>
      )}
      {items ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>{item.name}
                {item.name === 'Paneer Butter Masala' && (
                  <Text style={styles.mostOrdered}>  • Most ordered this week</Text>
                )}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.subtitle}>No list available for this store.</Text>
      )}

      <Text style={styles.peopleFavourite}>People favourite of this week</Text>
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
  overviewBox: {
    backgroundColor: '#f0e6ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: 320,
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#5d17b0',
  },
  overviewText: {
    fontSize: 16,
    color: '#333',
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
  mostOrdered: {
    color: '#d35400',
    fontSize: 14,
    fontWeight: 'bold',
  },
  peopleFavourite: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5d17b0',
    marginTop: 24,
    marginBottom: 8,
  },
}); 