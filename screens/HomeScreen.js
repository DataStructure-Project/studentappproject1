import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ScrollView, Dimensions } from 'react-native';
import Backgroundheader from './Backgroundheader';
import { Avatar, Title, Caption, Paragraph } from 'react-native-paper';

import HomeTopNav from './HomeTopNav';
import ContentContainer from './ContentContainer';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeTopNav />
      <ContentContainer />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F1F2'
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get("window").width,
  },
  scrollView: {
    flex: 1
  },
});
