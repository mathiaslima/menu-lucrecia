import React, { useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ButtonIconLUCC from '../../Molecules/ButtonIconLUCC';
import { AntDesign } from '@expo/vector-icons';
import Constants from '../../config';

interface PostCarouselLUCCProps {
    testID?: string;
    images: string[];
    visible?: boolean;
    onClose?: () => void;
}

const PostCarouselLUCC = ({ testID, images, visible, onClose }: PostCarouselLUCCProps) => {
    const width = Dimensions.get('window').width;

    const carouselItems = images

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const _renderItem = ({ item, index }: any) => {
        return (
            <Image
                key={index}
                style={styles.image}
                source={{ uri: item }}
            />

        )
    }

    if (!visible) return <View />;

    return (
        <View
            style={styles.container}
            testID={testID}
        >

            <ButtonIconLUCC
                icon={<AntDesign name="closecircleo" size={Constants.layout.icon + 8} color="white" />}
                onPress={onClose}
                style={styles.close}
            />
            <Carousel
                layout={"default"}
                // ref={ref => carouselRef.current = ref}
                data={carouselItems}
                sliderWidth={width}

                itemWidth={width}
                renderItem={_renderItem}
                onSnapToItem={index => setActiveIndex(index)} />
            <View style={{ flex: 1 }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: "#00000080"
    },
    text: {
        color: '#fff',
    },
    carouselContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    close: {
        position: "absolute",
        top: 24,
        zIndex: 1,
    }

});

export default PostCarouselLUCC;