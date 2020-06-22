import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import SearchScreenStack from './SearchScreenStack'

const Search = ({}) => {
    return (
        <>
            <SearchScreenStack/>
        <View style={styles.post}/>
            <View style={styles.post}/>
            <View style={styles.post}/>
            </>
    );
};
export default Search;

const styles = StyleSheet.create({
    post:{
        backgroundColor:'#e4e6eb',
        height:100,
        margin:16,
        borderRadius:16
    }

});