import Search from '@/component/searchBar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import ProfileImage from '../../component/ProfileImage'
import StoreList from '../../component/StoreList'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {/* TODO: Update to correct profile route */}}>
          <ProfileImage />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={{fontSize:s(40), fontWeight:"semibold"}}> What is your  </Text>
        <Text style={{fontSize:s(40), fontWeight:"semibold", color:"#8C8D91"}}> Need Today?</Text>
      </View>
      <Search/>
      <StoreList/>
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