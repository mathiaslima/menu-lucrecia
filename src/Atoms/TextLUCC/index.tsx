import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import Constants from '../../config';
import { destructureArrayOfObjectsIntoSigleObject } from '../../Functions/utils';

export interface TextLUCCProps {
    onPress?: () => void;
    style?: any;
    children?: any;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    p?: boolean;
    bold?: boolean;
    italic?: boolean;
    color?: string;
    primary?: boolean;
    white?: boolean;
    center?: boolean;
    left?: boolean;
    right?: boolean;
}

const TextLUCC = ({
    style,
    children,
    onPress,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    bold,
    italic,
    color,
    primary,
    white,
    center,
    left,
    right,

}: TextLUCCProps) => {
    function determineFontSize() {
        let fontSize = Constants.fonts.mediumFontSize;
        if (h1) fontSize = Constants.fonts.xLargeFontSize;
        if (h2) fontSize = Constants.fonts.largeFontSize;
        if (h3) fontSize = Constants.fonts.mediumLargeFontSize;
        if (p) fontSize = Constants.fonts.mediumFontSize;
        if (h4) fontSize = Constants.fonts.mediumSmallFontSize;
        if (h5) fontSize = Constants.fonts.smallFontSize;
        return fontSize;
    }

    function determineFontColor() {
        let fontColor = Constants.colors.dark;
        if (color) fontColor = color;
        if (primary) fontColor = Constants.colors.primary;
        if (white) fontColor = Constants.colors.white;
        return fontColor;
    }
    function determineTextAlignment() {
        if (center) return 'center';
        if (left) return 'left';
        if (right) return 'right';
    }
    const fontColor = determineFontColor();
    const fontSize = determineFontSize();
    const textAlign = determineTextAlignment() || 'left';
    const styles = StyleSheet.create({
        mainTextStyle: {
            color: fontColor,
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
            textAlign,
            fontSize,
            ...destructureArrayOfObjectsIntoSigleObject(style),
        },
    });

    return (
        <Text onPress={onPress} style={styles.mainTextStyle}>{children}</Text>
    )
}
export default TextLUCC;
