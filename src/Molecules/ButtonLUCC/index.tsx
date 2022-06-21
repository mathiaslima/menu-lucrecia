import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import TextLUCC, { TextLUCCProps } from '../../Atoms/TextLUCC';
import Constants from '../../config';

interface ButtonLUCCProps extends TextLUCCProps {
    onPress: () => void;
    style?: any;
    title: string;
    disabled?: boolean;
}

const ButtonLUCC = ({
    onPress,
    style,
    disabled,
    title = "",
    white = true,
    bold = true,
    ...rest
}: ButtonLUCCProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style]}
            disabled={disabled}
        >
            <TextLUCC white bold {...rest} >{title}</TextLUCC>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Constants.colors.primaryDark,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 20,
    },
});

export default ButtonLUCC;
