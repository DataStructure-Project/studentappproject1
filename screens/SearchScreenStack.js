import React,{useState} from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';


import SearchBar from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated,{Easing} from 'react-native-reanimated'
import { Searchbar } from 'react-native-paper';

const {Value, timing} = Animated;

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height



const input_box_translate_x_config=()=>{
    duration: 200;
      toValue: 0;
      easing: Easing.inOut(Easing.ease)
}
 const back_button_opacity_config = ()=>{
   duration: 200;
   toValue: 1;
   easing: Easing.inOut(Easing.ease);
 };
const SearchScreenStack=() => {

    
    return (
      <SafeAreaView style={styles.header_safe_area}>
        <View style={styles.header}>
          <View style={styles.header_inner}>
            <View>
              <Image
                source={require('../assets/logon.png')}
                style={{width: 152, height: 30}}
              />
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              style={styles.search_icon_box}>
              <Icon name="search" size={22} color="#000000" />
            </TouchableHighlight>
            
          </View>
        </View>
      </SafeAreaView>
    );
};
export default SearchScreenStack;
const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
  },
  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  search_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width - 32,
  },
});

