import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, LogBox, View, StyleSheet, ActivityIndicator } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../index';
import TextLUCC from '../../Atoms/TextLUCC';
import PostLUCC from '../../Templates/PostLUCC';
import PostCarouselLUCC from '../../Organisms/PostCarouselLUCC';
import Constants from '../../config';
import { shuffle } from '../../Functions/utils';
LogBox.ignoreLogs(["ViewPropTypes"]);

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'homeScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

type TCompanies = {
    id: number;
    name: string;
    image: string;
    description: string;
    images: string[];
    address: string;
    phone: string;
    email: string;
    website: string;
    instagram: string;
    uri: string;
}

const HomeScreen = ({ navigation }: Props) => {

    const [images, setImages] = useState<string[]>([]);
    const [companies, setCompanies] = useState<TCompanies[]>([] as TCompanies[])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCompanies()
    }, [])

    const getCompanies = async () => {
        setLoading(true)
        await fetch("https://my-json-server.typicode.com/mathiaslima/Api-de-Teste/companies")
            .then(response => response.json())
            .then(data => {
                setCompanies(shuffle(data))
            });
        setLoading(false)
    }

    const onPressPost = (images: string[]) => {
        setImages(images)
    }

    const onCloseCarousel = () => {
        setImages([])
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextLUCC bold h1 style={Constants.styles.shadowPattern} >Cardapios Lucrécia</TextLUCC>

            </View>
            {loading ?
                <View style={styles.loading}>
                    <ActivityIndicator color={Constants.colors.backgroundDark} size={"large"} />
                </View>
                :
                <ScrollView style={Constants.styles.page}>

                    {companies.map((company, index) => {
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
            }
            <PostCarouselLUCC images={images} visible={images.length > 0} onClose={onCloseCarousel} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.colors.white
    },
    header: {
        backgroundColor: Constants.colors.white,
        padding: Constants.layout.padding,
        paddingVertical: 8
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen;