import React,{useState} from 'react';
import { View, Text, Button, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import RootStackScreen from './RootStackScreen';
import Icon from 'react-native-vector-icons/Entypo';
import categoriesList from './categories';
import styled from 'styled-components';
import Carousel from './Carousel';

import {Data} from '../data/Data'

const Face=({icon,title,color,full}) =>{
    return(
        <View style={styles.faceGroup}>
            {full?(
            <View style={{backgroundColor:color,borderRadius:40}}>
            <Icon name={icon} size={35} color={'#fff'} />
                </View>
            ) :(
                    <Icon name={icon} size={35} color={color} />
            )}
            <Text style={[styles.faceDescription,{color}]}>{title}</Text>
        </View>
    );
};
const HomeScreen = ({ navigation }) => {
    const [selectedCategory,setSelectedCategory]=useState("All");
    const changeCategory=(category) =>{
       setSelectedCategory(category);
    };
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Hi,Qoobee</Text>
          <Text style={styles.caption}>How are you feeling today?</Text>
        </View>
        <View style={styles.faceContainers}>
          <Face icon="emoji-flirt" title="Great" color="#ff4757" />
          <Face icon="emoji-happy" title="Happy" color="#ff6348" />
          <Face icon="emoji-neutral" title="Normal" color="#ff6348" />
          <Face icon="emoji-sad" title="Sad" color="#747d8c" />
          <Face icon="emoji-neutral" title="Awful" color="#2f3542" />
        </View>
        <Categories
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {categoriesList.map((category, index) => {
            return (
              <Category
                key={index}
                onPress={() => changeCategory(category)}>
                <CategoryName
                  selected={selectedCategory === category ? true : false}>
                  {category}
                </CategoryName>
              </Category>
            );
          })}
        </Categories>
        
      </View>
    );
};
export default HomeScreen;
const Categories=styled.ScrollView`
    marginTop:32px;
    flex-grow:0;

`;
const Category=styled.TouchableOpacity`
   align-items:center;
   margin:16px;
   height:32px;

`;
const CategoryName=styled.Text`
    color: ${props =>(props.selected ? "#819ee5" : "#9a9a9a")};
    font-weight: ${props =>(props.selected? "700" : "500")};

`;

const styles=StyleSheet.create({
    userCardBody:{
        flexDirection: 'row',
        padding:10,
        backgroundColor:'#dff9fb',
        margin:10,
    },
    cardLeftSide:{
        paddingHorizontal:10,
        flex:1,
    },
    userCardHeading:{
        fontSize:24,
        fontWeight:'bold'
        
    },
    userCardMore:{
        fontWeight:'bold',
        color:'#FDA7DF',
        fontSize:20,
        marginTop:10
    },
    container:{
        flex:1,
    },
    headerContainer:{
        padding:20,
        paddingHorizontal:20,
        marginTop:-20,
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    },
    caption:{
        fontSize:20,
        color:'#fff',
    },
    faceContainers:{
        backgroundColor:'#fff',
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:20,
        marginHorizontal:10,
        shadowColor:'#020',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
    },
    faceGroup:{
        justifyContent:'center',
        alignItems:'center'
    },
    faceDescription:{
        fontSize:16,
        marginTop:6,
    },
    
});


