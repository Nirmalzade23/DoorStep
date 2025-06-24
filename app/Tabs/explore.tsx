import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const explore = () => {
  return (
    <View style={styles.container}>
      <Text>explore</Text>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});