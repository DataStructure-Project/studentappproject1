import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TopRatingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TopRatingScreen</Text>
      <Button title="click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};
export default TopRatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
