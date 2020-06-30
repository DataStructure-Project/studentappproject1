import React from 'react';
import {View, Text, Button, StyleSheet,StatusBar,ScrollView, Dimensions} from 'react-native';
import Backgroundheader from './Backgroundheader';
import backgroundheader from './Backgroundheader';
import {Avatar,Title,Caption,Paragraph} from 'react-native-paper';
import ProfileScreenStack from './ProfileScreenStack'

const ProfileScreen = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ProfileScreenStack/>
      </ScrollView>
    </View>
    </>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F1F2'
  },
  bg:{
    position:'absolute',
    width:Dimensions.get("window").width,
  },
  scrollView:{
    flex:1
  },
});
