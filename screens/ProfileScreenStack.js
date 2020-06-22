import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ScrollView, Dimensions,Image,TouchableOpacity } from 'react-native';
import Backgroundheader from './Backgroundheader';
import backgroundheader from './Backgroundheader';
import { Avatar, Title, Caption, Paragraph } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
    return (
            <View style={styles.userInfo}>
                <Avatar.Image
                    source={{
                        uri: 'https://i.pinimg.com/originals/e0/f5/94/e0f594562e27d84b0d0d960bebd3b70f.png'
                    }}
                    size={150}
                    style={{ alignSelf: 'center',marginTop:80}}
                />
            <View style={{alignItems:'center',alignSelf:'center' }}>
                <Title style={styles.title}>Qoobee Trinh</Title>
                <Caption style={styles.caption}>Newbie</Caption>
                <Caption style={styles.caption2}>Student at HCMUE</Caption>
            </View>

            <View style={styles.button}>
                    <TouchableOpacity
                    style={[
                        styles.follow, 
                        {
                             borderColor: '#a4b0be',
                            borderWidth: 1,
                            marginTop: 15,
                        },
                             ]}>
                    <Text
                        style={[
                            styles.textSign,
                            {
                                color: '#009387',
                            },
                        ]}>
                        Follow
            </Text>
                    </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.follow,
                        {
                            borderColor: '#a4b0be',
                            borderWidth: 1,
                            marginTop: 15,
                        },
                    ]}>
                    <Text
                        style={[
                            styles.textSign,
                            {
                                color: '#009387',
                            },
                        ]}>
                        Submissions
            </Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.row}>
                <View style={styles.section}>
                    <Caption style={styles.caption}>RATINGS</Caption>
                    <Paragraph style={(styles.paragraph, styles.caption)}>
                        {' '}
                  1190{' '}
                    </Paragraph>
                </View>
                <View style={styles.section}>
                    <Caption style={styles.caption}>FOLLOWERS</Caption>
                    <Paragraph style={(styles.paragraph, styles.caption)}>
                        150
                </Paragraph>
                    
                </View>
                
            </View>
            <View style={styles.container1}>
                <Image
                    source={{ uri: 'https://codeforces.com/predownloaded/cd/13/cd13c18ccec6b0536e6d9cbfb9c6bf3ad554b55f.png' }}
                    style={{ width: 400, height: 300 }}
                />
            </View>
            

            </View>
       
        
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F1F2'
    },
    container1: {
        flex: 1,
        
    },
    bg: {
        position: 'absolute',
        width: Dimensions.get("window").width,
    },
    userImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 135,
        height: 135
    },
    title: {
        fontSize: 30,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 20,
        lineHeight: 20,
        
        alignContent:'center',
        justifyContent:'center'
    },
    caption2    : {
        fontSize: 20,
        lineHeight: 30,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection:'row',
        borderBottomColor:'#ff4757',
        marginLeft:50,
        justifyContent:'space-between'
    },
    follow: {
        width: '40%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
