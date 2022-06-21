import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import TextLUCC from '../../Atoms/TextLUCC';
import PostLUCC from '../../Templates/PostLUCC';
import { DATA_COMPANIES } from '../../Assets/DATA';
import Carousel from 'react-native-snap-carousel';
import PostCarouselLUCC from '../../Organisms/PostCarouselLUCC';

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'homeScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};



const HomeScreen = ({ navigation }: Props) => {

    const [images, setImages] = useState<string[]>([]);
    const width = Dimensions.get('window').width;

    const onPressPost = (images: string[]) => {
        setImages(images)
    }

    return (
        <View style={{ flex: 1 }}>
            <TextLUCC bold h1 center>Cardapios Lucrécia</TextLUCC>
            {DATA_COMPANIES.map((company, index) => {
                return (
                    <PostLUCC
                        title={company.name}
                        date={new Date().toISOString()}
                        dataCompany={company}
                        onPress={() => onPressPost(company.images)}
                    />
                );
            })}
            <PostCarouselLUCC />
            {/* {images.length > 0 && (
                <Carousel
                    sliderWidth={width}
                    itemWidth={width}
                    data={images}
                    renderItem={this._renderItem}
                >
                    <View style={{ flex: 1, backgroundColor: "#ff1" }} />
                    <View style={{ flex: 1, backgroundColor: "#fa5" }} />
                    <View style={{ flex: 1, backgroundColor: "#f55" }} />
                </Carousel>
            )} */}
        </View>
    );
}

export default HomeScreen;