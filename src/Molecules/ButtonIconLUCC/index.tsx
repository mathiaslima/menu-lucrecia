import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Constants from '../../config';

interface ButtonIconLUCCProps {
    onPress?: () => void;
    style?: any;
    disabled?: boolean;
    icon: any;
    testID?: string;
    color?: string;
    primary?: boolean;
    white?: boolean;
    secondary?: boolean;
    dark?: boolean;
}

const ButtonIconLUCC = ({
    onPress,
    style,
    disabled,
    icon,
    testID,
    color,
    primary,
    white,
    secondary,
    dark,
}: ButtonIconLUCCProps) => {

    function determineColor() {
        let color = Constants.colors.primaryDark;
        if (primary) color = Constants.colors.primary;
        if (white) color = Constants.colors.white;
        if (secondary) color = Constants.colors.secondary;
        if (dark) color = Constants.colors.dark;
        return color;
    }

    const backgroundColor = color || determineColor();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style, {  }]}
            disabled={disabled}
            testID={testID}
        >
            {icon}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: Constants.colors.primaryDark,
        height: Constants.layout.icon + 12,
        width: Constants.layout.icon + 12,
        borderRadius: (Constants.layout.icon + 12) / 2,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default ButtonIconLUCC;
