import React, { useState } from 'react';
import { Dimensions, ScrollView, LogBox } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../index';
import TextLUCC from '../../Atoms/TextLUCC';
import PostLUCC from '../../Templates/PostLUCC';
import { DATA_COMPANIES } from '../../Assets/DATA';
import PostCarouselLUCC from '../../Organisms/PostCarouselLUCC';
import styles from '../../config/styles';
LogBox.ignoreLogs(["ViewPropTypes"]);

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'homeScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};



const HomeScreen = ({ navigation }: Props) => {

    const [images, setImages] = useState<string[]>([]);

    const onPressPost = (images: string[]) => {
        setImages(images)
    }

    const onCloseCarousel = () => {
        setImages([])
    }

    return (
        <>
            <ScrollView style={styles.page}>
                <TextLUCC bold h1 center >Cardapios Lucrécia</TextLUCC>
                {DATA_COMPANIES.map((company, index) => {
                    return (
                        <PostLUCC
                            title={company.name}
                            key={index}
                            date={new Date().toISOString()}
                            dataCompany={company}
                            onPress={() => onPressPost(company.images)}
                        />
                    );
                })}

            </ScrollView>
            <PostCarouselLUCC images={images} visible={images.length > 0} onClose={onCloseCarousel} />
        </>

    );
}

export default HomeScreen;