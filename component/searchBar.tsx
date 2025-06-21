import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(10),
    backgroundColor: '#f0f0f0',
    borderRadius: s(5),
    margin: s(10),
  },
  icon: {
    marginRight: s(10),
  },
  input: {
    flex: 1,
    height: vs(40),
    paddingHorizontal: s(10),
  },
})