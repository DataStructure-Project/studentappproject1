import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from './colors';


const datas = [
    {
        name: 'Bill Gates',
        image: 'data:image/jpeg;base64,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',
    },
    {
        name: 'Mark Zuckerberg',
        image: 'https://www.nydailynews.com/resizer/7JCjE4Azz_ujlEyYBPq9AFYRWC8=/1200x800/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/TNQ5KBGVINGAJLPWUBUBOIMPHY.jpg',
    },
    {
        name: 'Elon Musk',
        image: 'https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTY2MzU3ODcyNjM1MDI5MTY2/spacex_ceo_elon_musk_visits_nnc_and_afspc_190416-f-zz999-006_cropped.jpg',
    },
    {
        name: 'Emma Watson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Emma_Watson_interview_in_2017.jpg',
    },
    {
        name: 'Steve Jobs',
        image: 'https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1513863842&w=1400&h=950',
    },
];

const Stories = () => {
    const renderItem = item => (
        <LinearGradient
            colors={colors.gradients.primary}
            key={item.name}
            style={styles.itemContainer}>
            <View style={styles.itemImgWrapper}>
                <Image source={{ uri: item.image }} style={styles.itemImg} resizeMode="cover" />
            </View>
        </LinearGradient>
    );

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {datas.map(renderItem)}
        </ScrollView>
    );
};
export default Stories;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 8,
    },
    itemContainer: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    itemImgWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    itemImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});