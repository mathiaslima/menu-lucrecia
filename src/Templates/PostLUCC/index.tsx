import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../../config';
import PostHeaderLUCC from '../../Organisms/PostHeaderLUCC';
import PostBodyLUCC from '../../Organisms/PostBodyLUCC';
import PostFooterLUCC from '../../Organisms/PostFooterLUCC';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

interface DataCompany {
    id: number;
    name?: string;
    image?: string;
    description?: string;
    address?: string;
    phone: string;
    email?: string;
    website?: string;
    instagram?: string;
}

interface PostLUCCProps {
    title: string;
    date: string;
    dataCompany: DataCompany;
    onPress: () => void;
    style?: any;
}

const PostLUCC = ({
    title,
    onPress,
    dataCompany,
    style,

}: PostLUCCProps) => {

    const ICONS_DEFAULT = [
        {
            icon: <FontAwesome name="whatsapp" size={Constants.layout.icon} color={Constants.colors.primaryDark} />,
            onPress: () => console.log("whatsapp")
        },
        {
            icon: <AntDesign name="sharealt" size={Constants.layout.icon} color={Constants.colors.primaryDark} />,
            onPress: () => console.log("sharealt")
        }
    ]

    return (
        <View style={[styles.container, style]}>
            <PostHeaderLUCC
                icon={<Ionicons name="restaurant-outline" size={Constants.layout.icon} color={Constants.colors.primaryDark} />}
                title={title}
                description={dataCompany.description || ""}
            />
            <PostBodyLUCC
                image={dataCompany.image}
                onPress={onPress}
            />
            <PostFooterLUCC
                icons={ICONS_DEFAULT}
                description={dataCompany.description}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    }
});

export default PostLUCC;