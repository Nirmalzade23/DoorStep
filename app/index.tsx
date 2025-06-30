import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'

const index = () => {
  return (
    <View style={styles.container} >
      <View style={styles.Header}>
        <Text style={styles.headertext}>DoorKnock</Text>
      </View>
      <View style={styles.image}>
        <Image source={require('../assets/images/anime.jpg')} style={{ width: 362, height: 338 }} />
      </View>
      <View style={{
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{ fontSize: 14, marginBottom: s(5) }}>
          One for all store
        </Text>
        <Text style={{
          fontSize: 25, fontWeight: "semibold", marginBottom: s(5)
        }}>
          What's your
        </Text>
        <Text style={{ fontSize: 30, fontWeight: 'semibold', color: "#8C8D91" }}>
          Choice Today??
        </Text>
      </View>


      <TouchableOpacity onPress={() => router.push("/Login")}>
        <View style={styles.btn}>

          <Text style={{
            color: "#fff",
            justifyContent: "center",
            alignItems: "center"
          }}>Get Started</Text>

        </View>
      </TouchableOpacity>
      <Text style={{fontSize:14}}>
        Here we have daily offer 
      </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex:1
    
  },
  Header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: vs(30),
  },
  headertext: {
    fontSize: s(35),
    fontWeight: "semibold"
  },
  image: {
    marginTop: vs(50),
    backgroundColor: "#fff",
    borderRadius: s(20),
    height: vs(338),
    width: s(362)
  },
  btn: {
    marginTop: vs(20),
    height: s(60),
    width: s(250),
    backgroundColor: "#5d17b0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  }
})