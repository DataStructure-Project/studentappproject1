import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ScrollView, Dimensions } from 'react-native';
import Backgroundheader from './Backgroundheader';
import { Avatar, Title, Caption, Paragraph } from 'react-native-paper';
import HomeScreenStack from './HomeScreenStack';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Backgroundheader style={styles.bg} />
        <ScrollView style={styles.scrollView}>
          <HomeScreenStack/>
         
        </ScrollView>
      </View>
    </>
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
