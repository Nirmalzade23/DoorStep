import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

type SearchProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const Search: React.FC<SearchProps> = ({ value, onChangeText }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={value}
        onChangeText={onChangeText}
      />
    </TouchableOpacity>
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