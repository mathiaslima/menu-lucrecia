import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextLUCC from '../../Atoms/TextLUCC';
import ButtonIconLUCC from '../../Molecules/ButtonIconLUCC';

interface IconProps {
    icon: any;
    onPress: () => void;
    testID?: string;

}

interface PostFooterLUCCProps {
    testID?: string;
    icons?: IconProps[];
}

const PostFooterLUCC = ({
    testID,
    icons = [],
}: PostFooterLUCCProps) => {

    return (
        <View style={styles.container}>
            <View testID={testID} style={styles.row}>

                {icons.map(({ icon, onPress, testID }: IconProps, index: number) =>
                    <ButtonIconLUCC
                        icon={icon}
                        key={index}
                        onPress={onPress}
                        testID={testID}
                        primary
                    />)
                }
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: -6
    },
    container: {
        marginHorizontal: 8
    }
});

export default PostFooterLUCC;