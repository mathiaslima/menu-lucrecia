import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
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
    uri?: string;
}

interface PostLUCCProps {
    title: string;
    date: string;
    dataCompany: DataCompany;
    onPress: () => void;
    style?: any;
}



const message = `
    Olá, vim do App Cardápios Lucrécia!\nGostaria de fazer um pedido.
`

const PostLUCC = ({
    title,
    onPress,
    dataCompany,
    style,

}: PostLUCCProps) => {



    const messageSharedNumber = `Olá, vim do App Cardápios Lucrécia!\nAqui está o número do estabelecimento ${dataCompany.name} - ${dataCompany.phone}`

    const ICONS_DEFAULT = [
        {
            icon: <FontAwesome name="whatsapp" size={Constants.layout.icon} color={Constants.colors.primaryDark} />,
            onPress: () => Linking.openURL(`whatsapp://send?text=${message}&phone=+55${dataCompany.phone}`),
        },
        {
            icon: <AntDesign name="sharealt" size={Constants.layout.icon} color={Constants.colors.primaryDark} />,
            onPress: () => Linking.openURL(`whatsapp://send?text=${messageSharedNumber}`),
        }
    ]


    return (
        <View style={[styles.container, style]}>
            <PostHeaderLUCC
                icon={<Ionicons name="restaurant-outline" size={Constants.layout.icon} color={Constants.colors.dark} />}
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