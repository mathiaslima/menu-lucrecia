import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const PostCarouselLUCC = () => {
    const width = Dimensions.get('window').width;

    const carouselItems = [
        {
            title: "Item 1",
            text: "Text 1",
        },
        {
            title: "Item 2",
            text: "Text 2",
        },
        {
            title: "Item 3",
            text: "Text 3",
        },
        {
            title: "Item 4",
            text: "Text 4",
        },
        {
            title: "Item 5",
            text: "Text 5",
        },
    ]

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const _renderItem = ({ item, index }: any) => {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }

    return (
        <View
            style={styles.container}
        >
            <Carousel
                layout={"default"}
                // ref={ref => carouselRef.current = ref}
                data={carouselItems}
                sliderWidth={width}
                itemWidth={width}
                renderItem={_renderItem}
                onSnapToItem={index => setActiveIndex(index)} />
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
        alignItems: 'center',
        backgroundColor: "#00000080"
    },
    text: {
        color: '#fff',
    }

});

export default PostCarouselLUCC;