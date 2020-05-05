import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to the login"
        onPress={() => navigation.navigate('SignInScreen')}
      />
    </View>
  );
};
export default HomeScreen;
