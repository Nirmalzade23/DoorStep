import Search from '@/component/searchBar'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import ProfileImage from '../../component/ProfileImage'
import StoreList, { Store } from '../../component/StoreList'
import { router } from 'expo-router'

const stores: Store[] = [
  { name: 'Food', image: require('../../assets/images/food.jpg') },
  { name: '7/11', image: require('../../assets/images/7eleven.jpg') },
  { name: 'Starbucks', image: require('../../assets/images/starbucks.jpg') },
  { name: 'Hardware', image: require('../../assets/images/Hardware.jpg') },
  { name: 'Car Washing', image: require('../../assets/images/carwash.jpg') },
  { name: 'Medical store', image: require('../../assets/images/medical.jpg') },
  { name: 'Wellness Forever', image: require('../../assets/images/icon.png') },
  { name: 'Grocery', image: require('../../assets/images/grocery.jpg') },
  { name: 'Laundary', image: require('../../assets/images/laundry.jpg') },
  { name: 'Cloth Store', image: require('../../assets/images/cloths.jpg') },
];

const Home = () => {
  const [search, setSearch] = useState('');
  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() =>router.push("/Profile")}>
          <ProfileImage />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={{fontSize:s(40), fontWeight:"semibold"}}> What is your  </Text>
        <Text style={{fontSize:s(40), fontWeight:"semibold", color:"#8C8D91"}}> Need Today?</Text>
      </View>
      <Search value={search} onChangeText={setSearch} />
      <StoreList stores={filteredStores} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    right: s(-310),
    paddingHorizontal: (-20),
    marginTop: s(10)
  },
  text: { marginTop:vs(30),
    justifyContent:"center",
    alignItems:"center"

  }
})