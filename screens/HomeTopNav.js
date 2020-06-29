import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Image,
    Dimensions,
} from 'react-native';
import IconButton from './IconButton';
import Stories from './Stories';

const { width } = Dimensions.get('window');

const HomeTopNav = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topWrapper}>
                <View style={styles.topLeftWrapper}>
                    <IconButton
                        style={styles.icons}
                        name="md-camera"
                        size={28}
                        color="black"
                    />
                </View>

                <Image
                    source={require('../assets/logo.png')}
                    style={styles.Logo}
                    resizeMode="contain"
                />

                <View style={styles.topRightWrapper}>

                    <IconButton
                        style={styles.icons}
                        name="md-send"
                        size={20}
                        color="black"
                    />
                </View>
            </View>

            <Stories />
        </SafeAreaView>
    );
};
export default HomeTopNav;
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },
    topWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    topLeftWrapper: {},
    topRightWrapper: {
        flexDirection: 'row',
    },
    Logo: {
        width: 100,
        height: 40,
        position: 'absolute',
        top: 0,
        left: width / 2 - 50,
    },
    icons: {
        marginHorizontal: 10,
    },
});