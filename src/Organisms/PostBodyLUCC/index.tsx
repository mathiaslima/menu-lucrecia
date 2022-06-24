import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface PostBodyLUCCProps {
    image?: any;
    onPress?: () => void;
}

const PostBodyLUCC = ({ onPress, image }: PostBodyLUCCProps) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: image }}
            />
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        height: 380,
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    }
});

export default PostBodyLUCC;