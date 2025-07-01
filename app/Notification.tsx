import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
     <Text style={{textAlign:"center",
      fontWeight:"semibold", fontSize: 35, color: "#000"}}>
     Notification</Text>

     <View>

      
     </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF",
    
  }
  
})