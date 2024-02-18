import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Event = () => {
  return (
    <View style={styles.container}>
      <Text>WishList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     // Set background color to black
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Event;
