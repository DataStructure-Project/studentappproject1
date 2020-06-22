import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Image,Dimensions,FlatList,Animated} from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import CarouselItem from './CarouselItem'
let flatList 
const Carousel=({data})=>{
    const scrollX=new Animated.Value(0)
    let position=Animated.divide(scrollX,width)

    if(data && data.length){
        return (
          <View>
            <FlatList
              data={data}
              ref={flatList => {
                this.flatList = flatList;
              }}
              keyExtractor={(item, index) => 'key' + index}
              horizontal
              pagingEnabled
              scrollEnabled
              snapToAlignment="center"
              scrollEventThrottle={16}
              decelerationRate={'fast'}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return <CarouselItem item={item} />;
              }}
              onScroll={Animated.event([
                {nativeEvent: {contentOffset: {x: scrollX}}},
              ])}
            />
            <View style={StyleSheet.dotView}>
              {data.map((_, i) => {
                let opacity = position.interpolate({
                  inputRange: [i - 1, i, i + 1],
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: 'clamp',
                });
                return (
                  <Animated.View
                    key={i}
                    style={{
                      opacity,
                      height: 10,
                      width: 10,
                      background: '#595959',
                      margin: 8,
                      borderRadius: 5,
                    }}
                  />
                );
              })}
            </View>
          </View>
        );
    }
    console.log('Please provide picture')
    return null
}

export default Carousel;

const style=StyleSheet.create({
    dotView:{
        flexDirection:'row',
        justifyContent:'center'
    },
})