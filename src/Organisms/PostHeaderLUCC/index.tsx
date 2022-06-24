import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextLUCC from '../../Atoms/TextLUCC';
import ButtonIconLUCC from '../../Molecules/ButtonIconLUCC';

interface PostHeaderLUCCProps {
    icon: any;
    title: string;
    description: string;
}

const PostHeaderLUCC = ({
    icon,
    title,
    description
}: PostHeaderLUCCProps) => {

    return (
        <View style={styles.row}>
            <ButtonIconLUCC
                icon={icon}
                disabled
                primary
            />
            <TextLUCC h2 bold style={styles.text} >
                {title}{"\n"}
                <TextLUCC h3>
                    {description}
                </TextLUCC>
            </TextLUCC>
        </View>

    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 4,
        marginVertical: 8,
        paddingRight: 16,
    },
    text: { flexShrink: 1 },
    container: {
        marginHorizontal: 8
    }
});

export default PostHeaderLUCC;