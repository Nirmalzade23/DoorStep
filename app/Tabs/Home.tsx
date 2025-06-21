import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import ProfileImage from '../../component/ProfileImage'
import { s , vs} from 'react-native-size-matters'
import { router } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/../component/Profile")}>
          <ProfileImage />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={{fontSize:s(40), fontWeight:"semibold"}}> What would you  </Text>
        <Text style={{fontSize:s(40), fontWeight:"semibold", color:"#8C8D91"}}> like to order?</Text>
      </View>
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